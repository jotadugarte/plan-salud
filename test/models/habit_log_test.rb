require "test_helper"

class HabitLogTest < ActiveSupport::TestCase
  def setup
    @user  = User.create!(email: "test@example.com", password: "password123", timezone: "America/Bogota")
    @habit = Habit.create!(key: "desayuno", name: "Desayuno", category: "alimentacion", position: 1)
  end

  # [REQ-MDIA-003]
  test "invalid without user" do
    log = HabitLog.new(habit: @habit, logged_on: Date.today)
    assert_not log.valid?
    assert_includes log.errors[:user], "must exist"
  end

  # [REQ-MDIA-003]
  test "invalid without habit" do
    log = HabitLog.new(user: @user, logged_on: Date.today)
    assert_not log.valid?
    assert_includes log.errors[:habit], "must exist"
  end

  # [REQ-MDIA-003]
  test "invalid without logged_on" do
    log = HabitLog.new(user: @user, habit: @habit)
    assert_not log.valid?
    assert_includes log.errors[:logged_on], "can't be blank"
  end

  # [REQ-MDIA-003]
  test "valid with all required attributes" do
    log = HabitLog.new(user: @user, habit: @habit, logged_on: Date.today)
    assert log.valid?
  end

  # [REQ-MDIA-003]
  test "cannot have duplicate log for same user, habit, and date" do
    HabitLog.create!(user: @user, habit: @habit, logged_on: Date.today)
    duplicate = HabitLog.new(user: @user, habit: @habit, logged_on: Date.today)
    assert_not duplicate.valid?
    assert_includes duplicate.errors[:habit_id], "has already been taken"
  end

  # [REQ-MDIA-003]
  test "cannot log a future date" do
    log = HabitLog.new(user: @user, habit: @habit, logged_on: Date.tomorrow)
    assert_not log.valid?
    assert_includes log.errors[:logged_on], "cannot be a future date"
  end

  # [REQ-MDIA-003]
  test "completed defaults to false" do
    log = HabitLog.create!(user: @user, habit: @habit, logged_on: Date.today)
    assert_equal false, log.completed
  end
end
