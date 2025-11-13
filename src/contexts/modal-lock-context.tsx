// FILE: src/contexts/modal-lock-context.tsx

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ModalLockContextType {
  isLocked: boolean;
  lockScroll: () => void;
  unlockScroll: () => void;
}

const ModalLockContext = createContext<ModalLockContextType | undefined>(
  undefined
);

export function ModalLockProvider({ children }: { children: ReactNode }) {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (isLocked) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isLocked]);

  const lockScroll = () => setIsLocked(true);
  const unlockScroll = () => setIsLocked(false);

  return (
    <ModalLockContext.Provider value={{ isLocked, lockScroll, unlockScroll }}>
      {children}
    </ModalLockContext.Provider>
  );
}

export function useModalLock() {
  const context = useContext(ModalLockContext);
  if (context === undefined) {
    throw new Error("useModalLock must be used within a ModalLockProvider");
  }
  return context;
}
