require "test_helper"

class SessionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    # Assuming the migration from the previous step is applied
    @user = User.create!(
      email: "test_session@example.com",
      password: "password123",
      timezone: "America/Bogota"
    )
  end

  test "should get new (login page)" do
    get new_session_url
    assert_response :success
  end

  test "should create session with valid credentials" do
    post session_url, params: { email: @user.email, password: "password123" }

    assert_redirected_to root_url
    assert_not_nil session[:user_id]
    assert_equal @user.id, session[:user_id]
  end

  test "should deny session with invalid password" do
    post session_url, params: { email: @user.email, password: "wrong" }

    assert_response :unprocessable_entity
    assert_nil session[:user_id]
  end

  test "should destroy session (logout)" do
    # login first
    post session_url, params: { email: @user.email, password: "password123" }

    # then logout
    delete session_url
    assert_redirected_to new_session_url
    assert_nil session[:user_id]
  end
end
