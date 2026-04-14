require "test_helper"

class WorkoutLogsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(email: "tracker@test.com", password: "pwd", timezone: "UTC")
    @other_user = User.create!(email: "stranger@test.com", password: "pwd", timezone: "UTC")

    @exercise = Exercise.create!(name: "Pushups", default_series: 3, default_reps: 15, default_weight: 0)

    @my_log = WorkoutLog.create!(user: @user, exercise: @exercise)
    @other_log = WorkoutLog.create!(user: @other_user, exercise: @exercise)
  end

  # [REQ-CTRL-001]
  test "cannot access logs without authenticating" do
    get workout_logs_url
    assert_redirected_to new_session_url
  end

  # [REQ-CTRL-002]
  test "cannot show another user's workout log (Privacy Barrier)" do
    # Log in as @user
    post session_url, params: { email: @user.email, password: "pwd" }

    # Attempt to read @other_user's log
    get workout_log_url(@other_log)
    assert_response :not_found
  end

  # [REQ-CTRL-003]
  test "can show own workout log" do
    post session_url, params: { email: @user.email, password: "pwd" }

    get workout_log_url(@my_log)
    assert_response :success
  end
end
