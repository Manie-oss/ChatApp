import { useEffect, useRef, useState, type RefObject } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";

function Conversation() {
  const [messages, setMessages] = useState([]);

  const convRef: RefObject<HTMLDivElement | null> = useRef(null);
  const scrollConvBottom: any = () =>
    convRef.current?.scrollIntoView({
      behavior: "instant",
      block: "end",
      inline: "nearest",
    });
  useEffect(() => {
    !!convRef && scrollConvBottom();
  });

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: any = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a: any, b: any) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return unsubscribe;
  }, []);

  return (
    <main className="conversation">
      <div ref={convRef} className="messages-wrapper">
        {messages?.map((message: any) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </main>
  );
}

export default Conversation;
