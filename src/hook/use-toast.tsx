import React, { createContext, useContext, useState } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

interface ToastContextType {
  toast: (props: { title: string; description?: string; variant?: "default" | "destructive" }) => string;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({ title, description, variant = "default" }: { title: string; description?: string; variant?: "default" | "destructive" }): string => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, title, description, variant };
    
    setToasts((prevToasts) => [...prevToasts, newToast]);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }, 5000);
    
    return id;
  };

  const dismiss = (id: string): void => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  };

  // Render toasts
  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`rounded-md p-4 shadow-md ${
            t.variant === "destructive" ? "bg-red-600 text-white" : "bg-white text-gray-900"
          }`}
        >
          <div className="flex justify-between">
            <h3 className="font-medium">{t.title}</h3>
            <button onClick={() => dismiss(t.id)} className="text-sm">✕</button>
          </div>
          {t.description && <p className="text-sm mt-1">{t.description}</p>}
        </div>
      ))}
    </div>
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
