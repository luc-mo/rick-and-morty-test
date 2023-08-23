# Rick and Morty Character Filter

Este proyecto es una prueba que consiste en crear una API GraphQL en el backend para consumir la API oficial de Rick and Morty. El frontend utiliza Next.js para mostrar una lista de personajes de Rick and Morty que son humanos.

## Estructura del Proyecto

El proyecto utiliza una estructura monorepo con las carpetas `frontend` y `backend`. Se utiliza `pnpm` para la gestión de paquetes y scripts.

- `/frontend`: Contiene la aplicación Next.js para el frontend.
- `/backend`: Contiene el servidor Express y GraphQL para el backend.

## Requisitos Previos

- Node.js >= 16.x
- pnpm >= 8.x

## Instalación

Primero, clona el repositorio:

```bash
git clone https://github.com/your-username/rick-and-morty.git
```

Dirígete al directorio del proyecto y ejecuta:

```bash
pnpm install
```

## Desarrollo

Para iniciar el desarrollo en el frontend y el backend simultáneamente, puedes ejecutar desde la raiz del proyecto:

```bash
pnpm dev
```

### Frontend

Para iniciar solo el frontend, navega hasta el directorio `frontend` y ejecuta:

```bash
pnpm dev
```

### Backend

Para iniciar solo el backend, navega hasta el directorio `backend` y ejecuta:

```bash
pnpm dev
```

## Pruebas

Para ejecutar pruebas en ambos proyectos, ejecuta desde la raiz del proyecto:

```bash
pnpm test
```

## Construcción para Producción

Para construir ambos proyectos para producción, ejecuta desde la raiz del proyecto:

```bash
pnpm build
```

## Ejecución en Producción

Para ejecutar ambos proyectos en producción, ejecuta desde la raiz del proyecto:

```bash
pnpm start
```

## Tecnologías Utilizadas

- Frontend: Next.js, React, GraphQL, Axios, Material UI
- Backend: Express, GraphQL, Axios, Awilix
- Pruebas: Vitest

## Autor

[Luciano Morales](https://github.com/luc-mo)