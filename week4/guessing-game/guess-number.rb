# print "Set the maximum number: "
# maximum_num = gets.to_i
#
# pc_chooses_number = Random.rand(0..maximum_num)


## version 1
# loop do
#   print "Guess the number: "
#   num = gets.to_i
#
#   if num == pc_chooses_number
#     puts "Yeah, correct number"
#     break
#   elsif num > pc_chooses_number
#     puts "Wrong, guess lower!"
#   elsif num < pc_chooses_number
#     puts "Wrong, guess higher!"
#   end
# end


# # version 2
# loop do
#   print "Guess the number: "
#   num = gets.to_i
#
#   output = case
#   when num == pc_chooses_number then "Correct guess!"
#   when num < pc_chooses_number then "Wrong, guess higher!"
#   when num > pc_chooses_number then "Wrong, guess lower!"
#   else
#     "Type in a number"
#   end
#
#   puts output
# end

#version 3

require 'colorize'  # load the colorize library
require 'pry'

print 'Enter maximum value: '
max_value = gets.to_i

secret_number = rand(0..max_value) # includes max

guess = -1 # initialise with a number that cannot be correct
# to guarantee we will get into the loop at least once

#while guess != secret_number
until guess == secret_number

  print 'Enter your guess: '
  guess = gets.to_i

  # if guess != secret_number
  #   puts "Wrong! Guess again..."
  # end

  binding.pry  # pause the code here and open pry
  # ls -l: shows all variables
  # next: goes to next code line
  # continue: continue the program

  # require 'pry'; binding.pry

  if guess > secret_number
    puts "Guess lower!".red
  elsif guess < secret_number
    puts "Guess higher!".yellow
  end

end  # until

puts "Correct!".green
