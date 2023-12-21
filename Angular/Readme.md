# Angular

Framework de marco de trabajo estandarizado.

> ng new <nombre de la aplicación> --standalone false
> ng serve -o

## Producción

> Tree shaking: Es una técnica que permite eliminar código que no se está usando en la aplicación. Esto permite reducir el tamaño de la aplicación y mejorar el rendimiento.
> Herramientas de producción: Netlify, Github Pages, etc.

ng build:

- Compila el código TypeScript en JavaScript
- Realiza el "tree shaking" para eliminar el código no utilizado y reducir el tamaño del paquete de la aplicación
- Minimiza el código para reducir aún más el tamaño del paquete
- Genera archivos de mapa de origen para ayudar con la depuració
- Coloca los archivos de salida en el directorio dist/

## Assets

- Contiene archivos estáticos como imágenes, iconos, etc. Estos archivos no cambian durante la ejecución de la aplicación.

## Bloques fundamentales

- Componentes: Bloque de código con segmento HTML y segmento de código TypeScript. Bloques pequeños y reutilizables.
- Rutas: Mostras diferentes componentes basados en el URL del navegador web.
- Directivas.
  - Directrivas de componentes: Contiene un pedazo de código reutilizable.
  - Directivas estructurales: Módifica el DOM, añade o remueve elementos.
  - Directivas de atributos: Cambian la aparencia o el comportamiento de un elemento, componente o directiva.
- Servicios: Bloque de código que se encarga de la lógica de negocio.
- Módulos: Permiten agrupar todo lo anterior, incluso otros módulos.

## Llaves cuadradas y redondas

- Llaves cuadradas: Se usan para enlazar propiedades de la clase del componente con la vista `[]`.
- Llaves redondas: Se usan para enlazar eventos de la vista con la clase del componente `()`.

## Modulos

> ng g m path/name
> Debe ser lo primero que se crea en una aplicación.

- Hacer uso de módulos nos permite agrupar componentes, directivas, servicios y otros módulos.
- Los módulos son visibles para el scope al que pertenece el módulo. Estan encapsulados y protegidos del exterior.
- Para exponer el modulo al exterior se debe exportar. Este módulo expuesto debe ser importado por otro módulo para poder ser usado.

### CommonModule

- Contiene directivas como ngIf, ngFor, ngClass, etc.

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

## Componentes

- Los componentes nos permiten asignar responsabilidades a diferentes partes de la aplicación. Estos componentes pueden ser reutilizados en diferentes partes de la aplicación. Así mismo, estos componentes pueden ser pequeños y simples, lo que permite que sean fáciles de mantener y probar.

## Servicios

- Los servicios son clases que se encargan de la lógica de negocio de la aplicación. Estos servicios pueden ser inyectados en los componentes para ser usados.
  - La lógica de negocio es el código que se encarga de realizar las operaciones de la aplicación. Por ejemplo, si tenemos una aplicación que se encarga de gestionar usuarios, la lógica de negocio sería el código que se encarga de crear, leer, actualizar y eliminar usuarios.
- Una buena practica es que los servicios sean privados.

## Inyección de dependencias

- La inyección de dependencias es un patrón de diseño que nos permite crear instancias de clases sin tener que crearlas directamente. Esto nos permite desacoplar las clases de sus dependencias.

## @Component

> ng g c path/name
> Todo componente debe ser parte de un módulo para ser usado (declarations).

- selector: Etiqueta personalizada para llamar al componente desde el HTML (app-...).
- templateUrl: Archivo HTML que contiene el código HTML del componente.
- styleUrls: Vector con una lista de archivos CSS para el componente.

## @Injectable

> ng g s path/name

- Un servicio puede ser definido en un módulo (providers) o haciendo uso de providedIn en el decorador @Injectable.
- providedIn: 'root': El servicio es un singleton durante toda la aplicación.

## @Input

- Permite la comunicación entre componentes. Permite pasar datos desde el componente padre al componente hijo.
- Define una propiedad que puede ser enviada desde el padre hacia el componente hijo.

```typescript
@Input() 
myProperty: Type;

<my-component [myProperty]="someExpression"></my-component>
```

## @Output

- Define una salida del componente que el componente padre puede subscribirse y escuchar.
- Usualmente cuando hablamos de "subscribirse a los observables"; significa estar escuchando las emisiones que ese objeto estará emitiendo a lo largo de su vida.

```typescript
@Output()
myEvent = new EventEmitter<Type>();

// Emitir un evento
this.myEvent.emit(someValue);

// Escuchar un evento
<my-component (myEvent)="someExpression"></my-component>
<my-component (myEvent)="someExpression($event)"></my-component>
```

## One way data binding

- Permite que los datos fluyan en una dirección, desde el componente (modelo) hacia la vista (plantilla). Esto significa que los cambios en el modelo se reflejarán automáticamente en la vista, pero los cambios en la vista no afectarán directamente al modelo.

## Two way data binding

- Permite mantener sincronizados los datos entre el modelo y la vista. Esto significa que cualquier cambio realizado en el modelo se reflejará automáticamente en la vista, y cualquier cambio realizado en la vista se actualizará en el modelo.

## Directivas

### Estructurales

- *ngIf: Muestra o no un elemento del DOM dependiendo de una condición.
- *ngIf-else: Muestra o no un elemento del DOM dependiendo de una condición, si no se cumple la condición muestra otro elemento.
  - Estructura:
    *ngIf = "trueCondition; else falseCondition"
    <ng-template #falseCondition>...</ng-template>
- *ngFor: Itera sobre un vector y muestra un elemento del DOM por cada elemento del vector.
  - *ngFor = "let item of items"
  - *ngFor = "let item of items; let i = index"
  - *ngFor = "let item of items; let i = index; let f = first; let l = last; let e = even; let o = odd"

### Atributos

- ngClass: Enlaza clases de css basado en un objeto o expresión.
  `[ngClass]="{'class1': true, 'class2': false}"`
- ngStyle: Enlaza estilos de css basado en un objeto o expresión.
- ngModel: Enlaza el valor de un input con una propiedad de la clase del componente.
  - Se debe importar FormsModule en el módulo que se vaya a usar.
  `[(ngModel)]="myProperty"`
- ngSubmit: Enlaza el evento submit de un formulario con una función del componente.
  `(ngSubmit)="onSubmit()"`

## Paquetes externos

- UUID: Generador de identificadores únicos `npm install uuid`.
- http-server: Servidor web para servir archivos estáticos `npm install --global http-server`, en la carpeta dist: `<nombre-proyecto> % http-server -o`.
