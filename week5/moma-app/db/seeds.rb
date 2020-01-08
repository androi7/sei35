Artist.destroy_all

puts "Creating artists..."

a1 = Artist.create! name: 'Lee Krasner', nationality: 'USA', dob: '1908/10/27', period: '20th Century', image: 'https://i.pinimg.com/736x/05/62/14/0562148ce05f206e7ad773dc65d565bc--lee-krasner-abstract-expressionism.jpg', roundness: 5, bio: 'Abstract Expressionist'

a2 = Artist.create! name: 'Frantisek Kupka', nationality: 'Czech', dob: '1871/08/24', period: '19th Century', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Frantisek_Kupka_1928.jpg', roundness: 6, bio: 'Vorticist/Abstract'

a3 = Artist.create! name: 'Max Ernst', nationality: 'German', dob: '1893/04/03', period: '19th Century', image: 'https://www.max-ernst.com/images/max-ernst-photo.jpg', roundness: 7, bio: 'Surrealist'

puts "Created #{ Artist.all.length } artists:"
puts Artist.pluck(:name).join(', ')


Work.destroy_all
puts "Creating works..."

# Krasner
Work.create! title: 'Gothic Landscape', year: '1961/01/01', medium: 'oil on canvas', style: 'abstract expressionism', image: 'https://www.tate.org.uk/art/images/work/T/T03/T03291_9.jpg', artist: a1

Work.create! title: 'Working Model', year: '1951/05/11', medium: 'bronze sculpture', style: 'mordernism', image: 'https://i.guim.co.uk/img/media/abdf408d9f9a2768cdb1bcefa46efabe6e6510db/223_188_7348_4409/master/7348.jpg?width=300&quality=85&auto=format&fit=max&s=3ebcdddba4addfd7d256ac68f3ec5336', artist: a1

# Kupka
Work.create! title: 'Movement', year: '1946/01/01', medium: 'oil on canvas', style: 'abstract expressionism', image: 'https://i.ebayimg.com/images/g/YL4AAOSwfLpbjW5o/s-l300.jpg', artist: a2


#Ernst
Work.create! title: 'City with Animals', year: '1930/01/05', medium: 'oil on wood', style: 'surrealism/cubism', image: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1914/01/48.1172.280_web-1.jpg?w=870&zoom=2', artist: a3
Work.create! title: 'Die Versuchung des heiligen Antonius', year: '1964/01/01', medium: 'oil on canvas', style: 'surrealism', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/David_Teniers_der_Juengere_-_Die_Versuchung_des_Heiligen_Antonius_in_der_Felsengrotte_-_SKD.jpg', artist: a3
