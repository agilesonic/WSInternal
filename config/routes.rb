WSInternal::Application.routes.draw do
  get 'wsis/index' 
  resources :clients, :only => ['show', 'update'] do
    collection do
      get 'search'
    end
  end
end
