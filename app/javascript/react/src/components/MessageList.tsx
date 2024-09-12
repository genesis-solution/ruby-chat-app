import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Message {
  id: number;
  body: string;
}

interface MessageListProps {
  roomId: string;
}

const MessageList: React.FC<MessageListProps> = ({ roomId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, [roomId]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/rooms/${roomId}/messages`,
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/rooms/${roomId}/messages`,
        {
          message: { body: newMessage },
        },
      );
      setMessages([...messages, response.data]); // Menambah pesan baru ke daftar pesan
      setNewMessage(""); // Mengosongkan input pesan baru
    } catch (error) {
      console.error("Error creating message", error);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full px-5">
      <div className="flex flex-col mt-5">
        {messages.map((message) => (
          <div key={message.id} className="flex justify-start mb-4">
            <img
              src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.webp"
              className="object-cover w-8 h-8 rounded-full"
              alt=""
            />
            <div className="px-4 py-3 ml-2 text-white bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl">
              {message.body}
            </div>
          </div>
        ))}
      </div>
      <div className="py-5">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full px-3 py-5 bg-gray-300 rounded-xl"
            type="text"
            placeholder="Type your message here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default MessageList;
