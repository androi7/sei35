Rails.application.routes.draw do

  root "pets#new"
  resources :pets

end
