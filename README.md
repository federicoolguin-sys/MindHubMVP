# MindHub - Landing page

Sitio estático hecho con HTML + Tailwind CSS (CLI), publicado en GitHub Pages.

## Estructura

```
index.html            Página principal (acá se edita el contenido)
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
   git clone https://github.com/USUARIO/REPO.git
   cd REPO
   npm install
   ```

## Cómo subir cambios nuevos

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

No abras `index.html` con doble clic: el video de YouTube da **error 153** cuando la página se abre como archivo local (`file://`). Con el servidor local o en GitHub Pages funciona bien.

### 3. Compilar para producción

```bash
npm run build
```

**Este paso es obligatorio antes de subir.** GitHub Pages publica el `assets/css/styles.css` que esté en el repo; si te olvidás, las clases nuevas de Tailwind no van a tener estilos en la web publicada.

### 4. Subir a GitHub

```bash
git add .
git commit -m "Describe brevemente el cambio"
git push
```

### 5. Verificar

En 1 o 2 minutos el sitio se actualiza solo. Podés seguir el progreso en la pestaña **Actions** del repo. Si no ves el cambio, recargá con `Ctrl + F5` para saltear la caché.

## Tareas frecuentes

### Agregar un premio al carrusel

1. Guardá la foto en `assets/img/` (preferentemente JPG y de menos de 150 KB).
2. En `index.html`, buscá la sección `AwardsSection`, copiá un bloque `<article>...</article>` completo y pegalo a continuación del último.
3. Cambiá `src`, `alt`, `width`/`height` de la imagen, el título, el puesto y la descripción.

Los puntos de navegación y la numeración se generan solos.

### Cambiar el link de "Agendar una llamada"

El link aparece varias veces en `index.html`. Usá **Buscar y reemplazar** (`Ctrl + H`) con la URL vieja y la nueva para cambiarlo en todos lados a la vez.

### Cambiar colores de marca

Editá `theme.extend.colors.brand` en `tailwind.config.js` y corré `npm run build`.

## Checklist antes de hacer push

- [ ] Corrí `npm run build`
- [ ] Revisé la página en el navegador, en escritorio y en celular (F12 → modo dispositivo)
- [ ] Las imágenes nuevas están en `assets/img/` y no pesan de más
- [ ] No subí la carpeta `node_modules` (ya está en `.gitignore`)
