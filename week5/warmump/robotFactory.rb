class Robot
  attr_reader :name

  def initialize
    @name = self.random_name
  end

  def random_name
    words = (0...2).map {('A'..'Z').to_a[rand(26)] }.join
    numbers = rand(100..999).to_s
    new_name = words + numbers
  end

  def reset
    @name = self.random_name
  end
end


r1 = Robot.new
r2 = Robot.new
r3 = Robot.new
puts "r1: #{r1.name}"
puts "r1: #{r1.name}"
puts "r2: #{r2.name}"
puts "r3: #{r3.name}"

r1.reset
puts "r1 after reset: #{r1.name}"
