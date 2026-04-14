class WorkoutLogsController < ApplicationController
  def index
    @workout_logs = Current.user.workout_logs
  end

  def show
    # Forced Current.user scoping for privacy (CbC constraints)
    # Automatically throws ActiveRecord::RecordNotFound if malicious access attempted
    @workout_log = Current.user.workout_logs.find(params[:id])
  end
end
