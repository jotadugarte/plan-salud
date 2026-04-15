# [REQ-MDIA-005]
class HabitLogsController < ApplicationController
  # [REQ-MDIA-005] Creates a habit log for the authenticated user.
  # Pre-condition:  logged_on must not be a future date.
  # Post-condition: A HabitLog record exists for (Current.user, habit, logged_on).
  def create
    logged_on = parse_date(habit_log_params[:logged_on])
    return head :forbidden if logged_on > today_for_user

    habit = Habit.find(habit_log_params[:habit_id])
    log   = Current.user.habit_logs.find_or_initialize_by(habit: habit, logged_on: logged_on)
    log.completed = true
    log.save!

    render_habit_turbo_stream(habit: habit, completed: true, log_id: log.id)
  rescue ActiveRecord::RecordNotUnique
    head :ok
  end

  # [REQ-MDIA-005] Destroys a habit log belonging to the authenticated user.
  # Pre-condition:  log must belong to Current.user and not be for a future date.
  # Post-condition: The HabitLog record is deleted.
  def destroy
    log = Current.user.habit_logs.find_by(id: params[:id])
    return head :not_found if log.nil?
    return head :forbidden if log.logged_on > today_for_user

    habit = log.habit
    log.destroy!

    render_habit_turbo_stream(habit: habit, completed: false, log_id: nil)
  end

  private

  def habit_log_params
    params.require(:habit_log).permit(:habit_id, :logged_on)
  end

  def parse_date(date_str)
    Date.parse(date_str.to_s)
  rescue ArgumentError, TypeError
    today_for_user
  end

  def today_for_user
    Time.current.in_time_zone(Current.user.timezone).to_date
  end

  def render_habit_turbo_stream(habit:, completed:, log_id:)
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace(
          "habit_#{habit.id}",
          partial: "mi_dia/habit",
          locals: { habit: habit, completed: completed, log_id: log_id, readonly_day: false }
        )
      end
    end
  end
end
