require "test_helper"

class MiDiaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(email: "midia@test.com", password: "pwd", timezone: "America/Bogota")
  end

  # [REQ-MDIA-004]
  test "redirects to login when not authenticated" do
    get mi_dia_url
    assert_redirected_to new_session_url
  end

  # [REQ-MDIA-004]
  test "returns 200 for today (no date param)" do
    post session_url, params: { email: @user.email, password: "pwd" }
    get mi_dia_url
    assert_response :success
  end

  # [REQ-MDIA-004]
  test "returns 200 for a future date (read-only)" do
    post session_url, params: { email: @user.email, password: "pwd" }
    get mi_dia_url, params: { date: "2099-01-01" }
    assert_response :success
  end

  # [REQ-MDIA-004]
  test "returns 200 for a past date" do
    post session_url, params: { email: @user.email, password: "pwd" }
    get mi_dia_url, params: { date: "2026-01-01" }
    assert_response :success
  end
end
