class Luhn

  def initialize num
    @num = num.to_s
  end

  def valid?
    num_arr = @num.split('')
    num_arr = num_arr.reverse.each_with_index.map do |x, i|
      x = x.to_i
      if i % 2 != 0
        x = x * 2 < 10 ? x * 2 : x * 2 - 9
      else
        x = x
      end
    end.reduce(0) { |a, b| a + b } % 10 == 0

  end

end





l = Luhn.new(3554)
p l.valid?


l = Luhn.new(8763)
p l.valid?
