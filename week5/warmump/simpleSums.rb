=begin
def s1(i)
  if i%2 == 0
    -1
  else
    1
  end
end

def s2(i)
  (1..i).reduce(:+)
end
=end


class SimpleSums

  def initialize( number )
    @number = number
  end

  # attr_reader :number

  def number
    @number
  end

  def s1
    @number % 2
  end

  def s2
    # (1..@number).sum
    =begin
    sum_s2 = 0
    (1..@number).each do |num|
      sum_s2 += num
    end
    sum_s2
    =end
    sum_s2 = (@number * (@number + 1)) / 2
  end

end

sum = SimpleSums.new(4)

p sum.number
p sum.s1
p sum.s2
