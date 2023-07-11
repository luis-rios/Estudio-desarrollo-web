const Solution = ((nCols,nRows,col,row )=>{return (nCols-(col-1))*(nRows-row)})
console.log(Solution(16,11,5,3));