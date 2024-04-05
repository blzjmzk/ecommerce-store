"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

//wyswietlanie uwagi, ze sklep powstał w celach edukacyjnych

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const isNotificationShown = localStorage.getItem("isNotificationShown");
    if (!isNotificationShown && showNotification) {
      setTimeout(() => {
        toast(
          (t) => (
            <span className="p-2">
              Note: This store has been created for educational purposes only
              and does not allow for any real-world transactions.
              <button
                className="bg-slate-200 rounded-md text-black mt-2 p-2"
                onClick={() => {
                  toast.dismiss(t.id);
                  setShowNotification(false);
                  localStorage.setItem("isNotificationShown", "true");
                }}
              >
                Dismiss
              </button>
            </span>
          ),
          { duration: 12000 }
        );
      }, 1000);
    }
  }, [showNotification]);

  return null;
};

export default Notification;
