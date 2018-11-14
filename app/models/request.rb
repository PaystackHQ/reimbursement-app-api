class Request < ApplicationRecord
  validates_presence_of :description
  validates_presence_of :amount
  validates_presence_of :status
end
