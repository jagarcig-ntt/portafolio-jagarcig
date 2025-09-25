# Jaime García · Portfolio Profesional

Monorepo del portfolio profesional de Jaime García, especializado en modernización de aplicaciones bancarias y desarrollo full-stack.

## 🌐 En vivo
- **Producción**: [jagarcig.com](https://jagarcig.com)
- **Repositorio**: [jagarcig-ntt/portafolio-jagarcig](https://github.com/jagarcig-ntt/portafolio-jagarcig)

## 📁 Estructura del proyecto

```
cv-jaime/
├── apps/
│   └── web/              # Aplicación Next.js 14 principal
│       ├── src/
│       ├── public/
│       └── README.md     # Documentación técnica detallada
├── package.json          # Scripts del workspace
├── pnpm-workspace.yaml   # Configuración del monorepo
└── README.md            # Este archivo
```

## 🚀 Inicio rápido

```bash
# Instalar dependencias
pnpm install

# Desarrollo local
pnpm dev

# Build de producción
pnpm build

# Deploy a Cloudflare Pages
pnpm deploy
```

## 🛠 Stack tecnológico

- **Framework**: Next.js 14 (App Router, Static Export)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animaciones**: Framer Motion
- **Gestión de paquetes**: pnpm (workspace)
- **Hosting**: Cloudflare Pages
- **Testing**: Vitest + Testing Library

## 📚 Documentación

Para información técnica detallada, configuración y arquitectura, consulta:
- [Documentación de la aplicación web](./apps/web/README.md)

## 🔄 Despliegue

El proyecto está configurado para despliegue automático en Cloudflare Pages:
- **Branch principal**: `main`
- **Comando de build**: `cd apps/web && npm run build`
- **Directorio de salida**: `apps/web/out`

## 📞 Contacto

Para consultas profesionales o colaboraciones:
- **Email**: [Contacto a través del portfolio](https://jagarcig.com)
- **LinkedIn**: Perfil disponible en el portfolio
