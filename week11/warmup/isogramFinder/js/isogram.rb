def isogram word 
  puts word.downcase.split('').uniq.length
  word.length == word.downcase.split('').uniq.length
end