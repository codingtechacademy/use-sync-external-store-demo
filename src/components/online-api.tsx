"use client";

import React, { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export default function OnlineApiDemo() {
  const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine);

  return (
    <div>
      <h1>{isOnline ? "Vous êtes en ligne ✅" : "Vous êtes hors ligne ❌"}</h1>
    </div>
  );
}
