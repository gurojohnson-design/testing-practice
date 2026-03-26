export function caesarCypher(str, shift) {
  const n = ((shift % 26) + 26) % 26;

  return [...str]
    .map((char) => {
      const c = char.charCodeAt(0);

      if (c >= 65 && c <= 90) {
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      }
      if (c >= 97 && c <= 122) {
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      }
      return char;
    })
    .join("");
}
