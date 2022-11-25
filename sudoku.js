/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  function getArr(boardString) {
    const arr = boardString.split('');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      const breakdown = arr.splice(0, 9);
      result.push(breakdown);
    }

    return result;
  }

  const board = getArr(boardString);

  function findEmptyCell(board) {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return 0;
  }
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  let res = 0;
  board.map((el) => {
    res += el.reduce((acc, num) => Number(acc) + Number(num), 0);
  });
  return res === 405;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(sudoku) {
  console.table(sudoku);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
