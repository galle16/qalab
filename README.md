# QA·LAB — Landing Page

Página web de servicios de QA Testing. Diseño oscuro, tipografía Roboto y animaciones CSS.

## Estructura del proyecto

```
qalab/
├── index.html        ← Página principal
├── css/
│   └── styles.css    ← Todos los estilos
├── js/
│   └── main.js       ← Navegación móvil, formulario, cursor y animaciones
└── README.md
```

## Cómo usar

1. Abre `index.html` directamente en el navegador — no necesita servidor.
2. Requiere conexión a internet solo para cargar las fuentes de Google Fonts.

## Personalización rápida

| Qué cambiar            | Dónde                          |
|------------------------|--------------------------------|
| Email de contacto      | `index.html` → sección `#contact` |
| Link de Calendly       | `index.html` → botón "Reservar llamada" |
| Precios                | `index.html` → sección `#pricing` |
| Colores principales    | `css/styles.css` → bloque `:root` |
| Logo / nombre          | `index.html` → `<nav>` y `<footer>` |

## Colores

```css
--accent:  #00e5a0   /* verde principal */
--accent2: #7c6bff   /* morado */
--accent3: #ff4d6d   /* rojo/coral */
--bg:      #0a0a0f   /* fondo oscuro */
```

## Secciones incluidas

- **Hero** — headline, CTA y estadísticas
- **Tech stack** — herramientas y tecnologías
- **Servicios** — 6 cards de servicios
- **Terminal** — demo visual de ejecución de tests
- **Proceso** — 4 pasos de trabajo
- **Precios** — 3 planes (Starter, Professional, Enterprise)
- **Testimonios** — 3 opiniones de clientes
- **CTA** — llamada a la acción final
- **Footer**

## Mejoras de experiencia

- Navegación móvil accesible con teclado
- Formulario que prepara una consulta por email
- Selección automática del plan desde precios
- Soporte para reducción de movimiento y dispositivos táctiles
- Estados de foco visibles y enlace para saltar al contenido
