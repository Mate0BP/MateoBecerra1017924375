import test from 'node:test';
import assert from 'node:assert/strict';
import { sumar, restar, multiplicar } from '../src/calculator.js';

test('Calculadora - Suma de dos números positivos', () => {
  assert.equal(sumar(5, 3), 8);
});

test('Calculadora - Suma de número positivo y negativo', () => {
  assert.equal(sumar(10, -4), 6);
});

test('Calculadora - Resta de dos números', () => {
  assert.equal(restar(10, 4), 6);
});

test('Calculadora - Multiplicación de dos números', () => {
  assert.equal(multiplicar(4, 5), 20);
});

test('Calculadora - Multiplicación por cero', () => {
  assert.equal(multiplicar(7, 0), 0);
});

