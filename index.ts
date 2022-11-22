// --- Declarações --- 

// Inferencia e annotation //

//Inferencia
const inf = 'Testando'

//Annotation
const ann: string = 'Teste'

// declaracao de parametro opcional
export type BalanceValueTS ={
    title?:string,
    value?:string,
    balanceType?:string
}

// Tipos //

// Número
const x: number = 10
const y: number = 3.14329492349

// String
const firstName: string = 'Matheus'

// Booleano
const a: boolean = true

// Array numeros T1
let nums: number[] = [1, 2, 3]

// Array numeros T2
const numbers: Array<number> = [100, 200]

// Array Any
const arr: any[] = [1, 'teste', true, { nome: 'Matheus' }]

// Array (Tupas) array que aceita apenas parametro nas posições exatas
let myTuples: [number, string, string[]]
//Certo 
myTuples = [50, 'Gean', ['teste1', 'teste2']]
//Errado
myTuples = ['Gean', 50, ['teste1', 'teste2']]

// Tipagem de objeto
const user : {name:string, age:number} = { name:"Gean", age:30 };
//Certo
user.name = 'Pedro';
user.age = 50;
//Errado
user.age = '50';

//Declaração em funcão
function soma(a: number, b: number) {
  console.log(a + b)
}

//Declaração de retorno (Indicado quando tiver retorno)
function greeting(name: string): string {
  return `Olá ${name}!`;
}

//Declaração de tipo de objeto
function passCoordinates(coord: { x: number; y: number }) {
  console.log('X coordinates: ' + coord.x)
  console.log('X coordinates: ' + coord.y)
}
passCoordinates({ x: 10, y: 5 })


//Declaração de função com parametro opcional
function shaowName(firstName: string, lastName?: string) {
  if (lastName !== undefined) console.log(`Olá, ${firstName} ${lastName}, tudo bem?`)
  
  console.log(`Olá, ${firstName}, tudo bem?`)
}
shaowName('Matheus', 'Battisti')
shaowName('João')

// Declaração com dois tipos de aceitação
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`)
}

showBalance(500)
showBalance('100')


// Declaração com dois tipos (chamado de union type)
let id : string | number = "10";
//Certo
id = 100;
id = "100";
// Errado
id = false


// Função com dois tipos de aceitação
function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    console.log('Usuário não aprovado!')
  }
  console.log(`O usuário é um: ${role}`)
}
showUserRole(false)
showUserRole('Admin')


//Type alias aceita dois tipos de entrada
type ID = number | string
let id_ : ID;
//Certo
id_ = 10;
// Errado
id_ = [];

// só vai aceitar os tipos acima
function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}
showId('7F35@r4$#')
showId(20)

// enum (Mapa)
enum Size {
  P="Pequeno",
  M="Médio",
  G="Grande",
}
// Uso
const camisa = {
  name: "Camila Social",
  size: Size.G,
}
console.log(camisa);
// { name: "Camila Social", size: Grande,}


// Literal Types
// aceita apenas o que foi definido.
let teste_: "autenticado" | null;
//Certo
teste_ = null;
//Errado
teste_ = false;


// Criando objeto com tipagem
type User = {
  name: string
  surname: string
}
function userDetails(user: User) {
  console.log(`Nome: ${user.name}`)
  console.log(`Sobrenome: ${user.surname}`)
}
// Certo
userDetails({ name: 'Matheus', surname: 'Battisti' })

// Criando interface com tipagem
interface Point {
  x: number, 
  y:number, 
  z:number
}
// Só pode passar o que está na interface
function showCoords(obj: Point) {
  console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`)
}
// Certo
showCoords({x: 10, y: 15, z: 12})
// Errado
showCoords({x: 10, y: 15})
showCoords({x: 10, y: 15, z:''})

//Generics no caso abaixo aceita qualquer tipo de array
//Usar T ou U por padrão
function showArrayItems<T>(arr: T[]){
  arr.forEach(element => {
    console.log('ITEm', element)
  });
}
const a1 = [true, "teste", "d"];
const a2 = ["a","b","c"];
showArrayItems(a1);
showArrayItems(a2);

//Aceita apenas o que foi definido.
function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`The direction is: ${direction}`)
}

//Certo
showDirection('left')
showDirection('center')
//Errado
showDirection("up")
