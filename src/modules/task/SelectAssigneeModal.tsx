import { Button } from "../../components/UI/Button";
import { useModal } from "../../hooks/useModal";

const MOCK_USERS = ["Ivan", "Mary", "Oleksandr", "Bohdan"];

type Props = {
  onSelect: (name: string) => void;
};

export function SelectAssigneeModal({ onSelect }: Props) {
  const { closeModal } = useModal();

  const choose = (name: string) => {
    onSelect(name);   
    closeModal();     
  };

  return (
    <div className="bg-white p-6 rounded shadow-md min-w-[300px]">
      <h3 className="text-lg font-bold mb-4">Choose a performer</h3>

      <ul className="space-y-2">
        {MOCK_USERS.map((u) => (
          <li key={u}>
            <button
              className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded"
              onClick={() => choose(u)}
            >
              {u}
            </button>
          </li>
        ))}
      </ul>

      <Button
        onClick={closeModal}
        className="mt-4 text-sm text-gray-500 hover:text-black"
      >
        Cancel
      </Button>
    </div>
  );
}