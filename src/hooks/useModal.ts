import { useContext } from "react";
import type { ModalContextType } from "../types/modal";
import { createContext } from "react";

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be inside ModalProvider");
  return ctx;
}