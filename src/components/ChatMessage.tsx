import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div className="flex items-start gap-3 max-w-[80%]">
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-lg">🍵</span>
          </div>
        )}
        <div
          className={cn(
            "rounded-2xl px-4 py-3 shadow-soft",
            isUser
              ? "bg-primary text-primary-foreground rounded-br-sm"
              : "bg-card border border-border rounded-bl-sm"
          )}
        >
          <p className={cn("text-sm leading-relaxed", !isUser && "text-foreground")}>
            {message.content}
          </p>
          <div
            className={cn(
              "text-xs mt-2 opacity-60",
              isUser ? "text-primary-foreground" : "text-muted-foreground"
            )}
          >
            {message.timestamp.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
        {isUser && (
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-lg">👤</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
