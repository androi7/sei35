print "Enter current temp: "
current_temp = gets.to_f

print "Is the AC working? (y/n): "
ac_working = gets.chomp.downcase

print "What is the desired temp? "
desired_temp = gets.to_f

if ac_working == "y"

  # working
  if current_temp > desired_temp
    puts "Turn on the A/C Please"
  end
else
  # not ac_working
  if current_temp > desired_temp
    puts "Fix the A/C now! It's hot!"
  else
    puts "Fix the A/C whenever you have the chance... It's cool..."
  end
end


# case
# when air_conditioner == 'true' && temp > wished_temp
#   puts "Turn on the A/C Please"
# when air_conditioner == 'false' && temp > wished_temp
#   puts "Fix the A/C now! It's hot!"
# when air_conditioner == 'false' && temp < wished_temp
#   puts "Fix the A/C whenever you have the chance... It's cool..."
# else
#   puts "The temperature is fine."
# end
