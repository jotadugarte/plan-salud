require "test_helper"

class DailyCheckInsTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(email: "checkin@test.com", password: "pwd", timezone: "UTC", role: "user")
    @exercise = Exercise.create!(name: "Squats", default_series: 4, default_reps: 12, default_weight: 45)
  end

  test "user can explicitly log a workout with their own metrics" do
    # Authenticate
    post session_url, params: { email: @user.email, password: "pwd" }

    # The essence of check-ins: recording an action
    assert_difference "WorkoutLog.count", 1 do
      post workout_logs_url, params: {
        workout_log: {
          exercise_id: @exercise.id,
          completed_series: 4,
          completed_reps: 10,
          completed_weight: 50.5
        }
      }
    end

    assert_redirected_to workout_logs_url

    log = WorkoutLog.last
    assert_equal @user.id, log.user_id
    assert_equal @exercise.id, log.exercise_id
    assert_equal 10, log.completed_reps
  end
end
