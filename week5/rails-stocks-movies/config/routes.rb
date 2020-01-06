Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # STOCKS
  # 1. Blank form
  get '/stocks' => 'stocks#form'

  # 2. Form submits here, does stock lookup, prints results
  get '/stocks/lookup' => 'stocks#do_lookup'


  # MOVIES
  # 1. Blank form
  get '/movies' => 'movies#form'

  # 2. Form submits here, do HTTParty API call, show reults
  get '/movies/titles' => 'movies#search'

  # 3. Details page (show page) for a single result
  get '/movies/results/:id' => 'movies#movie_info'

end
