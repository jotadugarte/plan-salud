# [REQ-MDIA-002]
class Habit < ApplicationRecord
  CATEGORIES = %w[alimentacion salud_fisica emocional].freeze

  has_many :habit_logs, dependent: :destroy

  validates :key,      presence: true, uniqueness: true
  validates :name,     presence: true
  validates :category, presence: true, inclusion: { in: CATEGORIES }
  validates :position, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
