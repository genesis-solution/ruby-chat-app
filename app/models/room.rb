class Room < ApplicationRecord
  has_many :messages, dependent: :destroy
end
