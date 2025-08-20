// utils/email.ts
export function isValidFrom(from: string) {
  // acepta "email@dominio.com" o "Nombre <email@dominio.com>"
  const simple = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const withName = /^[^<>]+<\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*>$/;
  return simple.test(from) || withName.test(from);
}
