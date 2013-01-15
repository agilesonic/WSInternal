class ClientsController < ApplicationController
  def show
     c = Client.find(params[:id])
     render :json => {
       :success => true,
       :clients => [c] 
     }
  end
  
  def search
    clients = Client.search(params[:keyword])
     render :json => {
       :success => true,
       :clients => clients 
     }
  end
end  