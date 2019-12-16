# 1. Drinking age?
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.


print "How old are you?"
age = gets.chomp.to_i

# to_i would also get rid of everything that wouldn't be count as integer (string junk)

puts "You entered #{age}"

if age < 18
  puts "You are not old enough!"
elsif age >= 18
  puts "Drink!!"
elsif age > 40
  puts "Go to bed!"
end
