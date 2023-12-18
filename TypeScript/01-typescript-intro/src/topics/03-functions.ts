
function addNumbers(a: number, b: number): number {
    return a + b;
}

const lambdaResult = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return (secondNumber == undefined)
        ? firstNumber * base
        : firstNumber * secondNumber * base;
}

/* const result1: number = addNumbers(1, 2);
const result2: string = lambdaResult(10, 2);
const result3: number = multiply(5);

console.log({ result1, result2, result3 }); */

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`Punto de vide ${this.hp}`);
    }
}

strider.showHp();

healCharacter(strider, 20);

strider.showHp();

export { };