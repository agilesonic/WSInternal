class ClientsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  
  def show
    c = Client.find(params[:id])
    render :json => {
      :success => true,
      :clients => [c] 
    }
  end
  
  def update
    c = Client.find(params[:id])
    c_in = params[:client]
    c.firstname = c_in[:firstname]
    c.lastname = c_in[:lastname]
    c.email = c_in[:email]
    c.save!    
    render :json => {
      :success => true,
      :client => c 
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