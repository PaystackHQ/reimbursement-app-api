require 'rails_helper'

RSpec.describe Request, type: :model do
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:amount) }
  it { should validate_presence_of(:status) }
end
