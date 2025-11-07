type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-md p-6 min-w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}