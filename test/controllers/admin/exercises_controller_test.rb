require "test_helper"

class Admin::ExercisesControllerTest < ActionDispatch::IntegrationTest
  setup do
    # Note: `role` is required by the Domain Model but missing in our DB, 
    # so this will conveniently fail as part of our TDD workflow!
    @admin = User.create!(email: "admin@test.com", password: "pwd", timezone: "UTC", role: "admin")
    @user = User.create!(email: "user@test.com", password: "pwd", timezone: "UTC", role: "user")
  end

  test "admin can access the catalog index" do
    post session_url, params: { email: @admin.email, password: "pwd" }
    
    get admin_exercises_url
    assert_response :success
  end

  test "regular user cannot access the catalog index" do
    post session_url, params: { email: @user.email, password: "pwd" }
    
    get admin_exercises_url
    assert_redirected_to root_url
  end
end
