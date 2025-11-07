import { useFormikContext } from "formik";
import { fileToBase64 } from "../../utils/fileToBase64";

type AttachmentUpLoaderValues = {
  attachment: string | null;
 };

export function AttachmentUploader() {
  const { values, setFieldValue } = useFormikContext<AttachmentUpLoaderValues>();

  return (
    <div>
      <label className="block text-sm font-medium">File</label>
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={async (e) => {
          const file = e.currentTarget.files?.[0];
          if (!file) return setFieldValue("attachment", null);
          const b64 = await fileToBase64(file);
          setFieldValue("attachment", b64);
        }}
      />

      {values.attachment && (
        <div className="mt-2">
          {values.attachment.startsWith("data:image/") ? (
            <img src={values.attachment} alt="preview" className="max-h-40 rounded" />
          ) : (
            <a href={values.attachment} className="text-blue-600 underline" target="_blank">
                View File
            </a>
          )}
        </div>
      )}
    </div>
  );
}