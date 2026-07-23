'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, Send, Sparkles, Volume2 } from 'lucide-react';

export default function VoiceAssistant({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Namaste! Main Humaixo AI hoon. Main aapki kaise madad kar sakta hoon?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // User message add karein
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Mock AI response (baad mein real AI se replace karenge)
    setTimeout(() => {
      const botResponses = [
        'Main aapki madad kar sakta hoon! Kya aap kisan hain, student, ya business owner?',
        'Humaixo mein aap fasal bech sakte hain, phone repair karwa sakte hain, ya documents store kar sakte hain.',
        'Kya aap marketplace dekhna chahenge?',
        'Main aapko fraud-proof transactions mein help kar sakta hoon!'
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Yahan baad mein real voice recognition add karenge
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputText('Kya aap mujhe bata sakte hain ki main aapki kaise madad kar sakta hoon?');
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="fixed bottom-24 right-8 w-96 h-[600px] glass rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden glow"
    >
      {/* Header */}
      <div className="gradient-bg p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Humaixo AI</h3>
            <p className="text-white/70 text-xs">Always here to help</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.type === 'user'
                  ? 'gradient-bg text-white rounded-br-sm'
                  : 'bg-white/10 text-gray-100 rounded-bl-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-60 mt-2">
                {message.timestamp.toLocaleTimeString('hi-IN', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white/10 p-4 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Voice Wave Animation (jab listening ho) */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 80, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-black/40 flex items-center justify-center gap-2 overflow-hidden"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [20, 60, 20],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                className="w-2 bg-emerald-400 rounded-full"
              />
            ))}
            <span className="text-white text-sm ml-2">Listening...</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Area */}
      <div className="p-4 glass border-t border-white/10">
        <div className="flex gap-2">
          <button
            onClick={handleVoiceToggle}
            className={`p-3 rounded-full transition ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Mic className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
          />
          
          <button
            onClick={handleSendMessage}
            className="p-3 gradient-bg rounded-full text-white hover:opacity-90 transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}