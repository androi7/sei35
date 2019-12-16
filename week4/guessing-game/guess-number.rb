print "Set the maximum number: "
maximum_num = gets.to_i

pc_chooses_number = Random.rand(0..maximum_num)


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

loop do
  print "Guess the number: "
  num = gets.to_i
  
  output = case
  when num == pc_chooses_number then "Correct guess!"
  when num < pc_chooses_number then "Wrong, guess higher!"
  when num > pc_chooses_number then "Wrong, guess lower!"
  else
    "Type in a number"
  end

  puts output
end
