Rails.application.routes.draw do
  get 'dashboard/app'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/dashboard' => 'dashboard#app'  # our main SPA interface

  # API endpoints: AJAX requests are made to these routes:
  get '/uptime' => 'dashboard#uptime'
  get '/dogs' => 'dashboard#dogs_index'
end
