# Jaime García · Portfolio Web

Portal cloud-native construido con Next.js 14 (App Router), TailwindCSS, shadcn/ui y Framer Motion para presentar el perfil full-stack de Jaime García, especializado en modernización de aplicaciones bancarias.

## 🌐 En vivo
- **Producción**: [jagarcig.com](https://jagarcig.com)
- **Repositorio**: [jagarcig-ntt/portafolio-jagarcig](https://github.com/jagarcig-ntt/portafolio-jagarcig)

## Tecnologías clave
- **Next.js 14 App Router** para SSR/SSG, optimización de imágenes y rutas API.
- **TailwindCSS + tokens custom** con sistema de temas mejorado y modo oscuro.
- **shadcn/ui primitives** (Button, Badge) con mejoras de accesibilidad y contraste.
- **Framer Motion** para microinteracciones y animaciones fluidas.
- **Vitest + Testing Library** para tests de componentes.

## Scripts
```bash
pnpm install          # instalar dependencias
pnpm dev              # entorno local (http://localhost:3000)
pnpm build            # build de producción
pnpm start            # servidor de producción
pnpm lint             # linting
pnpm test             # tests con Vitest
```

## Datos mock & API
- Fixtures tipados en `src/lib/fixtures.ts` alimentan el UI.
- API Routes (`/api/*`) devuelven JSON listo para pasar a Prisma/Postgres más adelante.
- `POST /api/contact` simula recepción de leads (`202 Accepted`).

## Theming y accesibilidad
- **Sistema de temas mejorado**: Variables CSS optimizadas para mejor contraste en modo claro.
- **ThemeProvider avanzado**: Persiste preferencias con `localStorage` y detección automática.
- **Componentes UI mejorados**: Badges con bordes visibles, mejor contraste y accesibilidad AA.
- **Header inteligente**: Auto-ocultado durante scroll para mejor UX de lectura.
- **Micro-interacciones**: Transiciones suaves y estados de hover consistentes.

## Modelo de datos (Postgres · esquema base)
```
profile(id PK, name, role, location, summary, availability, photo_url)
social_link(id PK, profile_id FK -> profile.id, platform, label, url)
skill_category(id PK, title, description)
skill(id PK, category_id FK -> skill_category.id, name, level, stack, years)
experience(id PK, company, role, start_date, end_date, summary)
experience_highlight(id PK, experience_id FK -> experience.id, body)
experience_tech(experience_id FK, tech)
project(id PK, name, summary, repo_url, demo_url, featured boolean)
project_tag(project_id FK -> project.id, tag)
talk(id PK, title, event, talk_date, link, summary)
article(id PK, title, published_at, summary, canonical_url)
```

## Migración a Prisma + Postgres
1. Añadir `prisma/schema.prisma` reflejando las tablas anteriores.
2. Ejecutar `pnpm prisma migrate dev` con SQLite local.
3. Sustituir fixtures por repositorios Prisma dentro de Server Components / API Routes.
4. Desplegar en Supabase/Neon y ejecutar `pnpm prisma migrate deploy` en CI.
5. Activar ISR/incremental revalidation y caché en `fetch`.

## Animación de fondo
- Gradientes animados con Framer Motion (`AnimatedBackground`).
- Fallback estático cuando `prefers-reduced-motion` está activo.
- Espacio para integrar `react-three-fiber` o shaders ligeros (`/components/animated-background.tsx`).

## Despliegue
- **Cloudflare Pages** (Actual): Despliegue estático con dominio personalizado `jagarcig.com`
  - Build command: `cd apps/web && npm run build`
  - Output directory: `apps/web/out`
  - Configuración: Static export con `output: 'export'`
- **Alternativa Vercel**: Variables recomendadas (`NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, etc.)
- Backend futuro en **Supabase / Neon + Prisma**; exponer `DATABASE_URL` y `DIRECT_URL`.

## Backlog
### MVP ✅ Completado
- [x] Layout App Router con Hero, grid de secciones y proyectos.
- [x] Fixtures tipados + rutas API mock.
- [x] **Sistema de temas mejorado** con mejor contraste y accesibilidad.
- [x] **Header inteligente** con auto-ocultado durante scroll.
- [x] **Badges mejorados** con bordes visibles y mejor contraste.
- [x] **Organización de contenido** optimizada sin justificación de texto.
- [x] **Mensaje de bienvenida** enfocado en especialización bancaria.
- [x] Animaciones Framer Motion y tarjetas glassmorphism.
- [x] Test inicial de Hero con Vitest.
- [x] **Despliegue en producción** en Cloudflare Pages (jagarcig.com).

### Próximos pasos
- [ ] Añadir sección About detallada + timeline extendido.
- [ ] Integrar MDX para artículos/notas técnicas.
- [ ] Implementar formulario `Contact` real con Resend/Ses y validación Zod.
- [ ] Conectar Prisma + Supabase/Neon y sustituir fixtures.
- [ ] Añadir analytics (Plausible/Umami) y observabilidad (Sentry).
- [ ] Lighthouse audit ≥ 90 (optimizar imágenes, lazy-loading extra contenido).
- [ ] Configurar tests E2E con Playwright (focus y tab order).
```
