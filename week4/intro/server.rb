require 'sinatra'  # similar to a <script> tag to load JS from an HTML file
require 'sinatra/reloader'  # reload the server automatically on changes

# Define some routes that this webserver will respond to
# i.e. when you see a certain path request, run a block of code
# and send back a response string to the browser


# Respond to requests to the site root, aka '/', the default page route page
get "/" do

  # Whatever the last line of the block evaluates to, that is what
  # the browser will see, i.e. it is the server's response
  # "<html> <head></head> <body><h1>Hello World from this fantastic site!</h1></body> </html>"

  # Look into the views/ folder (internal settings) for a file
  # that starts with 'welcome'
  # (the .erb extension is assumed)

  # This still has to be the last line
  # in the block
  erb :welcome

end


# When the browser asks for the path '/luckynumber' , run this block
get "/luckynumber" do
  @number = rand 100
  # This is the last line of the block, so this is what the browser gets
  # "Your lucky number is: #{ number }"

  erb :lucky

end

 # with backticks you can run 'cmd commands' in ruby
get "/uptime" do
  "System uptime: #{ `uptime` }"
end


# get "/hello/josh" do
#   "Hello Josh"
# end
#
#
# get "/hello/amanda" do
#   "Hello Amanda"
# end


# Match ANY path that starts with '/hello/' followed by any string
# Save that string into the params hash
# The key to give us the actual string that was used in the path,
# will be the symbol we used in the get string, i.e. :student in this example
#
# For example, if the path is 'localhost:4567/hello/amanda' ...
# ...Sinatra does this: params[:student] = 'amanda'
# so if we ask for params[:student], the value is 'amanda'
get "/hello/:student" do
  hello_recipient = params[:student]
  "Hello there, #{hello_recipient.capitalize}"
end


get "/hello/:name/:mood" do

  "Hello #{params[:name].capitalize}, I hope you are #{params[:mood]}"
end
