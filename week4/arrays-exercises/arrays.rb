### 1. Create an array of the days of the week
days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday']
# days_of_the_week = %w{Monday Tuesday Wednesday Friday Saturday Sunday}


###2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.
days_of_the_week.unshift days_of_the_week.pop

#RTFM
# days_of_the_week.week.rotate! -1


### 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
week_array_copy = days_of_the_week
days_of_the_week = []
days_of_the_week[0] = week_array_copy[1..4]
days_of_the_week[1] = [week_array_copy.first] + [week_array_copy.last]


### 4. Remove either the weekdays or the weekends Your choice...
print "Remove weekdays (1) or weekends (2): "
input = gets.chomp

remaining = case input
when '1' then days_of_the_week.delete_at(0)
when '2' then days_of_the_week.delete_at(1)
end


### 5. Sort the remaining days alphabetically
print remaining.sort
