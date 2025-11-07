export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => {
      reader.abort();
      reject(new Error("File reading failed"));
    };
    reader.onload = () => {
      // result is string like "data:<mime>;base64,...."
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
}