WSInternal::Application.routes.draw do
  get 'wsis/index' 
  resources :clients, :only => ['show']
end
