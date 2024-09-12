class Message < ApplicationRecord
  belongs_to :user
  belongs_to :room

  after_commit { broadcast_append_to "room_#{room.id}"}
end
