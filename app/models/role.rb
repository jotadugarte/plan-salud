class Role
  VALID_ROLES = %w[admin user].freeze
  attr_reader :name

  def initialize(name)
    raise ArgumentError, "Invalid role name: #{name}" unless self.class.valid?(name)
    @name = name.to_s
  end

  def admin?
    @name == "admin"
  end

  def user?
    @name == "user"
  end

  def self.valid?(name)
    VALID_ROLES.include?(name.to_s)
  end

  def to_s
    @name
  end
end
