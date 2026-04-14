class Weight
  attr_reader :value, :unit

  def initialize(value, unit = :kg)
    raise ArgumentError, "Weight cannot be negative" if value.to_f < 0
    @value = value.to_f
    @unit = unit.to_sym
  end

  def to_f
    @value
  end

  def to_s
    "#{@value} #{@unit}"
  end

  def ==(other)
    return false unless other.is_a?(Weight)
    @value == other.value && @unit == other.unit
  end

  def self.valid?(value)
    value.to_f >= 0
  end
end
