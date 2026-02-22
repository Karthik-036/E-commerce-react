import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);

    setTimeout(() => {
      setToast(null);
    }, 2000); // hide after 2 seconds
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div style={styles.toast}>
          {toast}
        </div>
      )}
    </ToastContext.Provider>
  );
}

const styles = {
  toast: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "5px",
    fontSize: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: 9999
  }
};