# [REQ-MDIA-004]
class MiDiaController < ApplicationController
  # [REQ-MDIA-004] Shows the "Mi Día" view for the selected date.
  # Pre-condition:  Current.user is authenticated (enforced by ApplicationController).
  # Post-condition: @selected_date, @week_dates, @habits_with_status, @readonly_day are set.
  def index
    @selected_date      = parse_date_param(params[:date])
    @week_start         = @selected_date.beginning_of_week(:monday)
    @week_end           = @week_start + 6.days
    @week_dates         = (@week_start..@week_end).to_a
    @readonly_day       = @selected_date > today_for_user

    habits              = Habit.order(:position)
    logs_by_habit_id    = Current.user
                                 .habit_logs
                                 .where(logged_on: @selected_date)
                                 .index_by(&:habit_id)

    @habits_with_status = habits.map do |habit|
      log = logs_by_habit_id[habit.id]
      { habit: habit, completed: log&.completed || false, log_id: log&.id }
    end
  end

  private

  # [REQ-MDIA-004] Parses date string, falls back to today on any error.
  def parse_date_param(date_str)
    Date.parse(date_str.to_s)
  rescue ArgumentError, TypeError
    today_for_user
  end

  def today_for_user
    Time.current.in_time_zone(Current.user.timezone).to_date
  end
end
