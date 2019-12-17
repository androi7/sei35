require 'pry'
require 'colorize'

def letter_values word
  values = {
    1 => %w[A E I O U L N R S T],
    2 => %w[D G],
    3 => 'BCMP'.split(''),
    4 => %w[F H V W Y],
    5 => %w[K],
    8 => %w[J X],
    10 => %w[Q Z ]
  }
  word.upcase!
  score = 0

  word.each_char do |char|
    values.each do |key, value|
      score += key.to_i if value.include? char
    end
  end

  score
end

print "Type the word: "
input = gets.chomp

def scrabble(word)
  puts "The word #{word} scores #{letter_values word} points."
end

scrabble(input)
