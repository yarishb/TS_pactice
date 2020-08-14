const aloes: string = "Hello"

const isValidHeres: boolean = true;
const isntValidHeres: boolean = false;

const numbersA: number = 3e10

const messagses: string = "Hello TypeScript";

const numbers: number[] = [1,2,2,2,1,4]
const numbers2: Array<number> = [1,2,2,1,4,5,]

const scontactss: [string, number] = ["hello", 1212]

function ssayNames(name: string): void{
    console.log(name)
}

ssayNames("Bungala")


function somethibng(messagse: string): never{
    throw new Error(messagse)
}

type Login = string;
const login: Login = "Say your name"