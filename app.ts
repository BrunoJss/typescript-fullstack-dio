// var a = 'a' //não é muito usado no mercado pelo vazamento de escopo
let b = 'b' //implicitamente o TS atribui o tipo string à variável
const c:string = 'c' //atribuição explicita do tipo de variável

let n:number = 2
let x:boolean = true

let m: string | number = "Bruno" //define que a variavel aceita string e numero, detalhe no uso do |

let y:any = "qualquer coisa" //define que a variavel aceita qualquer tipo de dado
 