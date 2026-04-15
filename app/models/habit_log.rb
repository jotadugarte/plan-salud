# [REQ-MDIA-003]
class HabitLog < ApplicationRecord
  belongs_to :user
  belongs_to :habit

  validates :logged_on, presence: true
  validates :habit_id,  uniqueness: { scope: [ :user_id, :logged_on ] }
  validate  :logged_on_cannot_be_future

  private

  # [REQ-MDIA-003] Enforce invariant: no future logs allowed.
  def logged_on_cannot_be_future
    return unless logged_on.present?

    if logged_on > Date.today
      errors.add(:logged_on, "cannot be a future date")
    end
  end
end
