Rails.application.routes.draw do
  # Session routes
  resource :session, only: [:new, :create, :destroy]

  # Dashboard/Root route needed to satisfy test redirect
  get "dashboard", to: "dashboard#index"
  root "dashboard#index"
end
