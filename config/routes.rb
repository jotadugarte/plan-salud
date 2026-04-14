Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]

  resources :workout_logs, only: [:index, :show]

  namespace :admin do
    resources :exercises, only: [:index]
  end

  get "dashboard", to: "dashboard#index"
  root "dashboard#index"
end
