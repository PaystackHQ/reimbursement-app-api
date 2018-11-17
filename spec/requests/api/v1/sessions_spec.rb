# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Sessions API', type: :request do
  let(:user) { create(:user) }

  describe 'POST /api/v1/sign_in' do
    let(:url) { '/api/v1/sign_in' }

    context 'when login credentials are correct' do
      before { post url, params: { email: user.email, password: user.password } }
      it 'returns 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns a valid token' do
        expect(json['authentication_token']).to be_present
      end
    end

    context 'when login credentials are incorrect' do
      before { post url, params: { email: 'wrong@email.com', password: 'password' } }
      it 'returns 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns an error message' do
        expect(json['message']).to eq('Invalid email or password')
      end
    end
  end
end
