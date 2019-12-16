# # version 1
# puts "Which suburb do you live in? (a-z)"
# suburb = gets.chomp
#
# arr_of_suburbs = ['Bankstown', 'Bondi Beach', 'Central business district', 'Chatswood', 'Cronulla', 'Liverpool', 'Manly','Milsons Point', 'Narremburn']
#
# case
# when arr_of_suburbs[0..2].include?(suburb)
#   puts 'cool'
# when arr_of_suburbs[3...4].include?(suburb)
#   puts 'ok..'
# when arr_of_suburbs[4...6].include?(suburb)
#   puts 'hmm'
# when arr_of_suburbs[6..7].include?(suburb)
#   puts "I'm sorry :("
# when arr_of_suburbs[8].include?(suburb)
#   puts "Great :))"
# else
#   puts "Not a suburb of Sydney"
# end

loop do

  # version 2
  print "Which suburb do you live in? "
  suburb = gets.chomp.downcase

  answer = case suburb
  when "bondi"    then "Nice boat shoes!"
  when "newport"  then "Oh, so you're a white supremacist?"
  when "manly"    then "Surf's up bro! Watch out for tourists."
  when "newtown"  then "Cool tattoo. Smash the state."
  else "I'm sure it's very nice there."
  end

  # all after then will be stored in answer variable

  puts answer

end


# # version 3
# print "Which suburb do you live in? "
# suburb = gets.chomp.downcase
#
# if suburb == "bondi"
#   puts "Nice boat shoes!"
# elsif suburb == "newport"
#   puts "Oh, so you're a white supremacist?"
# elsif suburb == "manly"
#   puts "Surf's up bro! Watch out for tourists."
# elsif suburb == "newtown"
#   puts "Cool tattoo. Smash the state."
# else
#   puts "I'm sure it's very nice there."
# end
