import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    const botMessages = [
        "Ask me anything! 👋",
        "Curious about my work? 🚀",
        "Chat with my AI! 🤖",
        "Let's talk tech! 💻"
    ];

    useEffect(() => {
        if (!isOpen) {
            const interval = setInterval(() => {
                setCurrentMessageIndex((prev) => (prev + 1) % botMessages.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isOpen, botMessages.length]);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hi there! I'm Aman's AI assistant. Ask me anything about his experience, skills, or projects!",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userText = inputValue.trim();
        setInputValue("");
        setIsLoading(true);

        // Add user message
        const newUserMsg: Message = {
            id: Date.now().toString(),
            text: userText,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMsg]);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: messages.concat(newUserMsg).map(m => ({
                        role: m.sender === 'user' ? 'user' : 'assistant',
                        content: m.text
                    }))
                }),
            });

            if (!response.ok) throw new Error('Failed to fetch response');

            const data = await response.json();

            const newBotMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: data.text,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, newBotMsg]);
        } catch (error) {
            console.error('Chat Error:', error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm sorry, I'm having trouble connecting right now. Please try again in a bit!",
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <div className="fixed bottom-6 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end md:items-center">
                        {/* Speech Bubble */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentMessageIndex}
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="relative mb-4 px-4 py-2 bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] text-sm font-bold text-black cursor-pointer text-center whitespace-nowrap"
                                onClick={() => setIsOpen(true)}
                            >
                                {botMessages[currentMessageIndex]}
                                {/* Little triangle pointing down */}
                                <div className="absolute -bottom-2 right-5 md:right-1/2 md:translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Static Robot Button */}
                        <motion.button
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(true)}
                            className="relative p-4 rounded-full bg-[#0a0b10] border border-cyan-500/50 text-cyan-500 shadow-[0_0_20px_rgba(0,242,255,0.5)] hover:shadow-[0_0_30px_rgba(0,242,255,0.8)] transition-all duration-300 group"
                            aria-label="Open Chat"
                        >
                            <Bot className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 drop-shadow-md transition-transform duration-300 relative z-10" />

                            {/* Online indicator dot */}
                            <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0a0b10] shadow-[0_0_8px_rgba(34,197,94,0.8)] z-20"></div>

                            {/* Glowing background behind button */}
                            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-lg opacity-50 animate-pulse z-0" />
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                        className="fixed bottom-6 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[550px] max-h-[70vh] flex flex-col rounded-2xl overflow-hidden bg-[#0a0b10]/80 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,242,255,0.15)]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-black/60 to-cyan-900/40 border-b border-cyan-500/30">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 relative border border-cyan-500/50 shadow-[0_0_10px_rgba(0,242,255,0.2)]">
                                    <Bot className="w-5 h-5" />
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0a0b10]"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white flex items-center gap-1.5 tracking-wide">
                                        AI Assistant <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                                    </h3>
                                    <p className="text-[10px] uppercase tracking-wider text-cyan-400/80 font-mono">Online System</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 text-cyan-500/70 hover:text-cyan-400 rounded-full hover:bg-cyan-500/20 transition-colors"
                                aria-label="Close Chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-5 pb-2 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                                >
                                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center mt-1 border ${msg.sender === 'user' ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300' : 'bg-black border-cyan-500/50 text-cyan-400 shadow-[0_0_10px_rgba(0,242,255,0.2)]'
                                        }`}>
                                        {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>

                                    <div className={`px-4 py-3 text-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-cyan-500 text-black font-medium rounded-2xl rounded-tr-none shadow-[0_0_15px_rgba(0,242,255,0.3)]'
                                        : 'bg-white/10 border border-white/10 text-white rounded-2xl rounded-tl-none backdrop-blur-md'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3 mr-auto"
                                >
                                    <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center mt-1 border bg-black border-cyan-500/50 text-cyan-400">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="px-4 py-3 flex gap-1 items-center bg-white/10 border border-white/10 rounded-2xl rounded-tl-none backdrop-blur-md">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-black/50 border-t border-cyan-500/30 mt-auto">
                            <form onSubmit={handleSendMessage} className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Initiate prompt..."
                                    className="w-full bg-white/5 border border-cyan-500/30 rounded-full py-3 pl-5 pr-12 text-sm text-white font-mono placeholder:text-cyan-500/50 focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/10 focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 w-9 h-9 flex items-center justify-center rounded-full bg-cyan-500 text-black disabled:opacity-50 disabled:bg-gray-800 disabled:text-gray-500 transition-all hover:bg-cyan-400 hover:shadow-[0_0_10px_rgba(0,242,255,0.6)]"
                                    aria-label="Send Message"
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </button>
                            </form>
                            <div className="text-center mt-3 flex justify-center items-center gap-1.5 opacity-60">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                                <span className="text-[9px] text-cyan-400 font-mono tracking-widest uppercase">Secured AI Channel</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
