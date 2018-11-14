class Api::V1::RequestsController < ApplicationController
  before_action :set_request, except: [:index, :create]

  def index
    @requests = Request.all
    render json: @requests
  end

  def show
    render json: @request
  end

  def create
    @request = Request.new(request_params)
    if @request.save
      render json: @request, status: :created
    else
      render json: @request.errors, status: :unprocessable_entity
    end
  end

  def update
    update_request(request_params)
  end

  def approve
    update_request(status: 'approved')
  end

  def reject
    update_request(status: 'rejected')
  end

  def mark_as_paid
    update_request(status: 'paid')
  end

  def destroy
    @request.destroy
    head :no_content
  end

  private

  def set_request
    @request = Request.find(params[:id])
  end

  def update_request(params)
    if @request.update(params)
      render json: @request
    else
      render json: @request.errors, status: :unprocessable_entity
    end
  end

  def request_params
    params.permit(:description, :amount)
  end
end
