# require 'pry'
#
# class Roman
#   ROMAN_NUMBERS = {
#     1000 => "M",
#      900 => "CM",
#      500 => "D",
#      400 => "CD",
#      100 => "C",
#       90 => "XC",
#       50 => "L",
#       40 => "XL",
#       10 => "X",
#         9 => "IX",
#         5 => "V",
#         4 => "IV",
#         1 => "I",
#   }
#
#   def romanize(num)
#     ROMAN_NUMBERS.map do |val, ltr|
#       amount, num = num.divmod(val)
#       ltr * amount
#       # binding.pry
#     end.join
#
#   end
# end
#
# test = Roman.new
# puts "1990 in roman letters: #{test.romanize 1990}"



class Roman

  def initialize
    @roman_numerals = {
      3000 => "MMM",
      2000 => "MM",
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
       90 => "XC",
       50 => "L",
       40 => "XL",
       10 => "X",
         9 => "IX",
         5 => "V",
         4 => "IV",
         1 => "I"
    }
  end

  def calculate number
    result = ''

    @roman_numerals.each do |key, value|
      while number >= key
        result += value
        p "The result is: #{result}"
        number -= key
        p "The number is: #{number}"
      end
    end
    result
  end

end


t = Roman.new
puts t.calculate 1990
