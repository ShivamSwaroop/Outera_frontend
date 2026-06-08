import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000";

export default function useSocket(campaignId) {
  const [workflow, setWorkflow] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!campaignId) return;

    const socket = io(SOCKET_URL);

    socket.on("connect", () => {
      setConnected(true);
      console.log("Socket connected");
    });

    socket.on("workflow:update", (data) => {
      console.log("Workflow update:", data);
      setWorkflow(data);
    });

    socket.on("workflow:error", (data) => {
      console.error("Workflow error:", data);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [campaignId]);

  return {
    workflow,
    connected,
  };
}
