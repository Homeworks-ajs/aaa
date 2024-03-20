import { calcTileType } from '../utils.js';

test('should return top-left', () => {
  const result = calcTileType(0, 8);
  expect(result).toBe('top-left');
});

test('return top-right', () => {
  const result = calcTileType(7, 8);
  expect(result).toBe('top-right');
});

test('return top', () => {
  const result = calcTileType(3, 8);
  expect(result).toBe('top');
});

test('return left', () => {
  const result = calcTileType(16, 8);
  expect(result).toBe('left');
});

test('should return right', () => {
  const result = calcTileType(21, 8);
  expect(result).toBe('right');
});

test('return right', () => {
  const result = calcTileType(12, 8);
  expect(result).toBe('center');
});

test('return bottom-left', () => {
  const result = calcTileType(56, 8);
  expect(result).toBe('bottom-left');
});

test('return bottom-right', () => {
  const result = calcTileType(63, 8);
  expect(result).toBe('bottom-right');
});

test('return bottom', () => {
  const result = calcTileType(60, 8);
  expect(result).toBe('bottom');
});
