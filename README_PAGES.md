# Despliegue en GitHub Pages — Repo `cv`

## Pasos
1) Crea en GitHub un repositorio **público** llamado **cv** (vacío).  
2) Sube **todos** estos archivos (incluida la carpeta oculta `.github/`).  
3) Ve a **Settings → Pages** y elige **GitHub Actions** como método de despliegue.  
4) Haz un commit/push (o sube de nuevo los ficheros).  
5) El workflow `pages.yml` construirá el proyecto y publicará `dist/`.

## Base y rutas
- `vite.config.*` está con `base: '/cv/'` para que los assets cuelguen de `https://TU_USUARIO.github.io/cv/`.
- Si cambias el nombre del repo, cambia también ese `base`.

## Rutas SPA
- `public/404.html` incluye un fallback para evitar 404 al refrescar rutas internas.

## URL final
```
https://TU_USUARIO.github.io/cv/
```