class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private

  def record_not_found
    render json: { status: 404, message: 'Record not found' }, status: :not_found
  end
end
