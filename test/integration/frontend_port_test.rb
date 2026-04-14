require "test_helper"

class FrontendPortTest < ActionDispatch::IntegrationTest
  # [REQ-INT-001]
  test "dashboard renders the full neumorphic frontend structure" do
    get root_url

    assert_response :success

    # Assert the core layout containers from the original index.html exist
    assert_select "div.header"
    assert_select "nav.main-nav"
    assert_select "div.content"

    # Ensure our neumorphic styled cards are at least referenced or achievable
    assert_select "div.card"
  end
end
