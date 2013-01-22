class Client < ActiveRecord::Base
  STATUS_NORMAL = 'Normal'
  STATUS_MOVED = 'MOVED'
  
  set_table_name "cfinfo"
  has_many :properties, :foreign_key => "cfid", :inverse_of => :client
  has_many :valid_properties, :class_name => "Property", :foreign_key => "cfid", :conditions => "validuntil is null or validuntil = \'\'"
  has_many :jobs, :through => :properties
  has_many :done_jobs, :class_name => "Job", :through => :properties, :conditions => "datebi is not null", :source => :jobs
  
  def self.search(key)
    if key.size <= 10 
      if key.start_with? "CF"
        key = Utils.full_id(key)
        return find(key)
      elsif key.start_with? "JB"
        key = Utils.full_id(key)
        return Client.joins(:jobs).where(:jobs => {:JobID => key})
      end
    end
    where("lastname like ? or firstname like ? or address like ? or phone like ?", "%#{key}%", "%#{key}%", "%#{key}%", "%#{key}%").order("lastname, firstname").limit(100)
  end

  def full_name
    s = ''
    s << honorific + ' ' unless honorific.nil?
    s << firstname + ' ' unless firstname.nil?
    s << lastname unless lastname.nil?
    s.strip
  end
  
  def status
    if validuntil.nil?
      return STATUS_NORMAL
    else
      return STATUS_MOVED
    end
  end
  
  def rate
    return 4.0    
  end
  
  def as_json(options={})
    super(:methods => [:full_name, :status, :rate])
  end
end
