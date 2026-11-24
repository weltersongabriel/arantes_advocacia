# Arantes Advocacia — Site Institucional

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Swiper](https://img.shields.io/badge/Swiper-11-6332F6?logo=swiper&logoColor=white)](https://swiperjs.com/)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Cormorant%20Garamond%20%7C%20Montserrat%20%7C%20Great%20Vibes-4285F4?logo=google-fonts&logoColor=white)](https://fonts.google.com/)

> Site institucional moderno, acessível e responsivo para o escritório **Arantes Advocacia**, desenvolvido com foco em performance, ética profissional (OAB) e experiência do usuário.

---

## ✨ Funcionalidades

### 🎨 Design & UX
- **Design system coeso** — tipografia elegante (Cormorant Garamond + Montserrat + Great Vibes), paleta sóbria, espaçamento consistente
- **Animações suaves** — reveal on scroll, partículas no hero, tilt cards na equipe, ripple buttons
- **Dark mode ready** — variáveis CSS preparadas para tema escuro
- **Micro-interações** — hover states, focus visible, loading states

### 📱 Responsividade
- **Mobile-first** — breakpoints em 480px, 768px, 1024px, 1280px
- **Logos adaptativos** — `<picture>` com `logo-mobile.png` (≤767px) e `logo-notebook.png` (≥768px)
- **Imagens otimizadas** — `loading="lazy"`, `width`/`height` explícitos, WebP ready

### ♿ Acessibilidade (WCAG 2.1 AA)
- Semântica HTML5 correta (`header`, `main`, `section`, `footer`, `nav`, `address`, `dl`)
- ARIA labels em elementos interativos (menu toggle, lightbox, carrossel, mapas)
- Contraste de cores validado
- Navegação por teclado completa (focus visible, skip links)
- `prefers-reduced-motion` respeitado
- Alt text descritivo em todas as imagens

### ⚡ Performance
- **Preconnect** para Google Fonts e CDN Swiper
- **Preload** de assets críticos
- **Defer** de scripts não essenciais
- **CSS custom properties** para theming sem runtime
- **IntersectionObserver** para reveal animations (sem jQuery)
- **Service Worker ready** (estrutura preparada)

### 🔒 Conformidade OAB
- Disclaimer legal no footer (Código de Ética e Disciplina da OAB)
- Caráter exclusivamente informativo
- Dados de OAB dos advogados exibidos
- Links de WhatsApp com `rel="noopener noreferrer"`

---

## 🗂️ Estrutura do Projeto

```
arantes-advocacia/
├── index.html          # HTML principal (semântico, acessível)
├── style.css           # Estilos (CSS custom properties, mobile-first)
├── main.js             # JS vanilla (ES6+, modules pattern)
├── img/
│   ├── logo-notebook.png      # Logo desktop (≥768px)
│   ├── logo-mobile.png        # Logo mobile (≤767px)
│   ├── instagram.jpg          # Ícone Instagram no header
│   ├── advogado-RobsonArantes.png
│   ├── advogada-LarissaSevero.png
│   ├── sobrenos1.jpg          # Interior do escritório
│   ├── sobrenos2.png          # Fachada (imagem principal About)
│   ├── sobrenos3.png          # Sala de atendimento
│   └── servico-*.jpg          # Imagens dos serviços (8 cards)
└── README.md
```

---

## 🚀 Como Executar

### Opção 1: Servidor Local (Recomendado)
```bash
# Node.js (npx serve)
npx serve .

# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000
```
Acesse: `http://localhost:3000` (serve) ou `http://localhost:8000` (Python/PHP)

### Opção 2: VS Code Live Server
1. Instale a extensão **Live Server**
2. Clique com botão direito no `index.html` → **Open with Live Server**

### Opção 3: Deploy Direto
- **Netlify**: Arraste a pasta para o painel ou conecte o repo
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Push para branch `main` + Pages ativado
- **Firebase Hosting**: `firebase deploy`

---

## ⚙️ Configuração Necessária

Edite os **placeholders** no `index.html` antes do deploy:

| Placeholder | Descrição | Local |
|-------------|-----------|-------|
| `[WHATSAPP_URL]` | Link direto do WhatsApp Business (ex: `https://wa.me/55XX9XXXXXXXX`) | Hero, Footer, Float button |
| `[WHATSAPP_ROBSON]` | WhatsApp individual do Dr. Robson | Card equipe |
| `[WHATSAPP_LARISSA]` | WhatsApp individual da Dra. Larissa | Card equipe |
| `[ENDEREÇO COMPLETO]` | Endereço formatado (rua, nº, bairro, cidade/UF, CEP) | Footer, Localização |
| `[NUMERO]` | Telefone com DDD (ex: `+55 61 99999-9999`) | Footer, Localização |
| `[EMAIL]` | E-mail de contato (ex: `contato@arantesadvocacia.com.br`) | Footer, Localização |
| `[HORÁRIO]` | Horário de funcionamento (ex: `Seg–Sex 9h–18h`) | Footer, Localização |
| `OAB/[UF] [NÚMERO]` | Número da OAB de cada advogado | Cards equipe, Footer |

> **Dica**: Use `https://wa.me/55DDD9XXXXXXXX?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta` para WhatsApp com mensagem pré-preenchida.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Versão | Finalidade |
|--------|------------|--------|------------|
| **HTML** | HTML5 | — | Semântica, SEO, acessibilidade |
| **CSS** | CSS3 + Custom Properties | — | Design system, responsividade, animações |
| **JS** | Vanilla ES6+ | — | Interatividade, carrossel, lightbox, partículas |
| **Fonts** | Google Fonts | — | Cormorant Garamond, Montserrat, Great Vibes |
| **Carousel** | Swiper | 11.x | Carrossel de serviços (touch, loop, autoplay) |
| **Icons** | SVG Inline | — | Balança (hero), setas, close, WhatsApp |
| **Map** | Google Maps Embed API | — | Iframe responsivo da localização |

---

## 📦 Seções do Site

| Seção | ID | Destaques Técnicos |
|-------|-----|-------------------|
| **Header** | `#header` | Menu hambúrguer acessível, logo responsivo, Instagram icon |
| **Hero** | `#inicio` | Partículas Canvas, logo animado, scroll indicator, CTA WhatsApp |
| **Sobre** | `#sobre` | Gallery grid 3 imagens + lightbox navegável (teclado/touch) |
| **Equipe** | `#equipe` | Tilt cards (mouse parallax), OAB, WhatsApp individual |
| **Serviços** | `#servicos` | Swiper carousel (8 cards), lazy load, navegação por setas/paginação |
| **Localização** | `#localizacao` | Google Maps Embed, toggle cor do mapa, botão "Como chegar" |
| **Instagram Band** | — | Call-to-action visual, handle @arantesadvocaciaa |
| **Footer** | `#contato` | Grid 4 colunas, links rápidos, redes, créditos dev, back-to-top |
| **Float WhatsApp** | — | Fixed bottom-right, tooltip, pulse animation |

---

## 🎨 Personalização

### Cores (CSS Custom Properties)
```css
:root {
  --color-bg: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-text-muted: #6b6b6b;
  --color-primary: #1a1a2e;      /* Azul-marinho profundo */
  --color-primary-light: #2d2d44;
  --color-accent: #c9a962;       /* Dourado suave */
  --color-accent-light: #e8d5a9;
  --color-border: #e5e5e5;
  --color-focus: #c9a962;
  --shadow-sm: 0 1px 2px rgba(0,0,0,.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,.08);
  --shadow-lg: 0 16px 32px rgba(0,0,0,.12);
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

### Breakpoints
```css
--bp-xs: 480px;   /* Mobile small */
--bp-sm: 768px;   /* Tablet / Mobile large */
--bp-md: 1024px;  /* Desktop small */
--bp-lg: 1280px;  /* Desktop large */
--bp-xl: 1536px;  /* Ultra wide */
```

---

## ♿ Checklist de Acessibilidade

- [x] Semântica HTML5 correta
- [x] Heading hierarchy (h1 → h2 → h3)
- [x] Alt text em todas as imagens
- [x] ARIA labels em botões/icon-only links
- [x] Focus visible em todos os interativos
- [x] Contraste ≥ 4.5:1 (texto) / 3:1 (UI)
- [x] `prefers-reduced-motion` respeitado
- [x] Navegação por teclado (Tab, Enter, Esc, Setas)
- [x] Skip link implícito (header → main)
- [x] Live regions para conteúdo dinâmico
- [x] Form labels associados (se houver formulários)
- [x] Idioma declarado (`lang="pt-BR"`)

---

## 📈 SEO & Meta Tags

```html
<title>Arantes Advocacia | Assessoria Jurídica</title>
<meta name="description" content="Arantes Advocacia — informações sobre atuação jurídica, equipe e formas de contato.">
<meta property="og:title" content="Arantes Advocacia">
<meta property="og:description" content="Informação jurídica com sobriedade e responsabilidade.">
<meta property="og:image" content="img/logo-notebook.png">
<meta property="og:type" content="website">
<meta name="theme-color" content="#141414">
<link rel="canonical" href="https://arantesadvocacia.com.br/">
<!-- Adicionar: sitemap.xml, robots.txt, JSON-LD Organization/LocalBusiness -->
```

---

## 🧪 Testes Recomendados

```bash
# Lighthouse (Performance, A11y, Best Practices, SEO)
npx lighthouse http://localhost:3000 --view

# Validação HTML
npx html-validate index.html

# CSS Lint
npx stylelint style.css

# Testes de responsividade
# Chrome DevTools → Device Toolbar (Ctrl+Shift+M)
```

---

## 📄 Licença

MIT License — veja [LICENSE](LICENSE) para detalhes.

> **Nota**: Imagens (`img/`) são de uso exclusivo do cliente Arantes Advocacia. Não incluídas na licença MIT.

---

## 👨‍💻 Créditos

| Função | Autor |
|--------|-------|
| **Desenvolvimento** | [Welterson Gabriel](https://weltersongabriel.netlify.app/) |
| **Design/UI** | Welterson Gabriel |
| **Conteúdo Jurídico** | Arantes Advocacia (Dr. Robson Arantes & Dra. Larissa Severo) |
| **Fotografia** | Arquivo do escritório |

**Links do Desenvolvedor:**
- 🌐 [Portfólio](https://weltersongabriel.netlify.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/welterson-gabriel-131473313/)
- 🐙 [GitHub](https://github.com/weltersongabriel)

---

## 📞 Contato do Escritório

- **Instagram**: [@arantesadvocaciaa](https://www.instagram.com/arantesadvocaciaa/)
- **WhatsApp**: [Clique para conversar](https://wa.me/55XXXXXXXXXXX)
- **Localização**: [Google Maps](https://maps.app.goo.gl/zjp7DV5YkjANWqTy5)

---

<div align="center">
  <sub>Feito com ⚖️ e ☕ para a Arantes Advocacia</sub>
</div>