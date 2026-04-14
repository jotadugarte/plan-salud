class ApplicationController < ActionController::Base
  before_action :authenticate_request!

  private

  def authenticate_request!
    if session[:user_id]
      Current.user = User.find_by(id: session[:user_id])
    end

    redirect_to new_session_url unless Current.user
  end
  
  def require_admin!
    # Pre-condition: Strict scope boundary preventing admin data leak
    unless Current.user&.role_object&.admin?
      redirect_to root_url
    end
  end
end
