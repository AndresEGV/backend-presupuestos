📚 API REST Backend Presupuestos
¡Bienvenido al repositorio del Backend Presupuestos! Este proyecto es una API REST diseñada para ser el núcleo de una aplicación de presupuestos y gestión de gastos, permitiendo a los usuarios:

Crear y gestionar presupuestos personalizados.
Registrar y categorizar gastos.
Consultar estadísticas financieras en tiempo real.
Actualizar y eliminar registros según sus necesidades.
Este backend proporciona todos los endpoints necesarios para que los usuarios puedan interactuar fácilmente con sus datos y llevar un control eficiente de sus finanzas.

🚀 Características principales
Endpoints CRUD: GET, POST, PUT, DELETE.
Manejo eficiente de errores.
Validación de datos de entrada.
Autenticación y autorización con JWT.
[Otros puntos clave como frameworks, tecnologías o funcionalidades adicionales].
🛠️ Tecnologías utilizadas
Lenguaje: Node.js / TypeScript.
Framework: Express.
Base de datos: PostgreSQL.
Autenticación: JWT.

📂 Estructura del proyecto

📦 backend-api
├── 📁 src
│ ├── 📁 config # Configuración (DB, variables, servicios globales)
│ ├── 📁 controllers # Controladores: lógica de los endpoints
│ ├── 📁 models # Modelos: esquemas o entidades (ORM/ODM)
│ ├── 📁 routes # Rutas y mapeo de endpoints
│ ├── 📁 middlewares # Middleware: validación, autenticación, manejo de errores
│ ├── 📁 utils # Utilidades y funciones auxiliares
│ ├── 📄 server.ts # Configuración e inicialización del servidor
│ └── 📄 index.ts # Punto de entrada principal
├── 📄 README.md # Este archivo 😄
├── 📄 .env # Variables de entorno (configuración sensible)
└── 📄 package.json # Dependencias y scripts del proyecto

## 📄 Documentación de Endpoints

| **Método** | **Endpoint**          | **Descripción**                 |
| ---------- | --------------------- | ------------------------------- |
| `GET`      | `/api/v1/budgets`     | Obtiene todos los presupuestos. |
| `GET`      | `/api/v1/budgets/:id` | Obtiene un presupuesto por ID.  |
| `POST`     | `/api/v1/budgets`     | Crea un nuevo presupuesto.      |
| `PUT`      | `/api/v1/budgets/:id` | Actualiza un presupuesto.       |
| `DELETE`   | `/api/v1/budgets/:id` | Elimina un presupuesto.         |

## 🛠️ Instalación y configuración

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

   ```

2. **Instala las dependencias:**:

   ```bash
   npm install

   ```

3. **Configura las variables de entorno:**:

   ```bash
   DB_URI=postgresql://localhost:5432/miBaseDeDatos

   ```

4. **Inicia el servidor**:

   ```bash
   npm start
   ```
