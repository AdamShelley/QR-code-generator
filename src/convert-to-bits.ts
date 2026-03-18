export function convertToBits(str: string) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    const byteBinary = bytes[i].toString(2);

    binary;
  }
}
