require "test_helper"

class PhaseTest < ActiveSupport::TestCase
  # [REQ-COR-001]
  test "phase requires a name and duration" do
    phase = Phase.new
    assert_not phase.valid?
    assert_includes phase.errors[:name], "can't be blank"
    assert_includes phase.errors[:duration_days], "can't be blank"
  end

  # [REQ-COR-002]
  test "phase has many daily plans" do
    phase = Phase.new(name: "Hipertrofia", duration_days: 30)
    assert_respond_to phase, :daily_plans
  end
end
