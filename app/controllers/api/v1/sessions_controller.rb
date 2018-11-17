class Api::V1::SessionsController < ApplicationController
  def create
    email = params[:email]
    password = params[:password]

    @user = email.present? && User.find_by(email: email)

    if @user&.valid_password? password
      sign_in @user, store: false
      @user.generate_authentication_token!
      @user.save
      render json: @user, status: :ok
    else
      render json: { message: 'Invalid email or password' }, status: :unprocessable_entity
    end
  end
end
