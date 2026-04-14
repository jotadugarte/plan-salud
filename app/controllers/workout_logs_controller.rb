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
    # Pre-condition assertion via gentle rescue
    if params[:workout_log].blank?
      return redirect_to workout_logs_url, alert: t(".missing_payload", default: "Falta información requerida.")
    end

    @workout_log = Current.user.workout_logs.build(workout_log_params)

    if @workout_log.save
      redirect_to workout_logs_url, notice: t(".success", default: "¡Registro guardado exitosamente!")
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
