# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

requests = Request.create([
  { amount: 15000, description: 'Velit non enim consectetur Lorem nostrud adipisicing deserunt.', status: 'paid' }, 
  { amount: 20000, description: 'Nulla duis proident incididunt do fugiat commodo consequat Lorem.', status: 'paid' }, 
  { amount: 5000, description: 'Duis labore aliqua consectetur nisi fugiat aute excepteur voluptate.', status: 'approved' }, 
  { amount: 3000, description: 'Non nulla tempor proident velit aliquip est minim esse nulla labore laborum dolore.', status: 'rejected' }, 
  { amount: 1000, description: 'Mollit proident nulla laboris ut est cupidatat ullamco culpa.', status: 'paid' }, 
])