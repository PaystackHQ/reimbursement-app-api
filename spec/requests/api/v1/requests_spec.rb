require 'rails_helper'

RSpec.describe 'Requests API', type: :request do
  # initialize test data
  let!(:requests) { create_list(:request, 10) }
  let(:request_id) { requests.first.id }

  describe 'GET /api/v1/requests' do
    before { get '/api/v1/requests' }

    it 'returns all requests' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET /api/v1/requests/:id' do
    before { get "/api/v1/requests/#{request_id}" }

    context 'when the record exists' do
      it 'returns the request' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(request_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:ok)
      end
    end

    context 'when the record does not exist' do
      let(:request_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(:not_found)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Request/)
      end
    end
  end

  describe 'POST /api/v1/requests' do
    params = { status: 'pending', description: 'Testing a new request', amount: 5000 }
    let(:valid_attributes) { params }

    context 'when the request is valid' do
      before { post '/api/v1/requests', params: valid_attributes }

      it 'creates a new request' do
        expect(json['status']).to eq('pending')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(:created)
      end
    end
  end

  describe 'PUT /api/v1/requests/:id' do
    let(:valid_attributes) { { description: 'test' } }

    context 'when the record exists' do
      before { put "/api/v1/requests/#{request_id}", params: valid_attributes }

      it 'updates the record' do
        expect(json['description']).to eq('test')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe 'DELETE /api/v1/requests/:id' do
    before { delete "/api/v1/requests/#{request_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(:no_content)
    end
  end

  describe 'POST /api/v1/requests/:id/approve' do
    before { post "/api/v1/requests/#{request_id}/approve" }

    it 'returns status code 200' do
      expect(response).to have_http_status(:ok)
    end

    it 'updates status correctly' do
      expect(json['status']).to eq('approved')
    end
  end

  describe 'POST /api/v1/requests/:id/reject' do
    before { post "/api/v1/requests/#{request_id}/reject" }

    it 'returns status code 200' do
      expect(response).to have_http_status(:ok)
    end

    it 'updates status correctly' do
      expect(json['status']).to eq('rejected')
    end
  end

  describe 'POST /api/v1/requests/:id/mark_as_paid' do
    before { post "/api/v1/requests/#{request_id}/mark_as_paid" }

    it 'returns status code 200' do
      expect(response).to have_http_status(:ok)
    end

    it 'updates status correctly' do
      expect(json['status']).to eq('paid')
    end
  end
end
