# 📸 Galería
**Desarrollado por David Cruz**

Aplicación web interactiva desarrollada con **Angular 18**, diseñada como un tablero dinámico de imágenes. El proyecto implementa un flujo de datos basado en servicios y persistencia en el lado del cliente.

---

## 🚀 Características
* **Diseño Masonry/Grid:** Interfaz responsiva que imita el tablero de Pinterest mediante CSS Grid.
* **Gestión de Imágenes:** Permite añadir nuevas fotografías mediante URL y eliminarlas de la colección.
* **Sistema de Interacción:** Botón de "Like" funcional con actualización de estado en tiempo real.
* **Contador Global:** Visualización del total de likes acumulados en toda la galería.
* **Persistencia Local:** Uso de `LocalStorage` para que los datos se mantengan al recargar la página (Hydration-ready).

---

## 🛠️ Tecnologías Utilizadas
* **Framework:** Angular 18 (Componentes Standalone)
* **Estilos:** CSS3 Moderno (Custom Properties y Grid Layout)
* **Iconos:** FontAwesome (SVG)
* **Lógica:** TypeScript

---

## 📂 Estructura del Proyecto
```text
src/app/
├── components/
│   ├── formulario/    # Desplegable para añadir imágenes
│   └── foto-card/     # Componente de tarjeta con acciones
├── services/
│   └── galeria.ts     # Lógica de negocio y persistencia
├── models/
│   └── foto.model.ts  # Interfaz de datos
└── app.component.html # Estructura principal con Navbar

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
