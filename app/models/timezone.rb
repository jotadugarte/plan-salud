# Value Object to encapsulate valid timezone logic
class Timezone
  attr_reader :name

  def initialize(name)
    raise ArgumentError, "Invalid timezone" unless self.class.valid?(name)
    @name = name
  end

  def self.valid?(name)
    return false unless name.is_a?(String)
    
    !!ActiveSupport::TimeZone[name]
  end

  def to_s
    name
  end
end
