class ClientsController < ApplicationController
  def show
    puts '***************************** Called'
     c = Client.find(params[:id])
     render :json => {
       :success => true,
       :clients => [c] 
     }
  end
end  