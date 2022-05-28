/**
 * FUNDAMENTOS EN TYPESCRIPT
 * Para indicar al IDE que estamos usando TypeScript, abrimos una nueva terminal
 * y ejecutamos el siguiente comando: tsc nombreArchivoTyScript en este caso tsc funciones
 * Para inicializar en el terminal escribimos tsc -init este creara el archivo tsconfig.json
 * Para convertir todo archivo TS a JS escribimos tsc -w que significa watch
 * En el target del json podemos cambiar la version de TS
 * - Nota: si ocurre un error al momento de ejecutar un comando en la terminal, debemos abrir
 * el PowerShell como adminitrador y escribir el siguiente comando: Set-ExecutionPolicy Unrestricted
 * y habilitamos todos los scripts. Esto solucionara el problema.
 */


// La forma de declarar variables en TS es con let
let saludo = "Te saludo desde TypeScript!"

// Por inerencia de tipo no es necesario declarar el tipo de varible TS lo hace automaticamente
saludo = "cambio el texto de saludo a este!"

// La declaracion de tipo se hace con : seguido del tipo de variable
let numero:number
numero = 10

// any permite almacenar cualquier tipo de variable, por lo cual no es recomendable
let cualquiera:any
cualquiera = "cadena"
cualquiera = 10

// Para declarar constantes se hace con la palabra reservada const
const pi = 3.1416

function saludar() {
    console.log(saludo)
    console.log(numero)
    console.log(cualquiera)
}
saludar();