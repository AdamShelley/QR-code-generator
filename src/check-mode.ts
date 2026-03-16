// Analyise the data to be encoded to determine how it can be encoded

const isNumeric = (string: string) => /^[+-]?\d+(\.\d+)?$/.test(string);
const isAlphanumeric = (string: string) => /^[a-zA-Z0-9]+$/.test(string);
const containsKanji = (string: string) => /[\u4E00-\u9FAF]/.test(string);

export function getEncodingMode(
  str: string,
): "numeric" | "alphanumeric" | "kanji" | "byte" {
  if (isNumeric(str)) return "numeric";
  if (isAlphanumeric(str)) return "alphanumeric";
  if (containsKanji(str)) return "kanji";
  return "byte";
}
