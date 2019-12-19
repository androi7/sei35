# nucleotides = ['A', 'C', 'G', 'T']
#
# def count_nucleotides string, wordslist
#   counters = Array.new(wordslist.length, 0)
#   wordslist.sort!
#   string = string.split('').sort.join('')
#   puts string
#
#   counters_index = 0
#   string.each_char do |char|
#     if char == wordslist[counters_index]
#       counters[counters_index] += 1
#     elsif char == wordslist[counters_index+1]
#       counters[counters_index+1] += 1
#       counters_index += 1
#     end
#   end
#
#   for i in 0...wordslist.length
#     puts "#{wordslist[i]}: #{counters[i]}"
#   end
#
#
# end
#
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC", nucleotides



def count_nucleotides dna
  bases_count = {
    'A' => 0,
    'C' => 0,
    'T' => 0,
    'G' => 0
  }

  dna.each_char do |base|
    if bases_count.key? base
      bases_count[base] += 1
    else
      puts " #{base} is not a valid nucleotide "
    end
  end

  bases_count.each do |key, val|
    puts "#{key}: #{val}"
  end
end


count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"

puts "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC".count('C')
