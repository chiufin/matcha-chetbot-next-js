"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import MatchaDiscovery from "@/components/MatchaDiscovery";
import MatchaLoader from "@/components/MatchaLoader";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

async function askAgent(message: string) {
    const res = await fetch("/api/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    return data.reply;


    // const res = await fetch("http://localhost:3000/api/agent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ message }),
    // });

    // const data = await res.json();
    // return data.reply;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! 👋 I'm your Matcha Knowledge assistant. Ask me anything about matcha or London's best matcha cafés!",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const ans = await askAgent(content);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: ans.output_text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ChatMessage message={message} />
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-card border border-border rounded-2xl p-4">
                  <MatchaLoader />
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border bg-card/50 backdrop-blur-sm">
            <div className="p-6">
              <ChatInput onSend={handleSendMessage} disabled={isLoading} />
            </div>
          </div>
        </div>

        {/* Discovery Panel */}
        <div className="hidden lg:block w-96 border-l border-border bg-card/30 backdrop-blur-sm overflow-y-auto">
          <MatchaDiscovery />
        </div>
      </div>
    </div>
  );
};

export default Chat;
