/*Validar un formato de correo electronico
Escribe una expresion regular que verifique si una
cadena de texto tiene un formato válido de correo 
electrónico*/
const validarCorreo=(string)=>{
  const validar=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})(?:\.(?!$)|$)){3}(?:0|[1-9][0-9]{0,2}|1[0-9]{3}|2[0-4][0-9]{2}|25[0-5])$/
  return validar.test(string)
}
console.log(validarCorreo("0.233.161.00"));