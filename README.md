# Absolute Yachts — Landing Page

Propuesta académica de landing page responsive inspirada en la identidad visual de Absolute Yachts.

## Tecnologías
- React 18
- Vite
- JavaScript
- CSS3
- Lucide React (iconografía)

## Requisitos
- Node.js 18 o superior
- npm

## Instalación y ejecución
1. Descomprime el proyecto.
2. Abre la carpeta `absolute-yachts-landing` en Visual Studio Code.
3. Abre la terminal integrada.
4. Ejecuta:

```bash
npm install
npm run dev
```

5. Abre la URL local que muestra Vite (normalmente http://localhost:5173).

## Compilar para producción

```bash
npm run build
npm run preview
```

La compilación se genera en `dist/`.

## Funcionalidades
- Navegación por anclas y menú móvil.
- Header que cambia al desplazarse.
- Selector interactivo de modelos.
- Formulario con validación HTML y confirmación visual.
- Estados de foco, etiquetas y textos alternativos.
- Animaciones de entrada con soporte para `prefers-reduced-motion`.
- Metadatos SEO básicos y estructura semántica.

## Consideraciones
- El formulario está en modo demostración: valida los campos y muestra confirmación, pero no transmite datos a un servidor ni a un CRM.
- Las imágenes se cargan desde URLs externas de Unsplash y requieren conexión a internet. Para producción se recomienda descargar imágenes autorizadas de la marca, optimizarlas y servirlas desde `public/`.
- Los modelos y textos son una propuesta de presentación. Verificar todas las especificaciones técnicas con las fichas oficiales antes de publicar como información comercial.
- Esta propuesta no es un sitio oficial de Absolute Yachts ni de Grupo Todomar.

## Publicación en Vercel
1. Sube el repositorio a GitHub.
2. En Vercel selecciona **Add New → Project** e importa el repositorio.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Pulsa **Deploy**.
