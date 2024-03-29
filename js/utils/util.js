//Задание 7 часть 2

export const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const checkStringLength = (string, length) => string.length <= length;

export const HashtagRegex = /\W(#[а-яa-z]+\b)(?!;)/gmi;

export const isHashtagValid = (value) => value.length <= 20 && !HashtagRegex.test(value);

