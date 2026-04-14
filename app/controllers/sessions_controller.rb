# [REQ-AUTH-002]
class SessionsController < ApplicationController
  skip_before_action :authenticate_request!, only: [ :new, :create ]

  def new
  end

  def create
    # Pre-condition assertion (CbC)
    raise ArgumentError, "Missing credentials payload" if params[:email].nil? || params[:password].nil?

    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id

      # Post-condition assertion (CbC)
      raise StandardError, "Session ID failed to establish" unless session[:user_id] == user.id

      redirect_to root_url
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil

    # Post-condition assertion (CbC)
    raise StandardError, "Session ID failed to destroy" unless session[:user_id].nil?

    redirect_to new_session_url
  end
end
