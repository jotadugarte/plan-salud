# [REQ-AUTH-001]
class User < ApplicationRecord
  has_secure_password validations: false

  validates :email, presence: true
  validates :password, presence: true, on: :create
  validates :timezone, presence: true
  validate :timezone_must_be_valid

  def timezone_object
    @timezone_object ||= Timezone.new(timezone) if timezone.present? && Timezone.valid?(timezone)
  end

  private

  def timezone_must_be_valid
    if timezone.present? && !Timezone.valid?(timezone)
      errors.add(:timezone, "is invalid")
    end
  end
end
