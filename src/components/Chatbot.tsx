
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FAQ {
  question: string;
  answer: string;
  keywords: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqs: FAQ[] = [
    {
      question: "What types of devices do you repair?",
      answer: "We repair all major smartphone brands including iPhone, Samsung Galaxy, Google Pixel, OnePlus, and other Android devices. We also service tablets and provide software troubleshooting.",
      keywords: ["device", "phone", "repair", "iphone", "samsung", "android", "tablet"]
    },
    {
      question: "How long does a typical repair take?",
      answer: "Most repairs are completed within 30-60 minutes. Screen replacements typically take 30-45 minutes, battery replacements 20-30 minutes, and software issues 15-30 minutes. Water damage repairs may take 1-2 hours.",
      keywords: ["time", "long", "quick", "fast", "duration", "wait"]
    },
    {
      question: "Do you provide warranty on repairs?",
      answer: "Yes! All our repairs come with a comprehensive 90-day warranty. We stand behind our work and use only genuine or high-quality replacement parts.",
      keywords: ["warranty", "guarantee", "coverage", "protection"]
    },
    {
      question: "What are your repair prices?",
      answer: "Our prices vary by service: Screen repairs start at $99, battery replacements from $49, software troubleshooting from $39, and water damage repair from $89. Contact us for a specific quote for your device.",
      keywords: ["price", "cost", "expensive", "cheap", "money", "fee"]
    },
    {
      question: "Do you use genuine parts?",
      answer: "Yes, we use only genuine Apple parts for iPhone repairs and high-quality OEM or equivalent parts for Android devices. All parts come with warranty coverage.",
      keywords: ["genuine", "original", "parts", "quality", "oem"]
    },
    {
      question: "Can you fix water-damaged phones?",
      answer: "Yes, we specialize in water damage repair. We perform comprehensive assessment, component cleaning, and replacement of damaged parts. Success rates vary depending on the extent of damage and how quickly you bring it in.",
      keywords: ["water", "liquid", "wet", "damaged", "dropped"]
    },
    {
      question: "Do you offer mobile repair services?",
      answer: "Currently, we operate from our professional repair center to ensure the best quality service. However, we offer fast turnaround times with most repairs completed the same day.",
      keywords: ["mobile", "home", "visit", "location", "come"]
    },
    {
      question: "What accessories do you sell?",
      answer: "We offer a wide range of mobile accessories including cases, screen protectors, chargers, cables, wireless chargers, headphones, and more. All accessories are high-quality and compatible with major device brands.",
      keywords: ["accessories", "case", "charger", "cable", "headphones", "sell"]
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setMessages([{
        id: '1',
        text: "Hi! I'm here to help you with questions about our mobile repair services and accessories. How can I assist you today?",
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [isOpen]);

  const findBestMatch = (userInput: string): FAQ | null => {
    const input = userInput.toLowerCase();
    let bestMatch: FAQ | null = null;
    let highestScore = 0;

    faqs.forEach(faq => {
      let score = 0;
      faq.keywords.forEach(keyword => {
        if (input.includes(keyword.toLowerCase())) {
          score++;
        }
      });
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    });

    return highestScore > 0 ? bestMatch : null;
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const bestMatch = findBestMatch(inputValue);
      
      let botResponse = '';
      if (bestMatch) {
        botResponse = bestMatch.answer;
      } else {
        botResponse = "I'd be happy to help! For specific questions not covered in our FAQ, please contact us directly at our store or call us. Our technicians can provide detailed information about your specific repair needs.";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "How long does repair take?",
    "What's your warranty policy?",
    "Do you repair water damage?",
    "What are your prices?"
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-full shadow-lg hover:from-orange-600 hover:to-yellow-600 transition-all hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-xl shadow-2xl border border-orange-200 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <span className="font-semibold">Fixcell Pro Assistant</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}
          >
            <div className={`p-2 rounded-full ${message.isBot ? 'bg-orange-100' : 'bg-gray-100'}`}>
              {message.isBot ? (
                <Bot className="h-4 w-4 text-orange-600" />
              ) : (
                <User className="h-4 w-4 text-gray-600" />
              )}
            </div>
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start space-x-2">
            <div className="p-2 rounded-full bg-orange-100">
              <Bot className="h-4 w-4 text-orange-600" />
            </div>
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInputValue(question)}
                className="text-xs p-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors text-left"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-orange-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about our services..."
            className="flex-1 px-3 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
