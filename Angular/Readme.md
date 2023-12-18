# Angular

Framework de marco de trabajo estandarizado.

> ng new <nombre de la aplicación> --standalone false
> ng serve -o

## Bloques fundamentales

- Componentes: Bloque de código con segmento HTML y segmento de código TypeScript. Bloques pequeños y reutilizables.
- Rutas: Mostras diferentes componentes basados en el URL del navegador web.
- Directivas.
  - Directrivas de componentes: Contiene un pedazo de código reutilizable.
  - Directivas estructurales: Módifica el DOM, añade o remueve elementos.
  - Directivas de atributos: Cambian la aparencia o el comportamiento de un elemento, componente o directiva.
- Servicios: Bloque de código que se encarga de la lógica de negocio.
- Módulos: Permiten agrupar todo lo anterior, incluso otros módulos.

## Modulos

- Hacer uso de módulos nos permite agrupar componentes, directivas, servicios y otros módulos.
- Los módulos son visibles para el scope al que pertenece el módulo. Estan encapsulados y protegidos del exterior.
- Para exponer el modulo al exterior se debe exportar. Este módulo expuesto debe ser importado por otro módulo para poder ser usado.

```typescript
@NgModule({
  declarations: [
    MyComponent
  ],

  exports: [
    MyComponent
  ]
})
export class MyModule {}
```

## @Component

> ng g c path/name
> Todo componente debe ser parte de un módulo para ser usado (declarations).

- selector: Etiqueta personalizada para llamar al componente desde el HTML (app-...).
- templateUrl: Archivo HTML que contiene el código HTML del componente.
- styleUrls: Vector con una lista de archivos CSS para el componente.

## One way data binding

- Permite que los datos fluyan en una dirección, desde el componente (modelo) hacia la vista (plantilla). Esto significa que los cambios en el modelo se reflejarán automáticamente en la vista, pero los cambios en la vista no afectarán directamente al modelo.

## Two way data binding

- Permite mantener sincronizados los datos entre el modelo y la vista. Esto significa que cualquier cambio realizado en el modelo se reflejará automáticamente en la vista, y cualquier cambio realizado en la vista se actualizará en el modelo.

## Directivas

### Estructurales

- *ngIf: Muestra o no un elemento del DOM dependiendo de una condición.
- *ngIf-else: Muestra o no un elemento del DOM dependiendo de una condición, si no se cumple la condición muestra otro elemento.
- *ngFor: Itera sobre un vector y muestra un elemento del DOM por cada elemento del vector.
