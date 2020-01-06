require 'pry'

=begin
class Robot
  attr_reader :name

  def initialize
    @name = self.random_name
  end

  def random_name
    words = (0...2).map {('A'..'Z').to_a[rand(26)] }.join
    numbers = rand(100..999).to_s
    #numbers = rand(10).to_s + rand(10).to_s + rand(10).to_s
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
=end

class Robot

  def initialize
    @name = generate_name
    @instructions_counter = 0
    @create_at = Time.now.to_i
    @reset_at = Time.now.to_i
  end

  def generate_name
    letters = ("A".."Z").to_a.sample(2).join
    numbers = ("000".."999").to_a.sample
    letters + numbers
    #binding.pry
  end

  def name
    @instructions_counter += 1
    @name
  end

  def instructions_counter
    @instructions_counter += 1
  end

  def reset
    @instructions_counter += 1
    @name = generate_name
    @reset_at = Time.now.to_i
  end

  def timers
    @time_since_creation = Time.now.to_i - @create_at
    @time_since_last_robot = Time.now.to_i - @reset_at
    "#{@time_since_last_reboot} seconds since last boot,
    #{@time_since_creation} seconds since creation."
  end

end

p robot1 = Robot.new
p robot1.name
robot1.reset
p robot1.name
p robot1.instructions_counter

#binding.pry

p robot2 = Robot.new
p robot2.name
robot2.reset
p robot2.name
p robot2.instructions_counter
