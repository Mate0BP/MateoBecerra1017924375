/**
 * Módulo de funciones matemáticas básicas
 */

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (b === 0) {
    throw new Error('No es posible dividir por cero');
  }
  return a / b;
}

export function potencia(base, exponente) {
  return Math.pow(base, exponente);
}



