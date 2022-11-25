// Подключить функции из файла sudoku.js.
const sudoku = require('./sudoku');

function readAndSolve(error, fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  if (error) {
    throw error;
  }

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = fileData
    .split('\n')
    .filter((line) => line !== '');

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = Number(process.argv[2]) || 1;
  console.log(`Решаем судоку №${puzzleNumber}:`);
  function format(puzzle) {
    const s = puzzle.length;
    const chars = puzzle.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 3) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    }, '');

    return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}
const puzzle1 = format(puzzle)

function format1(puzzle1) {
  const s = puzzle1.length;
  const chars = puzzle1.split('');
  const strWithSpaces = chars.reduceRight((acc, char, i) => {
      const spaceOrNothing = ((((s - i) % 12) === 0) ? '\n' : ' ');
      return (spaceOrNothing + char + acc);
  }, '');

  return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}

  console.log(format1(puzzle1), '\n');

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = puzzles[puzzleNumber - 1];
  console.log(`Решаем судоку №${puzzleNumber}:`);
  function format(puzzle) {
    const s = puzzle.length;
    const chars = puzzle.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 3) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    }, '');

    return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}
const puzzle1 = format(puzzle)

function format1(puzzle1) {
  const s = puzzle1.length;
  const chars = puzzle1.split('');
  const strWithSpaces = chars.reduceRight((acc, char, i) => {
      const spaceOrNothing = ((((s - i) % 12) === 0) ? '\n' : ' ');
      return (spaceOrNothing + char + acc);
  }, '');

  return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}

  console.log(format1(puzzle1), '\n');

  // Использовать функцию solve из файла sudoku.js для решения судоку.
  const solvedPuzzle = sudoku.solve(puzzle);

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (!sudoku.isSolved(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(`Судоку №${puzzleNumber} решён успешно!`);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  sudoku.prettyBoard(solvedPuzzle);
}

module.exports = readAndSolve;
