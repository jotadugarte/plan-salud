class Exercise < ApplicationRecord
  validates :name, presence: true
  validates :default_series, presence: true, numericality: { greater_than: 0 }
  validates :default_reps, presence: true, numericality: { greater_than: 0 }
end
