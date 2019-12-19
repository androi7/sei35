require 'sinatra'
require 'sinatra/reloader'

get "/" do
  erb :intro
end


# get "/calc/:number1/:operator/:number2" do
#
#   operator = case params[:operator]
#   when 'divide' then '/'
#   when 'modulo' then '%'
#   else
#     params[:operator]
#   end
#
#   # never use eval()!!!
#   @result = eval("#{params[:number1].to_f}#{operator}#{params[:number2].to_f}")
#   erb :result
#
# end

# /calc/123/+/456
get "/calc/:first/:op/:second" do

  @first = params[:first].to_f
  @second = params[:second].to_f
  @op = params[:op]

  # if @op == '+'
  #   @result = @first + @second
  # elsif @op == '-'
  #   @result = @first - @second
  # elsif @op == '*'
  #   @result = @first * @second
  # elsif @op == 'div'
  #   @result = @first / @second
  # else
  #   @result = 'invalid calculation'
  # end


  # @result = case @op
  # when '+' then @first + @second
  # when '-' then @first - @second
  # when '*' then @first * @second
  # when 'div' then @first / @second
  # else
  #   'invalid calculation'
  # end

  @result = @first.send(@op, @second)

  # "First: #{ params[:first] }<br>,
  #  second: #{ params[:second] }<br>,
  #  op: #{ params[:op] }"
  # params.inspect  # debugging

  erb :calc
end


# Form-based calculator
#Show blank form
get "/calc" do
  erb :form
end

get "/calc/result" do
  @first = params[:firstnum].to_f  #firstnum from form input name
  @second = params[:secondnum].to_f
  @op = params[:operator]

  @result = @first.send @op, @second

  # Turn params hash into string
  # and send it to the browser
  # (debugging only!)
  # params.inspect

  # Reuse our previous template
  erb :calc
end
