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
    results = []
    clients.each do |client|
      properties = []
      client.properties.each do |p|
        properties << {
          id: p.JobInfoID,
          address: p.address,
          valid: p.validuntil.nil?
        }  
      end
      results << { 
        :CFID => client.CFID,
        :name => client.full_name,
        :address => client.address,
        :phone => client.phone, # to do: first valid phone
        :valid => client.validuntil.nil?,
        :properties => properties 
      }
    end
    render :json => {
      :success => true,
      :clients => results 
    }
  end
end  