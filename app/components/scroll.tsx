"use client";

import { use, useCallback, useEffect, useRef } from "react";
import { MessageType } from "./types";

const Scroll = ({ messages }: { messages: MessageType[] }) => {
  const messageEndRef = useRef<HTMLDivElement>(null);

  //messagesを取得したらスクロール
  const scrollToBottom = useCallback(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //初回にボトムスクロール
  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    <div>
      <div ref={messageEndRef} />
    </div>
  );
};

export default Scroll;
