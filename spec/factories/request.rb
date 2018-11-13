FactoryBot.define do
  factory :request do
    amount { Faker::Number.decimal(4, 2) }
    description { Faker::Lorem.sentence(10) }
    status { %w(pending approved rejected paid).sample }
  end
end
