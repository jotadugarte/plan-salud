require "test_helper"

class HabitTest < ActiveSupport::TestCase
  # [REQ-MDIA-002]
  test "invalid without key" do
    habit = Habit.new(name: "Desayuno", category: "alimentacion", position: 1)
    assert_not habit.valid?
    assert_includes habit.errors[:key], "can't be blank"
  end

  # [REQ-MDIA-002]
  test "invalid without name" do
    habit = Habit.new(key: "desayuno", category: "alimentacion", position: 1)
    assert_not habit.valid?
    assert_includes habit.errors[:name], "can't be blank"
  end

  # [REQ-MDIA-002]
  test "invalid without category" do
    habit = Habit.new(key: "desayuno", name: "Desayuno", position: 1)
    assert_not habit.valid?
    assert_includes habit.errors[:category], "can't be blank"
  end

  # [REQ-MDIA-002]
  test "valid with all required attributes" do
    habit = Habit.new(key: "desayuno", name: "Desayuno", category: "alimentacion", position: 1)
    assert habit.valid?
  end

  # [REQ-MDIA-002]
  test "key must be unique" do
    Habit.create!(key: "desayuno", name: "Desayuno", category: "alimentacion", position: 1)
    duplicate = Habit.new(key: "desayuno", name: "Otro", category: "alimentacion", position: 2)
    assert_not duplicate.valid?
    assert_includes duplicate.errors[:key], "has already been taken"
  end

  # [REQ-MDIA-002]
  test "category must be one of the allowed values" do
    habit = Habit.new(key: "test", name: "Test", category: "invalid_category", position: 1)
    assert_not habit.valid?
    assert_includes habit.errors[:category], "is not included in the list"
  end
end
