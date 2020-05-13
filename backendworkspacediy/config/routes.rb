Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :guides
  post '/login', to: 'log_in#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
