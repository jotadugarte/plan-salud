class Phase < ApplicationRecord
  has_many :daily_plans

  validates :name, presence: true
  validates :duration_days, presence: true, numericality: { greater_than: 0 }
end
