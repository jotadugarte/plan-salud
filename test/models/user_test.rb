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
end
