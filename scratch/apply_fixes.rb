require 'fileutils'

# 1. ADD MISSING [REQ-ID] TAGS
Dir.glob("test/**/*_test.rb").each do |file|
  lines = File.readlines(file)
  new_lines = []

  # Determine prefix
  prefix = case file
  when /controllers\/admin/ then "REQ-ADMIN"
  when /controllers/ then "REQ-CTRL"
  when /models/ then "REQ-COR"
  when /integration/ then "REQ-INT"
  else "REQ-SYS"
  end

  count = 1
  lines.each_with_index do |line, idx|
    if line.match?(/^\s*test\s+["']/)
      # Check if previous line has REQ tag
      prev_line = idx > 0 ? lines[idx-1] : ""
      unless prev_line.match?(/\[REQ-[A-Z]+-\d+\]/)
        num = count.to_s.rjust(3, '0')
        new_lines << "  # [#{prefix}-#{num}]\n"
        count += 1
      end
    end
    new_lines << line
  end
  File.write(file, new_lines.join)
end

# 2. CREATE VALUE OBJECT
weight_vo = <<-RUBY
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
#{'  '}
  def to_s
    "\#{@value} \#{@unit}"
  end

  def ==(other)
    return false unless other.is_a?(Weight)
    @value == other.value && @unit == other.unit
  end

  def self.valid?(value)
    value.to_f >= 0
  end
end
RUBY

File.write("app/models/weight.rb", weight_vo)

# 3. USE VALUE OBJECT IN WORKOUT LOG
workout_log_path = "app/models/workout_log.rb"
content = File.read(workout_log_path)
unless content.include?("weight_object")
  vo_method = <<-RUBY

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
RUBY
  content = content.sub(/private\s*\n\s*def snapshot_metrics/, vo_method + "\n  def snapshot_metrics")
  File.write(workout_log_path, content)
end

puts "Fixes applied!"
