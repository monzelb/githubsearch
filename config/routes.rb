Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    resources :users

  root to: 'users#search'
  get '/search', to: 'users#search'
end
