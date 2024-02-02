"use client"
import useRudderStackAnalytics from "@/rudder/useRudderAnalytics";
import React from "react";
import { useEffect } from "react";

const Rudder = () => {
  const analytics = useRudderStackAnalytics();

  const page = () => {
    analytics?.page("Cart Viewed");
  };
  const identify = () => {
    analytics?.identify("sample-user-123");
  };
  const track = () => {
    analytics?.track("Order Completed");
  };

  useEffect(() => {
    if (analytics) {
      analytics.page("Auto track");
    }
  }, [analytics]);

  return (
    <button
      onClick={page}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>Page </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Clicking this tile will trigger a page event.
      </p>
    </button>
  );
};

export default Rudder;
