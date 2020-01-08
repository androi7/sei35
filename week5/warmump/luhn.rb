# class Luhn
#
#   def initialize num
#     @num = num.to_s
#   end
#
#   def valid?
#     num_arr = @num.split('')
#     num_arr = num_arr.reverse.each_with_index.map do |x, i|
#       x = x.to_i
#       if i % 2 != 0
#         x = x * 2 < 10 ? x * 2 : x * 2 - 9
#       else
#         x = x
#       end
#     end.reduce(0) { |a, b| a + b } % 10 == 0
#
#   end
#
# end


class Luhn

  def initialize number
    @number = number
  end

  def prepare_digits
    # initialize array
    all_digits = []


    # e.g. 1234.digits => [4, 3, 2, 1]
    @number.digits.each_with_index do |digit, index|
      # check every 2nd digit
      # multiply by 2

      # if index % 2 != 0
      #   digit *= 2  # multiply by 2
      # end

      digit *= 2 if index % 2 != 0

      # if >= 10, do -9
      digit -= 9 if digit >= 10

      # save digit to array
      all_digits << digit
    end
    # return array
    all_digits
  end

  def valid?
    numbers = prepare_digits
    # inject method:
    # [1,2,3].inject(0, :+) => 6
    # [1,2,3].inject(10, :+) => 16
    # [1,2,3].inject(:*) => 6

    total = numbers.inject(0, :+)

    if total % 10 == 0
      puts "#{@number} is a valid Luhn number."
    else
      puts "#{@number} is NOT a valid Luhn number."
      # @number = @number + ( 10 - total % 10)
      # puts "#{@number} would be a valid Luhn number."
    end
  end

end


l = Luhn.new(3554)
p l.valid?


l = Luhn.new(8763)
p l.valid?
