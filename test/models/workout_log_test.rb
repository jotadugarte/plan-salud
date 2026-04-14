require "test_helper"

class WorkoutLogTest < ActiveSupport::TestCase
  setup do
    @user = User.create!(email: "workoutst@test.com", password: "pwd", timezone: "America/Bogota")
    @exercise = Exercise.create!(
      name: "Bench Press", 
      default_series: 4, 
      default_reps: 10, 
      default_weight: 135
    )
  end

  test "snapshots exercise metrics natively upon creation" do
    # Creating a log with no override should pull data from the Master Exercise
    log = WorkoutLog.create!(
      user: @user,
      exercise: @exercise
    )
    
    assert_equal 4, log.completed_series
    assert_equal 10, log.completed_reps
    assert_equal 135.0, log.completed_weight
  end
  
  test "allows overriding the snapshot metrics without affecting catalogue" do
    log = WorkoutLog.create!(
      user: @user,
      exercise: @exercise,
      completed_series: 3, 
      completed_reps: 8,
      completed_weight: 145.5
    )
    
    assert_equal 3, log.completed_series
    assert_equal 8, log.completed_reps
    assert_equal 145.5, log.completed_weight
    
    # Master exercise remains untouched
    assert_equal 10, @exercise.reload.default_reps
  end
end
