require "test_helper"

class UserTest < ActiveSupport::TestCase
  # [REQ-AUTH-001]
  test "invalid without email, password, and timezone" do
    user = User.new
    assert_not user.valid?
    assert_includes user.errors[:email], "can't be blank"
    assert_includes user.errors[:password], "can't be blank"
    assert_includes user.errors[:timezone], "can't be blank"
  end

  # [REQ-AUTH-001]
  test "valid with required attributes" do
    user = User.new(email: "test@example.com", password: "password123", timezone: "America/Bogota")
    assert user.valid?
  end

  # [REQ-MDIA-001]
  test "plan_started_at is optional and accepts a date" do
    user = User.new(email: "test@example.com", password: "password123", timezone: "America/Bogota")
    assert_nil user.plan_started_at
    user.plan_started_at = Date.new(2026, 4, 14)
    assert_equal Date.new(2026, 4, 14), user.plan_started_at
    assert user.valid?
  end

  # [REQ-MDIA-001]
  test "plan_started_at returns today when nil" do
    user = User.new(email: "test@example.com", password: "password123", timezone: "America/Bogota")
    assert_nil user.plan_started_at
    assert_equal Date.today, user.effective_plan_start_date
  end

  # [REQ-MDIA-001]
  test "plan_started_at returns stored date when set" do
    user = User.new(email: "test@example.com", password: "password123", timezone: "America/Bogota")
    user.plan_started_at = Date.new(2026, 1, 1)
    assert_equal Date.new(2026, 1, 1), user.effective_plan_start_date
  end
end
