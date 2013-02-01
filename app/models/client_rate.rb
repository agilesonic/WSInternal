class ClientRate < ActiveRecord::Base
  set_table_name "clientrate"
  set_primary_key 'cfid'
  belongs_to :client, :foreign_key => "cfid"
end
