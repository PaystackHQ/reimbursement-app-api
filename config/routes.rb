Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :requests
      post '/requests/:id/approve', to: 'requests#approve'
      post '/requests/:id/reject', to: 'requests#reject'
      post '/requests/:id/mark_as_paid', to: 'requests#mark_as_paid'
    end
  end
end
