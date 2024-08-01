import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const messagesRef = useRef(null);

  const handleSendMessage = () => {
    const response = responses[inputValue.toLowerCase()] || 'Sorry, I didn\'t understand that. Can you please rephrase?';
    setMessages((prevMessages) => [...prevMessages, inputValue, response]);
    setInputValue('');
  };

  const handleToggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };


  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);



  const responses = {
    // Greetings
    "hello": "Hi there! I'm your skin care assistant. How can I help you today?",
    "hi": "Hey! I'm here to help with all your skin care questions. What's on your mind?",
    "hey": "Hi! I'm your go-to skin care expert. What do you need help with?",

    // Skin care questions
    "what is the best moisturizer for dry skin": "For dry skin, I recommend using a moisturizer that's rich in emollients and humectants. Some great options include Cetaphil Moisturizing Cream, Neutrogena Hydro Boost Water Gel, and CeraVe Moisturizing Cream.",
    "how to get rid of acne": "Acne can be frustrating! To help get rid of acne, try using a gentle cleanser containing salicylic acid or benzoyl peroxide. Also, make sure to exfoliate regularly and use a spot treatment containing tea tree oil or aloe vera.",
    "what is the best sunscreen for sensitive skin": "For sensitive skin, I recommend using a sunscreen that's fragrance-free and hypoallergenic. Some great options include EltaMD UV Clear Broad-Spectrum SPF 46, La Roche-Posay Anthelios Melt-In Sunscreen Milk, and CeraVe Sunscreen Lotion SPF 50.",

    // Product recommendations
    "what skin care products do you recommend": "I recommend using a gentle cleanser, a nourishing moisturizer, and a broad-spectrum sunscreen daily. Some great products include Cetaphil Gentle Skin Cleanser, Neutrogena Hydro Boost Water Gel, and EltaMD UV Clear Broad-Spectrum SPF 46.",
    "what is the best face mask for dry skin": "For dry skin, I recommend using a face mask that's hydrating and nourishing. Some great options include Laneige Water Bank Hydrating Mask, Dr. Jart+ Dermaclar Clearing Solution Mask, and Glamglow Thirstymud Hydrating Mask.",

    // General questions
    "what is your purpose": "I'm here to help you with all your skin care questions and concerns! Whether you're looking for product recommendations, skin care tips, or just need some advice, I'm here to assist you.",
    "how do you work": "I'm a chatbot powered by AI, which means I can understand and respond to your questions and concerns in a conversational way. I've been trained on a vast amount of skin care knowledge, so you can trust my responses are accurate and helpful!",

    // Default response
    default: "Sorry, I didn't quite understand that. Could you please rephrase or ask a different question?",
  };

  return (
    <div className="relative">
      {/* Round button to toggle chatbot */}
      <button
        className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full fixed bottom-0 right-0 mb-4 mr-4"
        onClick={handleToggleChatbot}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2m0-4h2a2 2 0 012 2v4m6 3v3h2a2 2 0 012 2v3m0-10h2a2 2 0 012 2v3m-3 3h6"
          />
        </svg>
      </button>

      {/* Chatbot container */}
      {isChatbotOpen && (
        <div
          className="fixed bg-gray-200 bg-opacity-50 transition-opacity duration-300 z-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleToggleChatbot();
            }
          }}
        >

          <div
            className="container mx-auto p-4 max-h-fit bg-black rounded shadow-md"
            style={{
              position: 'fixed',
              bottom: '0',
              right: '0',
              maxWidth: '400px',
              overflowY: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                className="bg-red-500 mr-4 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                onClick={handleToggleChatbot}
              >
                Close
              </button>
              <h1 className="text-3xl font-bold text-white">Skin Care Chatbot</h1>
            </div>
            <div
              className="flex flex-col overflow-y-scroll pr-4"
              style={{ maxHeight: 'calc(100vh - 250px)' }}
              ref={messagesRef}
            >
              {messages.map((message, index) => (
                <div key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"} ${index % 2 === 0 ? "ml-20" : "mr-20"} p-4 rounded mb-4`}>
                  <p className="text-gray-600">{message}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Type a message..."
              />
              <button
                className="bg-green-600 hover:bg-green-500 text-white font-bold ml-4 py-2 px-4 rounded"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;