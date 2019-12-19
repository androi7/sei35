require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

# Show the blank form
get '/' do
  erb :stock_form
end

# Form submits to here
get '/lookup' do

  @symbol = params[:stock_symbol]

  # Initialise the library with an API key
  StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

  stock = StockQuote::Stock.quote @symbol

  @price = stock.latest_price
  @company = stock.company_name

  erb :results

end
