require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }
  let(:existing_user) { create(:user, authentication_token: 'auniquetoken123') }

  it { should respond_to(:authentication_token) }
  it { should validate_uniqueness_of(:authentication_token) }

  describe '.generate_authentication_token!' do
    it 'generates a unique token' do
      allow(Devise).to receive(:friendly_token).and_return('auniquetoken123')
      user.generate_authentication_token!
      expect(user.authentication_token).to eql('auniquetoken123')
    end

    it 'generates another token when one already has been taken' do
      user.generate_authentication_token!
      expect(user.authentication_token).not_to eql existing_user.authentication_token
    end
  end
end
