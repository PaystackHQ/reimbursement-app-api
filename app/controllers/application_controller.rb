class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound do |e|
    json_response({ message: e.message }, :not_found)
  end

  rescue_from ActiveRecord::RecordInvalid do |e|
    json_response({ message: e.message }, :unprocessable_entity)
  end

  def current_user
    @current_user ||= User.find_by(authentication_token: request.headers['Authorization'])
  end

  def authenticate_user_with_token!
    json_response({ message: 'Invalid token provided' }, :unauthorized) unless current_user.present?
  end

  private

  def json_response(object, status = :ok)
    render json: object, status: status
  end
end
