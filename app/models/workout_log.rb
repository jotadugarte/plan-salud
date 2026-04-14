# [REQ-COR-001]
class WorkoutLog < ApplicationRecord
  belongs_to :user
  belongs_to :exercise

  # CbC: Data Mutation Pre-condition Hook
  before_validation :snapshot_metrics_from_exercise, on: :create

  validates :completed_series, presence: true
  validates :completed_reps, presence: true
  validates :completed_weight, presence: true


  def weight_object
    @weight_object ||= Weight.new(completed_weight) if completed_weight.present? && Weight.valid?(completed_weight)
  end

  validate :weight_must_be_valid

  private

  def weight_must_be_valid
    if completed_weight.present? && !Weight.valid?(completed_weight)
      errors.add(:completed_weight, :invalid)
    end
  end

  def snapshot_metrics_from_exercise
    return unless exercise

    self.completed_series ||= exercise.default_series
    self.completed_reps   ||= exercise.default_reps
    self.completed_weight ||= exercise.default_weight

    # CbC: Post-condition (ensures metrics snapshot was successful)
    if completed_series.nil? || completed_reps.nil? || completed_weight.nil?
      raise StandardError, "Metrics snapshot failed: default values were missing from catalogue"
    end
  end
end
