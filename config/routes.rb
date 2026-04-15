Rails.application.routes.draw do
  resource :session, only: [ :new, :create, :destroy ]

  resources :workout_logs, only: [ :index, :show, :create ]

  namespace :admin do
    resources :exercises, only: [ :index ]
  end

  get "dashboard", to: "dashboard#index"
  get "mi_dia",    to: "mi_dia#index"
  resources :habit_logs, only: [ :create, :destroy ]
  root "dashboard#index"

end
