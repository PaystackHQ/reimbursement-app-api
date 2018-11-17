class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable
  validates :authentication_token, uniqueness: true

  before_create :generate_authentication_token!

  def generate_authentication_token!
    while self.class.exists?(authentication_token: authentication_token)
      self.authentication_token = Devise.friendly_token
    end
  end
end
