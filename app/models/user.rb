# [REQ-AUTH-001]
class User < ApplicationRecord
  has_secure_password validations: false

  has_many :workout_logs, dependent: :destroy

  validates :email, presence: true
  validates :password, presence: true, on: :create
  validates :timezone, presence: true
  validates :role, presence: true
  validate :timezone_must_be_valid
  validate :role_must_be_valid

  def timezone_object
    @timezone_object ||= Timezone.new(timezone) if timezone.present? && Timezone.valid?(timezone)
  end

  def role_object
    @role_object ||= Role.new(role) if role.present? && Role.valid?(role)
  end

  private

  def timezone_must_be_valid
    if timezone.present? && !Timezone.valid?(timezone)
      errors.add(:timezone, "is invalid")
    end
  end

  def role_must_be_valid
    if role.present? && !Role.valid?(role)
      errors.add(:role, "is invalid")
    end
  end
end
