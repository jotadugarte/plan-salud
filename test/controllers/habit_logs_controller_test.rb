require "test_helper"

class HabitLogsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user       = User.create!(email: "habits@test.com", password: "pwd", timezone: "America/Bogota")
    @other_user = User.create!(email: "other@test.com",  password: "pwd", timezone: "America/Bogota")
    @habit      = Habit.find_or_create_by!(key: "desayuno") do |h|
      h.name     = "Desayuno"
      h.category = "alimentacion"
      h.position = 1
    end
  end


  # [REQ-MDIA-005]
  test "redirects to login when not authenticated" do
    post habit_logs_url, params: { habit_log: { habit_id: @habit.id, logged_on: Date.today } }
    assert_redirected_to new_session_url
  end

  # [REQ-MDIA-005]
  test "creates a habit log for today" do
    log_in(@user)
    assert_difference "HabitLog.count", 1 do
      post habit_logs_url,
           params: { habit_log: { habit_id: @habit.id, logged_on: Date.today } },
           as: :turbo_stream
    end
    assert_response :success
  end

  # [REQ-MDIA-005]
  test "rejects creating a log for a future date" do
    log_in(@user)
    assert_no_difference "HabitLog.count" do
      post habit_logs_url,
           params: { habit_log: { habit_id: @habit.id, logged_on: Date.tomorrow } },
           as: :turbo_stream
    end
    assert_response :forbidden
  end

  # [REQ-MDIA-005]
  test "deletes own habit log for today" do
    log_in(@user)
    log = HabitLog.create!(user: @user, habit: @habit, logged_on: Date.today)
    assert_difference "HabitLog.count", -1 do
      delete habit_log_url(log), as: :turbo_stream
    end
    assert_response :success
  end

  # [REQ-MDIA-005]
  test "rejects deleting a log for a future date" do
    log_in(@user)
    # Bypass model validation to create future log directly in DB for this test
    log = HabitLog.new(user: @user, habit: @habit, logged_on: Date.tomorrow)
    log.save(validate: false)
    assert_no_difference "HabitLog.count" do
      delete habit_log_url(log), as: :turbo_stream
    end
    assert_response :forbidden
  end

  # [REQ-MDIA-005]
  test "returns 404 when trying to delete another user's log" do
    log_in(@user)
    other_log = HabitLog.create!(user: @other_user, habit: @habit, logged_on: Date.today)
    assert_no_difference "HabitLog.count" do
      delete habit_log_url(other_log), as: :turbo_stream
    end
    assert_response :not_found
  end
end
