class Plant < ApplicationRecord
  belongs_to :user
  belongs_to :group
  has_many :sensors
end
