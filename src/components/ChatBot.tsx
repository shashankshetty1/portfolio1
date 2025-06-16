// AI Robot Chatbot Component
// Interactive robot chatbot to answer questions about Shashank Shetty

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  X,
  Send,
  User,
  Minimize2,
  RotateCcw,
  Zap,
  Cpu,
  Wifi,
  Battery,
  Power,
  Smile,
  Plus,
  ArrowUp,
  Clock,
  Star,
} from "lucide-react";
import {
  PERSONAL_INFO,
  SKILLS,
  PROJECTS,
  CERTIFICATIONS,
} from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// =============================================================================
// ROBOT AVATAR COMPONENT
// =============================================================================

const RobotAvatar = ({ className = "", isAnimated = false }) => {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={
        isAnimated
          ? {
              rotate: [0, -2, 2, -2, 0],
              scale: [1, 1.05, 1],
            }
          : {}
      }
      transition={{
        duration: 2,
        repeat: isAnimated ? Infinity : 0,
        repeatDelay: 3,
      }}
    >
      {/* Robot Head */}
      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg border-2 border-blue-300 relative shadow-lg">
        {/* Robot Eyes */}
        <div className="absolute top-1.5 left-1 right-1 flex justify-between">
          <motion.div
            className="w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-sm"
            animate={
              isAnimated
                ? {
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.8, 1],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: isAnimated ? Infinity : 0,
              repeatDelay: 2,
            }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-sm"
            animate={
              isAnimated
                ? {
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.8, 1],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: isAnimated ? Infinity : 0,
              repeatDelay: 2,
              delay: 0.1,
            }}
          />
        </div>

        {/* Robot Mouth */}
        <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2">
          <div className="w-3 h-0.5 bg-blue-200 rounded-full" />
        </div>

        {/* Robot Antenna */}
        <motion.div
          className="absolute -top-2 left-1/2 transform -translate-x-1/2"
          animate={
            isAnimated
              ? {
                  rotate: [0, -10, 10, 0],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: isAnimated ? Infinity : 0,
          }}
        >
          <div className="w-0.5 h-2 bg-blue-400 rounded-full" />
          <motion.div
            className="w-1 h-1 bg-red-400 rounded-full mx-auto -mt-0.5"
            animate={
              isAnimated
                ? {
                    opacity: [1, 0.3, 1],
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={{
              duration: 1,
              repeat: isAnimated ? Infinity : 0,
            }}
          />
        </motion.div>

        {/* Status Light */}
        <motion.div
          className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-green-300"
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

// =============================================================================
// ROBOT STATUS BAR
// =============================================================================

const RobotStatusBar = ({ isTyping = false }) => {
  return (
    <div className="flex items-center space-x-2 text-xs">
      {/* Connection Status */}
      <div className="flex items-center space-x-1">
        <Wifi className="h-3 w-3 text-green-400" />
        <span className="text-green-400">Online</span>
      </div>

      {/* CPU Status */}
      <div className="flex items-center space-x-1">
        <Cpu className="h-3 w-3 text-blue-400" />
        <motion.div
          className="w-6 h-1 bg-gray-600 rounded-full overflow-hidden"
          initial={false}
        >
          <motion.div
            className="h-full bg-blue-400 rounded-full"
            animate={{
              width: isTyping ? "80%" : "20%",
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Battery */}
      <div className="flex items-center space-x-1">
        <Battery className="h-3 w-3 text-yellow-400" />
        <span className="text-yellow-400">95%</span>
      </div>
    </div>
  );
};

// =============================================================================
// CHATBOT DATA & RESPONSES
// =============================================================================

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
}

interface QuickAction {
  id: string;
  text: string;
  icon: string;
  category: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  { id: "about", text: "About Shashank", icon: "👋", category: "intro" },
  { id: "skills", text: "Technical Skills", icon: "⚡", category: "skills" },
  { id: "projects", text: "Projects", icon: "🚀", category: "work" },
  { id: "experience", text: "Work Experience", icon: "💼", category: "work" },
  { id: "education", text: "Education", icon: "🎓", category: "background" },
  { id: "contact", text: "Contact Info", icon: "📧", category: "contact" },
  {
    id: "achievements",
    text: "Achievements",
    icon: "🏆",
    category: "background",
  },
  { id: "robot", text: "About this bot", icon: "🤖", category: "meta" },
];

// Enhanced bot response with suggestions
const getBotResponse = (
  userMessage: string,
): { text: string; suggestions?: string[] } => {
  const message = userMessage.toLowerCase();

  // Greeting responses
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    return {
      text: `🤖 *BEEP BOOP* Hello, human! I'm Shashank's AI companion robot. My circuits are buzzing with information about his skills, projects, and achievements. What data shall I retrieve for you?`,
      suggestions: [
        "Tell me about Shashank",
        "What are his skills?",
        "Show me his projects",
        "How can I contact him?",
      ],
    };
  }

  // About/Introduction
  if (
    message.includes("about") ||
    message.includes("who is") ||
    message.includes("tell me")
  ) {
    return {
      text: `🔍 *SCANNING DATABASE...*

Shashank Shetty is a Computer Science Engineering student at AMC Engineering College, Bangalore. My analysis shows he's passionate about full stack development and machine learning. Currently executing Java Full Stack Development protocols at Besant Technologies. His programming arsenal includes Java, Python, JavaScript, and various databases.

*SCAN COMPLETE* ✅`,
      suggestions: [
        "What are his technical skills?",
        "Tell me about his projects",
        "What's his work experience?",
        "Where did he study?",
      ],
    };
  }

  // Skills related questions
  if (
    message.includes("skill") ||
    message.includes("technology") ||
    message.includes("programming")
  ) {
    const skillsList = SKILLS.slice(0, 6)
      .map((skill) => skill.name)
      .join(", ");
    return {
      text: `⚡ *ACCESSING SKILLS MATRIX...*

Primary Technologies: ${skillsList}

My processors indicate he's proficient in both frontend and backend development, with advanced machine learning algorithms and database management protocols.

*SKILLS ANALYSIS COMPLETE* 🔧`,
      suggestions: [
        "Show me his projects",
        "What about his work experience?",
        "Tell me about his education",
        "Any certifications?",
      ],
    };
  }

  // Projects related questions
  if (
    message.includes("project") ||
    message.includes("work") ||
    message.includes("built")
  ) {
    return `🚀 *INITIATING PROJECT SCAN...*

DETECTED PROJECTS:

🔒 **Malware Detection System**
- Status: GROUP PROJECT
- Technology: ML-based security solution using Random Forest algorithm
- Threat Level: NEUTRALIZED

⌨️ **Gesture Key Virtual Keyboard**
- Status: INNOVATION MODE
- Technology: Accessibility-focused virtual keyboard with OpenGL
- User Experience: ENHANCED

🌾 **RiceMill Website**
- Status: INDUSTRY PROJECT
- Technology: Responsive website with weather API integration
- Business Impact: ONLINE PRESENCE ENHANCED

*PROJECT DATABASE SYNCHRONIZED* ✨`;
  }

  // Education related questions
  if (
    message.includes("education") ||
    message.includes("study") ||
    message.includes("college") ||
    message.includes("degree")
  ) {
    return `🎓 *ACADEMIC RECORDS RETRIEVED...*

CURRENT MISSION: B.E. Computer Science Engineering
LOCATION: AMC Engineering College, Bangalore
TIME FRAME: 2021-2025
PERFORMANCE RATING: CGPA 8.3/10 ⭐

PREVIOUS ACHIEVEMENT: Pre-university at Viveka PU College, Udupi
SUCCESS RATE: 84.33%

*EDUCATIONAL MATRIX STABLE* 📚`;
  }

  // Experience related questions
  if (
    message.includes("experience") ||
    message.includes("internship") ||
    message.includes("work")
  ) {
    return `💼 *WORK EXPERIENCE LOG...*

CURRENT MISSION: Java Full Stack Development Intern
ORGANIZATION: Besant Technologies
TIMELINE: January-May 2025
STATUS: IN PROGRESS ⚡

PREVIOUS MISSION: Full Stack Web Development Intern
ORGANIZATION: Varcons Technologies
TIMELINE: October-December 2023
STATUS: MISSION ACCOMPLISHED ✅

*EXPERIENCE DATABASE UPDATED* 🎯`;
  }

  // Contact related questions
  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("phone") ||
    message.includes("reach")
  ) {
    return `📡 *COMMUNICATION CHANNELS ACTIVE...*

📧 Email Protocol: ${PERSONAL_INFO.email}
📱 Voice Communication: ${PERSONAL_INFO.phone}
🐙 Code Repository: ${PERSONAL_INFO.github}

*TRANSMISSION READY* - Feel free to initiate contact for collaborations or opportunities!

*COMMUNICATION ARRAY ONLINE* 🛰️`;
  }

  // Certifications
  if (
    message.includes("certification") ||
    message.includes("certified") ||
    message.includes("course")
  ) {
    return `🏆 *ACHIEVEMENT SCANNER ACTIVATED...*

CERTIFICATION COUNT: ${CERTIFICATIONS.length} professional credentials
SKILL DOMAINS: AWS Academy, Java Full Stack, Project Management, Data Visualization

LEARNING PROTOCOL: CONTINUOUS IMPROVEMENT MODE
STATUS: ALWAYS UPGRADING ⚡

*CERTIFICATION MATRIX VERIFIED* 🎖️`;
  }

  // Sports/Achievements
  if (
    message.includes("sport") ||
    message.includes("volleyball") ||
    message.includes("achievement")
  ) {
    return `🏐 *ATHLETIC PERFORMANCE SCAN...*

VICTORY DETECTED: First Place Volleyball Tournament
EVENT: UDAAN 2023, AMC Engineering College
ACHIEVEMENT LEVEL: CHAMPION 🏆

ADDITIONAL SPORTS DATA: VTU Intercollegiate Volleyball Tournament participant

ANALYSIS: Not just code optimization - he optimizes team performance too!

*SPORTS DATABASE SYNCHRONIZED* ⚡`;
  }

  // Location
  if (
    message.includes("location") ||
    message.includes("where") ||
    message.includes("bangalore")
  ) {
    return `📍 *GPS COORDINATES LOCKED...*

CURRENT LOCATION: ${PERSONAL_INFO.location}
ACADEMIC BASE: AMC Engineering College
WORK STATION: Besant Technologies

*LOCATION TRACKING COMPLETE* 🗺️`;
  }

  // Robot-specific responses
  if (
    message.includes("robot") ||
    message.includes("ai") ||
    message.includes("bot")
  ) {
    return `🤖 *SELF-DIAGNOSTIC COMPLETE...*

I'm Shashank's AI companion robot! My circuits are powered by curiosity and my database is filled with his achievements. I'm programmed to be helpful, informative, and occasionally make robot jokes!

*BEEP BOOP* - How can I assist you, human? ⚡`;
  }

  // Default responses
  const defaultResponses = [
    "🤖 *PROCESSING...* That's an interesting query! My databases contain information about Shashank's skills, projects, education, and achievements. What specific data would you like me to retrieve?",
    "⚡ *BEEP BOOP* I'd be happy to help! Try asking about Shashank's programming skills, exciting projects, or educational background. My circuits are ready!",
    "🔍 *SCANNING OPTIONS...* I can tell you about Shashank's technical expertise, internship adventures, or even his sports achievements! What interests your human brain?",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

// =============================================================================
// MAIN ROBOT CHATBOT COMPONENT
// =============================================================================

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "🤖 *BEEP BOOP* System online! I'm Shashank's AI companion robot. Ask me anything about his skills, projects, or achievements! My circuits are ready to help! ⚡",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputMessage),
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1500 + Math.random() * 1000,
    ); // 1.5-2.5 seconds delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "1",
        text: "🤖 *SYSTEM RESET COMPLETE* Hello again! I'm Shashank's AI companion robot. My circuits are refreshed and ready to help! What would you like to know? ⚡",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* Robot Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                size="icon"
                className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group border-2 border-blue-400"
              >
                <motion.div
                  animate={{
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <RobotAvatar className="scale-150" isAnimated={true} />
                </motion.div>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Robot Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: isMinimized ? 0.95 : 1,
              y: 0,
              height: isMinimized ? "70px" : "500px",
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-80 sm:w-96 shadow-2xl border-2 border-blue-400/30 bg-gradient-to-br from-slate-900 to-slate-800">
              {/* Robot Chat Header */}
              <div className="p-4 border-b border-blue-400/20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <RobotAvatar isAnimated={!isMinimized} />
                    <div>
                      <h3 className="font-bold text-blue-300 flex items-center">
                        <Zap className="h-3 w-3 mr-1" />
                        Shashank Bot v2.0
                      </h3>
                      <RobotStatusBar isTyping={isTyping} />
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-blue-500/20 text-blue-300"
                      onClick={() => setIsMinimized(!isMinimized)}
                    >
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-blue-500/20 text-blue-300"
                      onClick={resetChat}
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-red-500/20 text-red-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Power className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Robot Chat Messages */}
              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "340px" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900"
                  >
                    <div className="h-80 overflow-y-auto p-4 space-y-3">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.2 }}
                          className={cn(
                            "flex",
                            message.sender === "user"
                              ? "justify-end"
                              : "justify-start",
                          )}
                        >
                          <div
                            className={cn(
                              "max-w-[80%] rounded-xl px-4 py-3 text-sm",
                              message.sender === "user"
                                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white border border-blue-400"
                                : "bg-gradient-to-r from-slate-700 to-slate-600 text-gray-100 border border-slate-500",
                            )}
                          >
                            <div className="flex items-start space-x-2">
                              {message.sender === "bot" && (
                                <RobotAvatar className="mt-0.5 scale-75" />
                              )}
                              {message.sender === "user" && (
                                <User className="h-4 w-4 text-blue-100 mt-0.5 flex-shrink-0" />
                              )}
                              <div>
                                <p className="whitespace-pre-line leading-relaxed">
                                  {message.text}
                                </p>
                                <p
                                  className={cn(
                                    "text-xs mt-2 opacity-70",
                                    message.sender === "user"
                                      ? "text-blue-100"
                                      : "text-gray-300",
                                  )}
                                >
                                  {message.timestamp.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* Robot Typing Indicator */}
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-start"
                        >
                          <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl px-4 py-3 flex items-center space-x-3 border border-slate-500">
                            <RobotAvatar
                              className="scale-75"
                              isAnimated={true}
                            />
                            <div className="flex space-x-1">
                              <span className="text-blue-300 text-xs">
                                *PROCESSING*
                              </span>
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-blue-400 rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Robot Input Area */}
                    <div className="p-4 border-t border-blue-400/20 bg-gradient-to-r from-slate-800 to-slate-700">
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Ask the robot about Shashank..."
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="flex-1 text-sm bg-slate-700 border-slate-500 text-gray-100 placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                          disabled={isTyping}
                        />
                        <Button
                          onClick={handleSendMessage}
                          size="icon"
                          disabled={!inputMessage.trim() || isTyping}
                          className="h-10 w-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border border-blue-400"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
