require "test_helper"

class ExerciseTest < ActiveSupport::TestCase
  # [REQ-COR-001]
  test "exercise requires necessary catalogue data" do
    exercise = Exercise.new
    assert_not exercise.valid?
    assert_includes exercise.errors[:name], "can't be blank"
    assert_includes exercise.errors[:default_series], "can't be blank"
    assert_includes exercise.errors[:default_reps], "can't be blank"
  end
end
