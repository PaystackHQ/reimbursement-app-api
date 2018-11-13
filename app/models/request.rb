class Request < ApplicationRecord
  validates_presence_of :description
  validates_presence_of :amount
end
