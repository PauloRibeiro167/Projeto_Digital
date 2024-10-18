Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :update, :destroy]
    end
  end

  resources :homes

  root to: 'home#index'

  get '*path', to: 'home#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end