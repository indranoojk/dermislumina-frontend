import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setinputValue] = useState('');
  const [isChatbotOpen, setisChatbotOpen] = useState(false);
  const messagesRef = useRef(null);

  const handleSendMessage = () => {
    const response = responses[inputValue.toLowerCase()] || 'Sorry, i didn\'t understand that. Can you please rephrase?';
    setMessages((prevMessages) => [...prevMessages, inputValue, response]);
    setinputValue('');
  };

  const handleToggleChatbot = () => {
    setisChatbotOpen(!isChatbotOpen);
  };


  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);



  const responses = {
    // Greetings
    "hello": "Hi there! i'm your skin care assistant. How can i help you today?",
    "hi": "Hey! i'm here to help with all your skin care questions. What's on your mind?",
    "hey": "Hi! i'm your go-to skin care expert. What do you need help with?",

    // Skin care questions
    "what is the best moisturizer for dry skin": "For dry skin, i recommend using a moisturizer that's rich in emollients and humectants. Some great options include Cetaphil Moisturizing Cream, Neutrogena Hydro Boost Water Gel, and CeraVe Moisturizing Cream.",
    "how to get rid of acne": "Acne can be frustrating! To help get rid of acne, try using a gentle cleanser containing salicylic acid or benzoyl peroxide. Also, make sure to exfoliate regularly and use a spot treatment containing tea tree oil or aloe vera.",
    "what is the best sunscreen for sensitive skin": "For sensitive skin, i recommend using a sunscreen that's fragrance-free and hypoallergenic. Some great options include EltaMD UV Clear Broad-Spectrum SPF 46, La Roche-Posay Anthelios Melt-in Sunscreen Milk, and CeraVe Sunscreen Lotion SPF 50.",
    "what is a good skincare routine for beginners?": "A good skincare routine includes cleansing, moisturizing, and sun protection. For beginners, start with a gentle cleanser, a lightweight moisturizer, and a broad-spectrum sunscreen with SPF 30 or higher.",
    "how often should i exfoliate my skin?": "it depends on your skin type. Oily or combination skin can exfoliate 2-3 times a week, while dry or sensitive skin should exfoliate once or twice a week.",
    "what is the difference between a toner and a serum?": "Toners help to balance the skin's pH and remove any remaining impurities, while serums are concentrated formulas that target specific skin concerns like wrinkles or hyperpigmentation.",
    "how can i reduce the appearance of dark circles?": "To reduce the appearance of dark circles, try using an eye cream with caffeine or retinol. Getting enough sleep, staying hydrated, and applying cold compresses can also help.",
    "how can i reduce the appearance of dark circles": "To reduce the appearance of dark circles, try using an eye cream with caffeine or retinol. Getting enough sleep, staying hydrated, and applying cold compresses can also help.",
    "dark circles": "To reduce the appearance of dark circles, try using an eye cream with caffeine or retinol. Getting enough sleep, staying hydrated, and applying cold compresses can also help.",
    "what causes enlarged pores?": "Enlarged pores can be caused by excess oil, dead skin cells, and sun damage. To minimize their appearance, use oil-free products, exfoliate regularly, and wear sunscreen.",
    "how can i prevent premature aging?": "To prevent premature aging, it's important to wear sunscreen daily, quit smoking, maintain a healthy diet, and get enough sleep. incorporating antioxidants like vitamin C and retinol into your skincare routine can also help.",
    "what is a good moisturizer for oily skin?": "Look for a moisturizer labeled as oil-free or gel-based. Products containing hyaluronic acid can help hydrate without clogging pores. Some good options include Neutrogena Hydro Boost Gel-Cream and Clinique Dramatically Different Moisturizing Gel.",
    "suggest a good moisturizer for oily skin?": "Look for a moisturizer labeled as oil-free or gel-based. Products containing hyaluronic acid can help hydrate without clogging pores. Some good options include Neutrogena Hydro Boost Gel-Cream and Clinique Dramatically Different Moisturizing Gel.",
    "good moisturizer for oily skin?": "Look for a moisturizer labeled as oil-free or gel-based. Products containing hyaluronic acid can help hydrate without clogging pores. Some good options include Neutrogena Hydro Boost Gel-Cream and Clinique Dramatically Different Moisturizing Gel.",
    "what can i use to treat hyperpigmentation?": "Products containing vitamin C, niacinamide, or hydroquinone can help fade hyperpigmentation. Over-the-counter options include SkinCeuticals C E Ferulic and The Ordinary Niacinamide 10% + Zinc 1%.",
    "is it safe to use retinol every night?": "Retinol can be irritating, especially for sensitive skin. Start by using it once or twice a week and gradually increase the frequency as your skin tolerates it. Always apply a moisturizer afterwards.",

    // Skin concern based
    "how can i prevent acne breakouts?": "To prevent acne, cleanse your face twice daily with a gentle cleanser, avoid touching your face, and use oil-free products. Consider using products with salicylic acid or benzoyl peroxide to help clear existing breakouts.",
    "acne": "To prevent acne, cleanse your face twice daily with a gentle cleanser, avoid touching your face, and use oil-free products. Consider using products with salicylic acid or benzoyl peroxide to help clear existing breakouts.",
    "what are the best home remedies for acne scars?": "While home remedies can help improve the appearance of acne scars, it's important to be patient. Aloe vera, honey, and vitamin E oil are often used, but results may vary. For more significant scars, consider consulting a dermatologist.",
    "what are the best home remedies for acne?": "While home remedies can help improve the appearance of acne scars, it's important to be patient. Aloe vera, honey, and vitamin E oil are often used, but results may vary. For more significant scars, consider consulting a dermatologist.",
    "what are the best home remedies for acne": "While home remedies can help improve the appearance of acne scars, it's important to be patient. Aloe vera, honey, and vitamin E oil are often used, but results may vary. For more significant scars, consider consulting a dermatologist.",
    "best home remedies for acne": "While home remedies can help improve the appearance of acne scars, it's important to be patient. Aloe vera, honey, and vitamin E oil are often used, but results may vary. For more significant scars, consider consulting a dermatologist.",
    "home remedies for acne": "While home remedies can help improve the appearance of acne scars, it's important to be patient. Aloe vera, honey, and vitamin E oil are often used, but results may vary. For more significant scars, consider consulting a dermatologist.",
    "remedies for acne": "While home remedies can help improve the appearance of acne scars, it's important to be patient. Aloe vera, honey, and vitamin E oil are often used, but results may vary. For more significant scars, consider consulting a dermatologist.",
    "what causes premature aging?": "Premature aging is primarily caused by sun exposure, smoking, and pollution. Other factors include genetics, dehydration, and poor diet.",
    "what causes premature aging": "Premature aging is primarily caused by sun exposure, smoking, and pollution. Other factors include genetics, dehydration, and poor diet.",
    "wrinkles": "Premature aging is primarily caused by sun exposure, smoking, and pollution. Other factors include genetics, dehydration, and poor diet.",
    "fine lines": "Premature aging is primarily caused by sun exposure, smoking, and pollution. Other factors include genetics, dehydration, and poor diet.",
    "can i prevent fine lines and wrinkles?": "While it's impossible to completely prevent aging, you can slow down the process by using sunscreen daily, quitting smoking, and maintaining a healthy lifestyle. incorporating retinol into your skincare routine can also help.",
    "how can i get rid of dark spots?": "To fade dark spots, use products containing ingredients like vitamin C, niacinamide, or hydroquinone. Exfoliation can also help. However, it's important to be patient as dark spots can take time to fade.",
    "how can i get rid of dark spots": "To fade dark spots, use products containing ingredients like vitamin C, niacinamide, or hydroquinone. Exfoliation can also help. However, it's important to be patient as dark spots can take time to fade.",
    "how to get rid of dark spots": "To fade dark spots, use products containing ingredients like vitamin C, niacinamide, or hydroquinone. Exfoliation can also help. However, it's important to be patient as dark spots can take time to fade.",
    "dark spots": "To fade dark spots, use products containing ingredients like vitamin C, niacinamide, or hydroquinone. Exfoliation can also help. However, it's important to be patient as dark spots can take time to fade.",
    "what causes dark spots?": "Dark spots, also known as hyperpigmentation, can be caused by sun damage, acne, injury, or hormonal changes.",
    "causes of dark spots?": "Dark spots, also known as hyperpigmentation, can be caused by sun damage, acne, injury, or hormonal changes.",
    "how can i hydrate my dry skin?": "To hydrate dry skin, use a gentle cleanser, avoid hot showers, and apply a thick moisturizer immediately after showering. Look for moisturizers containing hyaluronic acid and ceramides.",
    "what causes dry skin?": "Dry skin can be caused by several factors, including cold weather, low humidity, frequent bathing, and certain medications.",
    "what causes dry skin": "Dry skin can be caused by several factors, including cold weather, low humidity, frequent bathing, and certain medications.",
    "causes of dry skin": "Dry skin can be caused by several factors, including cold weather, low humidity, frequent bathing, and certain medications.",
    "dry skin": "Dry skin can be caused by several factors, including cold weather, low humidity, frequent bathing, and certain medications.",
    "what can i do to reduce skin redness?": "To reduce skin redness, use gentle, fragrance-free skincare products. Avoid harsh exfoliants and hot water. Products containing green tea or aloe vera can help soothe irritated skin.",
    "what causes skin redness?": "Skin redness can be caused by various factors, including sensitive skin, rosacea, allergies, and sun exposure.", 
    "causes of skin redness": "Skin redness can be caused by various factors, including sensitive skin, rosacea, allergies, and sun exposure.", 
    "skin redness": "Skin redness can be caused by various factors, including sensitive skin, rosacea, allergies, and sun exposure.", 



    // Product recommendations
    "what skin care products do you recommend": "i recommend using a gentle cleanser, a nourishing moisturizer, and a broad-spectrum sunscreen daily. Some great products include Cetaphil Gentle Skin Cleanser, Neutrogena Hydro Boost Water Gel, and EltaMD UV Clear Broad-Spectrum SPF 46.",
    "what is the best face mask for dry skin": "For dry skin, i recommend using a face mask that's hydrating and nourishing. Some great options include Laneige Water Bank Hydrating Mask, Dr. Jart+ Dermaclar Clearing Solution Mask, and Glamglow Thirstymud Hydrating Mask.",

    // General questions
    "what is your purpose": "i'm here to help you with all your skin care questions and concerns! Whether you're looking for product recommendations, skin care tips, or just need some advice, i'm here to assist you.",
    "how do you work": "i'm a chatbot powered by Ai, which means i can understand and respond to your questions and concerns in a conversational way. i've been trained on a vast amount of skin care knowledge, so you can trust my responses are accurate and helpful!",

    // Default response
    default: "Sorry, i didn't quite understand that. Could you please rephrase or ask a different question?",
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
                onChange={(e) => setinputValue(e.target.value)}
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