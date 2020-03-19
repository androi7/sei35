# 1. task
a = ["Anil", "Erik", "Jonathan"]
name_erik = a[1]
a.push('Pete')


# 2. task
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
one = h[1]
two = h[:two]
two_2 = h['two']
h[3] = 'Three'
h[:four] = 4

puts "#{one} #{two} #{two_2} #{h[3]} #{h[:four]}"


# 3. task
is = {true => "It's true!", false => "It's false"}
puts is
puts "is[2 + 2 == 4] = #{is[2 + 2 == 4]}"
puts "is[\"Erik\" == \"Jonathan\"] = #{is["Erik" == "Jonathan"]}"
puts "is[9 > 10] = #{is[9 > 10]}"
puts "is[0] = #{is[0]}"  # key 0 doesn't exist
puts "is[\"Erik\"] = #{is["Erik"]}"  # key 'Erik' doesn't exist


# 4. task
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
puts users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users['Erik'][:favorite_numbers].push(7)

# How would you add yourself to the users hash?
users['Gabriel'] = {twitter: 'noneexistent', favorite_numbers: [7, 8, 12]}

# How would you return the array of Erik's favorite numbers?
print users['Erik'][:favorite_numbers]
puts ''

# How would you return the smallest of Erik's favorite numbers?
puts users['Erik'][:favorite_numbers].sort.first

# How would you return an array of Anil's favorite numbers that are also even?
print users['Anil'][:favorite_numbers].select { |elem| elem % 2 == 0 } # elem.even?
puts ''

# How would you return an array of the favorite numbers common to all users?
# require 'pry'; binding.pry
shared_nums =  users.values.first[:favorite_numbers] # first array must be added due to & symbol
users.values.each do |user|
  shared_nums = shared_nums & user[:favorite_numbers]
end
print shared_nums
puts ''

#How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
# favorite_nums = []
# users.values.each do |user|
#   favorite_nums = favorite_nums | user[:favorite_numbers]
# end
# 
# print favorite_nums.sort
# puts ''

all_fave_nums = users.values.map do |user|  # map can also be used to combine all values in an array
  user[:favorite_numbers]
end.flatten.sort.uniq  # after map it is a nested array and by flatten it's again an one layer array

print all_fave_nums
puts ''
