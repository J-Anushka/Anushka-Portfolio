"use client";

import { useState, useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { handleAskAnushka } from "@/app/actions";
import { Bot, Send, User, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialState = {
  answer: "",
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
    </Button>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Anushka's AI assistant. Ask me anything about her work, projects, or skills!",
    },
  ]);
  const [state, formAction] = useFormState(handleAskAnushka, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.answer) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: state.answer as string },
      ]);
    }
    if (state.error) {
       setMessages((prev) => [
        ...prev,
        { role: "assistant", content: state.error as string },
      ]);
    }
  }, [state]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);
  

  const handleFormSubmit = (formData: FormData) => {
    const question = formData.get("question") as string;
    if (question.trim()) {
      setMessages((prev) => [...prev, { role: "user", content: question }]);
      formAction(formData);
      formRef.current?.reset();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </div>
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-md h-[70vh] max-h-[600px] bg-card border rounded-lg shadow-xl flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <div className="p-4 border-b font-headline text-lg">Chat with Anushka's AI</div>
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8">
                     <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "p-3 rounded-lg max-w-xs",
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                 {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                     <AvatarFallback><User/></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <form
            ref={formRef}
            action={handleFormSubmit}
            className="flex items-center gap-2"
          >
            <Input name="question" placeholder="Ask a question..." autoComplete="off" />
            <SubmitButton />
          </form>
        </div>
      </div>
    </>
  );
}
