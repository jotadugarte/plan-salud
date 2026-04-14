class WorkoutLogsController < ApplicationController
  def index
    @workout_logs = Current.user.workout_logs
  end

  def show
    # Forced Current.user scoping for privacy (CbC constraints)
    # Automatically throws ActiveRecord::RecordNotFound if malicious access attempted
    @workout_log = Current.user.workout_logs.find(params[:id])
  end

  def create
    # Pre-condition assertion (CbC)
    raise ArgumentError, "Workout log payload is completely missing" if params[:workout_log].blank?

    @workout_log = Current.user.workout_logs.build(workout_log_params)

    if @workout_log.save
      redirect_to workout_logs_url, notice: "Workout log successfully recorded!"
    else
      @workout_logs = Current.user.workout_logs
      render :index, status: :unprocessable_entity
    end
  end

  private

  def workout_log_params
    params.require(:workout_log).permit(:exercise_id, :completed_series, :completed_reps, :completed_weight)
  end
end
