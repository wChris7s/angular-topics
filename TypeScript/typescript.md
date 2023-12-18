# TypeScript

## Vite

- Vite es un bundler que permite utilizar TypeScript sin necesidad de configurar nada.

```bash
npm create vite
npm install
npm run dev
```

## Tipos de dato

`number, number[]`, `string, string[]`, `boolean`, `any`

## Tipo de dato ``any``

- El tipo de dato `any` se utiliza para indicar que una variable puede ser de cualquier tipo de dato.
- Se recomienda no utilizar el tipo de dato `any` ya que se pierde el tipado estático de TypeScript.

## Creación de funciones

- Las funciones se pueden crear utilizando la palabra reservada `function` o utilizando una función flecha `=>`.

```typescript
function myFunction() {}
const myFunction = () => {};
```

- Las funciones se pueden crear con parámetros opcionales: `function myFunction(param1?: string, param2?: number) {}`.
- Las funciones se pueden crear con parámetros por defecto: `function myFunction(param1: string = 'default', param2: number = 0) {}`.

## Lambda

- Las funciones lambda se utilizan para crear funciones anónimas.

## Desestructuración

- La desestructuración se utiliza para extraer valores de un objeto o arreglo.

### Objeto

```typescript
const myObject = {   
    id: 1,
    username: 'user',
    address: {
        street: 'street',
        number: 123,
    },
};

// Forma 1
const { id: userId, address: {street} } = myObject;

// Forma 2
const { id: userId, address } = myObject;
const { street } = address;
```

### Arreglo

```typescript
const myArray: string[] = ["Chris", "Vale", "Mar", "Tutú"];
const [, , , tutu]: string[] = myArray;
const [chris, vale, mar, utut]: string[] = myArray;
const [, , , , isis = "Isis"]: string[] = myArray;    // Valor por defecto en caso de que no exista el valor en el arreglo.
```

## Importación, exportación (Módulos)

- La exportación se utiliza para exportar una variable, función o clase de un archivo. Esta exportación se logra con la palabra reservada `export`.
- La importación se utiliza para importar una variable, función o clase de un archivo. Esta importación se logra con la palabra reservada `import`.

## Interfaces

- Las interfaces se utilizan para definir la estructura de un objeto.
- Las interfaces se pueden utilizar para definir el tipo de dato de una variable.

## Reglas

- Las variables deben ser declaradas con `let` o `const`.
- Si se sabe que una variable no va a cambiar, se debe declarar con `const`.
- Para definir que una variable puede ser opcional, se debe agregar el caracter `?` al final del nombre de la variable => `let username?: string;`.
- Si una función tiene más de tres parámetros, es recomendable utilizar un objeto como parámetro.
- Priorizar la composición sobre la herencia nos permite tener un código más limpio y mantenible. Ya que la herencia puede generar un código muy complejo. Esta composición se basa en la creación de clases que se puedan reutilizar en otras clases.

```typescript
// La clase Person puede mutar, pero la clase User no se verá afectada.
class Person {
    constructor(
        public name: string,
        private address: string = "No Address"
    ) {}
}

class User {
    constructor(
        public username: string,
        private password: string,
        public person: Person
    ) {}
}
```

## Módulos

- Los módulos se utilizan para organizar el código en archivos separados.
- Los módulos se pueden importar y exportar.

## Caracter de tubería

- El caracter de tubería `|` se utiliza para indicar que un valor puede ser de varios tipos, por ejemplo:

```typescript
let id: number | string;
let username: string | 12345;
```

## Clases

### Forma extendida

```typescript
export class Person {
    public name: string;
    private address: string;

    constructor (name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}
```

### Forma corta

```typescript
export class Person {
    constructor(
        public name: string,
        private address: string = "No Address"
    ) {}
}
```

## Generics

- Los genéricos se utilizan para crear componentes que trabajen con varios tipos de datos.
- Poseen la siguiente estructura:

```typescript
function myFunction<T>(arg: T): T {
    return arg;
}

// Ejemplo de uso
const myString1 = myFunction<string>("Hello World");    // Se indica el tipo de manera explícita.
const myString2 = myFunction("Hello World");            // Se indica el tipo de manera implícita.
```

## Decoradores

- Son funciones que se utilizan para modificar el comportamiento de una clase, atributos o métodos.
