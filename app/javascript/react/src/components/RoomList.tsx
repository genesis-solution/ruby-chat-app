import React, { useEffect, useState } from "react";
import axios from "axios";

interface Room {
  id: number;
  name: string;
}

const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  console.log(rooms);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/rooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the rooms!", error);
      });
  }, []);

  return (
    <div className="flex flex-col overflow-y-auto border-r-2">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="flex flex-row items-center px-2 py-4 border-b-2"
        >
          <div className="w-1/4">
            <img
              src={`https://ui-avatars.com/api/?name=${room.name}`}
              className="object-cover w-12 h-12 rounded-full"
              alt={room.name}
            />
          </div>
          <div className="w-full">
            <a
              href={`/rooms/${room.id}`}
              className="text-lg font-semibold text-blue-500 underline"
            >
              {room.name}
            </a>
            <br />
            <span className="text-gray-500">This is description</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
