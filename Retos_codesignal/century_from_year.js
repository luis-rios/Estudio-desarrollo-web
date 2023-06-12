/* Dado un año retorna el cilgo en el que está. El primer ciglo abarca desde  el año 1
hasta he incluyendo el año 100, el segundo desde el año 101 incluyendo el año 200 etc. */
const CenturyFromYear=(year) => {return Math.ceil(year/100 )}
console.log(CenturyFromYear(1700));