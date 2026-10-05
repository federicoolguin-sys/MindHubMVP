# MindHub - Landing page

Sitio estático hecho con HTML + Tailwind CSS (CLI).

## Estructura

```
index.html            Página principal (acá se edita el contenido)
catalogo.pdf          PDF que se abre en la ruta /cursos
cursos/index.html     Redirección de /cursos hacia catalogo.pdf (no se edita)
src/input.css         Estilos fuente de Tailwind (componentes y utilidades propias)
tailwind.config.js    Colores de marca, tipografía y archivos a escanear
assets/css/styles.css CSS compilado (NO editar a mano, se genera con npm run build)
assets/img/           Imágenes del sitio
assets/favicon.svg    Ícono de la pestaña
```

## Requisitos (solo la primera vez)

1. Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y [Git](https://git-scm.com/).
2. Clonar el repo e instalar dependencias:

   ```bash
   git clone <url-del-repositorio>
   cd <carpeta>
   npm install
   ```

## Cómo publicar cambios

### 1. Traer la última versión

```bash
git pull
```

### 2. Editar con vista previa en vivo

```bash
npm run dev
```

Deja Tailwind escuchando y recompila el CSS cada vez que guardás `index.html`. Cortá con `Ctrl + C` cuando termines.

En otra terminal, levantá un servidor local y abrí [http://localhost:3000](http://localhost:3000):

```bash
npm run preview
```

No abras `index.html` con doble clic: el video de YouTube da **error 153** cuando la página se abre como archivo local (`file://`). Con el servidor local funciona bien.

### 3. Compilar para producción

```bash
npm run build
```

**Este paso es obligatorio antes de publicar.** El servidor usa el `assets/css/styles.css` que subas; si te olvidás, las clases nuevas de Tailwind no van a tener estilos.

### 4. Publicar en el servidor

Subí el sitio al directorio público del servidor (la raíz del dominio). Tiene que quedar así, para que `/` sea la landing y `/cursos` abra el PDF:

```
index.html
catalogo.pdf
cursos/index.html
assets/
```

No subas `node_modules`. `src/`, `package.json` y `tailwind.config.js` solo hacen falta para compilar, no para que el sitio se vea.

El servidor tiene que servir archivos estáticos desde esa raíz. `/cursos` debe abrir `cursos/index.html`, y esa página redirige a `/catalogo.pdf`.

### 5. Verificar

Abrí el dominio y recargá con `Ctrl + F5` para saltear la caché. Revisá también `/cursos`.

## Tareas frecuentes

### Agregar un premio al carrusel

1. Guardá la foto en `assets/img/` (preferentemente JPG y de menos de 150 KB).
2. En `index.html`, buscá la sección `AwardsSection`, copiá un bloque `<article>...</article>` completo y pegalo a continuación del último.
3. Cambiá `src`, `alt`, `width`/`height` de la imagen, el título, el puesto y la descripción.

Los puntos de navegación y la numeración se generan solos.

### Cambiar el link de "Agendar una llamada"

El link aparece varias veces en `index.html`. Usá **Buscar y reemplazar** (`Ctrl + H`) con la URL vieja y la nueva para cambiarlo en todos lados a la vez.

### Actualizar el PDF de /cursos

El footer enlaza a `/cursos`, y esa ruta redirige a `catalogo.pdf`.

1. Reemplazá `catalogo.pdf` en la raíz del proyecto por el archivo nuevo, con el mismo nombre.
2. Publicalo junto con el resto del sitio. No hace falta `npm run build`.

La dirección queda `https://tudominio.com/cursos`. Si no ves el PDF nuevo, recargá con `Ctrl + F5`.

### Cambiar colores de marca

Editá `theme.extend.colors.brand` en `tailwind.config.js` y corré `npm run build`.

## Checklist antes de publicar

- [ ] Si cambié clases de Tailwind, corrí `npm run build` (no hace falta si solo cambié textos, imágenes o el PDF)
- [ ] Revisé la página en el navegador, en escritorio y en celular (F12 → modo dispositivo)
- [ ] Las imágenes nuevas están en `assets/img/` y no pesan de más
- [ ] No subí la carpeta `node_modules` (ya está en `.gitignore`)
