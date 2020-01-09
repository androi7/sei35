require 'pry'

# class Cipher
#
#   CIPHER_TABLE = {
#     'A' => 'Z',
#     'B' => 'Y',
#     'C' => 'X',
#     'D' => 'W',
#     'E' => 'V',
#     'F' => 'U',
#     'G' => 'T',
#     'H' => 'S',
#     'I' => 'R',
#     'J' => 'Q',
#     'K' => 'P',
#     'L' => 'O',
#     'M' => 'N',
#     'N' => 'M',
#     'O' => 'L',
#     'P' => 'K',
#     'Q' => 'J',
#     'R' => 'I',
#     'S' => 'H',
#     'T' => 'G',
#     'U' => 'F',
#     'V' => 'E',
#     'W' => 'D',
#     'X' => 'C',
#     'Y' => 'B',
#     'Z' => 'A'
#   }
#
#   def initialize text
#     @text = text
#   end
#
#   def encrypt bool
#     table = bool ? CIPHER_TABLE : CIPHER_TABLE.invert
#     @text.upcase.split('').map do |letter|
#       letter = table[letter]
#     end.join('').downcase
#   end
#
# end
#
# a = Cipher.new 'test'
# decode = a.encrypt true
# puts decode
#
# b = Cipher.new 'gvhg'
# puts b.encrypt false


class Altbash

  def initialize input
    @word = input.downcase
    @abc = ('a'..'z').to_a
    @abc_reverse = @abc.reverse
  end

  # Option 1: looping with .each_char
  # def encode
  #
  #   message = ""
  #   @word.each_char do |letter|
  #     index = @abc.index(letter)
  #     cipher_character = @abc_reverse[index]
  #
  #     message << cipher_character
  #   end
  #
  #   message
  #
  # end

  # Option 2
  def encode
    @word.chars.map { |letter|
      index = @abc.index(letter)
      cipher_character = @abc_reverse[index]
    }.join
  end

end

puts "what's your secret message?"
word = gets.chomp
puts "=" * 20
cipher = Altbash.new word

puts cipher.encode
