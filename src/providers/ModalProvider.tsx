import { useState } from "react";
import { ModalContext } from "../hooks/useModal";

type ModalStackItem = {
  id: number;
  element: React.ReactNode;
};

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [stack, setStack] = useState<ModalStackItem[]>([]);

  const openModal = (element: React.ReactNode) =>
    setStack((prev) => [...prev, { id: Date.now(), element }]);

  const closeModal = () =>
    setStack((prev) => prev.slice(0, -1));

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {stack.map((item, idx) => (
        <div
          key={item.id}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-[50]"
          style={{ zIndex: 50 + idx }}
        >
          {item.element}
        </div>
      ))}
    </ModalContext.Provider>
  );
}

