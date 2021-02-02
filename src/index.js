
// You should implement your task here.

module.exports = function towelSort (matrix) {

   if (matrix === undefined || matrix.length === 0){return []}

  for(let i = 0; i < matrix.length; i++){
    i % 2 !== 0 ? matrix[i].sort((a,b) => a < b ? 1 : a > b ? -1 : 0) : matrix[i]
}
  return  matrix.join().split(',').map(parseFloat)
}
