import { useFormikContext } from "formik";
import { Button } from "../../components/UI/Button";
import { useModal } from "../../hooks/useModal";
import { SelectAssigneeModal } from "./SelectAssigneeModal";

type FormValues = {
  assignee: string;
  };

export function AssigneePicker() {
  const { values, setFieldValue } = useFormikContext<FormValues>();
  const { openModal, closeModal } = useModal();

  return (
    <div>
      <label className="block text-sm font-medium">Performer</label>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          onClick={() =>
            openModal(
              <SelectAssigneeModal
                onSelect={(user) => {
                  setFieldValue("assignee", user);
                  closeModal();
                }}
              />
            )
          }
        >
          Select
        </Button>

        {values.assignee && (
          <span className="text-sm text-gray-700">Selected: {values.assignee}</span>
        )}
      </div>
    </div>
  );
}