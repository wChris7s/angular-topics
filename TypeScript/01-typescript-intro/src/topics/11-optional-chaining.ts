export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Victor",
}

const passenger2: Passenger = {
    name: "Chris",
    children: ["Mar", "Alice"]
}


const returnChildrenNumber = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0;    // Nos permite asignar un valor por defecto en caso sea nulo.
    // const howManyChildren = passenger.children!.length;      // Damos la seguridad de que nunca se va a recibir un valor nulo.

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}


returnChildrenNumber( passenger1 );