
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if((!Array.isArray(matrix)) || (matrix.length === 0)) return ([]);

  let sortMatrix = [];
  matrix.forEach((subMatrix,index) => {
    index % 2 !== 0 ? sortMatrix = sortMatrix.concat(subMatrix.reverse()) : sortMatrix = sortMatrix.concat(subMatrix);
  })
  return sortMatrix;
}
