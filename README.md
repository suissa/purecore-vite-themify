# 🚀 Vite Presets

Biblioteca completa de presets visuais para aplicações Vite com sistema de configuração avançado e tema Marketing Intelligence Hub.

## 📦 Instalação

```bash
npm install vite-presets
# ou
yarn add vite-presets
# ou
pnpm add vite-presets
```

## 🎯 Conceitos Principais

### Position.Forge() - Sistema de Posicionamento

O sistema `Position.Forge()` permite configurar posicionamento de elementos de forma semântica:

```javascript
import { createVitePresets } from 'vite-presets';

const config = createVitePresets();

// Usar preset existente
const dockMenuPosition = config.Position.Forge('dock-menu');
// Retorna: { position: 'absolute', bottom: '0', left: '0', right: '0', zIndex: '50' }

// Criar configuração customizada
const customPosition = config.Position.Forge(['absolute', 'bottom']);
// Retorna: { position: 'absolute', bottom: '0' }

// Posicionamento simples
const fixedPosition = config.Position.Forge('fixed');
// Retorna: { position: 'fixed' }
```

### Sistema de Presets

Três tipos principais de aplicações:

#### 🖥️ Dashboard
```javascript
const dashboardPreset = presets.presets.getDashboardPreset('default');
// ou
const compactDashboard = presets.presets.getDashboardPreset('compact');
```

#### 📄 Landing Page
```javascript
const landingPreset = presets.presets.getLandingPagePreset('default');
// ou
const minimalLanding = presets.presets.getLandingPagePreset('minimal');
```

#### 📚 Documentação
```javascript
const docsPreset = presets.presets.getDocumentationPreset('default');
```

## 🚀 Uso Básico

### 1. Configuração Inicial

```javascript
import VitePresets from 'vite-presets';

// Criar instância
const presets = new VitePresets();

// Ou usar a função factory
const config = createVitePresets();
```

### 2. Aplicar Tema

```html
<!DOCTYPE html>
<html>
<head>
    <script src="path/to/theme-loader.js"></script>
    <script src="path/to/vite-presets.js"></script>
</head>
<body>
    <div id="app"></div>

    <script>
        const presets = new VitePresets();

        // Aplicar preset ao body
        presets.applyPreset(document.body, 'dashboard', 'default');
    </script>
</body>
</html>
```

### 3. Usar em React/TypeScript

```tsx
import React, { useEffect } from 'react';
import { VitePresets } from 'vite-presets';

const App: React.FC = () => {
    useEffect(() => {
        const presets = new VitePresets();
        presets.applyPreset(document.body, 'dashboard');
    }, []);

    return (
        <div className="dashboard-main">
            <h1 className="text-marketing-gradient">
                Dashboard com Vite Presets
            </h1>
            <button className="btn-marketing-primary">
                Ação Principal
            </button>
        </div>
    );
};
```

## 📄 Páginas Pré-configuradas

### Calendário
```javascript
const calendarPage = presets.pages.generateCalendarPage();
```

### Chatbot
```javascript
const chatbotPage = presets.pages.generateChatbotPage();
```

### Upload de Arquivos
```javascript
const uploadPage = presets.pages.generateUploadPage();
```

### Login
```javascript
const loginPage = presets.pages.generateLoginPage();
```

## 🎨 Sistema de Layout

### Container Centralizado
```javascript
const containerLayout = config.Layout.Forge('container-center');
// Retorna: { maxWidth: '72rem', margin: '0 auto', padding: '0 20px' }
```

### Grid de Cards
```javascript
const gridLayout = config.Layout.Forge('grid-cards');
// Retorna: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }
```

### Layout Customizado
```javascript
const customLayout = config.Layout.Forge({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});
```

## 🎯 Sistema de Cores

### Tema Primário
```javascript
const primaryTheme = config.Color.Forge('primary-bg');
// Retorna: { background: 'var(--background-primary)', color: 'var(--text-primary)' }
```

### Gradiente
```javascript
const gradientTheme = config.Color.Forge('gradient-primary');
// Retorna: { background: 'linear-gradient(135deg, var(--primary-color), var(--color-primary-dark))' }
```

## 📝 Sistema de Tipografia

### Título do Hero
```javascript
const heroTypography = config.Typography.Forge('hero-title');
// Retorna: { fontFamily: 'var(--font-secondary)', fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1 }
```

### Texto do Corpo
```javascript
const bodyTypography = config.Typography.Forge('body-text');
// Retorna: { fontFamily: 'var(--font-primary)', fontSize: '1rem', lineHeight: 1.6 }
```

## 🔧 Customização de Presets

```javascript
const customDashboard = presets.presets.customizePreset(
    presets.presets.getDashboardPreset('default'),
    {
        layout: {
            sidebar: {
                width: '320px',
                background: '#1a1a1a'
            }
        },
        theme: {
            colors: {
                primary: '#ff6b6b'
            }
        }
    }
);
```

## 📱 Exemplos Completos

### Dashboard Completo

```html
<!DOCTYPE html>
<html>
<head>
    <script src="theme-loader.js"></script>
    <script src="vite-presets.js"></script>
</head>
<body>
    <header class="dashboard-header">
        <h1 class="text-marketing-gradient">Meu Dashboard</h1>
    </header>

    <nav class="dashboard-sidebar">
        <div class="sidebar-menu">
            <div class="sidebar-item active">📊 Dashboard</div>
            <div class="sidebar-item">📅 Calendário</div>
        </div>
    </nav>

    <main class="dashboard-main">
        <div class="grid-cards">
            <div class="card-marketing">
                <h3>Card de Exemplo</h3>
                <p>Conteúdo do card</p>
            </div>
        </div>
    </main>

    <script>
        const presets = new VitePresets();
        presets.applyPreset(document.body, 'dashboard');
    </script>
</body>
</html>
```

### Landing Page

```html
<!DOCTYPE html>
<html>
<head>
    <script src="theme-loader.js"></script>
    <script src="vite-presets.js"></script>
</head>
<body>
    <section class="hero-section">
        <div class="container-center">
            <h1 class="hero-title text-marketing-gradient">
                Título Incrível
            </h1>
            <button class="btn-marketing-primary">
                Começar Agora
            </button>
        </div>
    </section>

    <script>
        const presets = new VitePresets();
        presets.applyPreset(document.body, 'landingpage');
    </script>
</body>
</html>
```

## 🔧 Configuração Avançada

### Modificar Posicionamento via Config

```javascript
// Menu dock (bottom-fixed)
const dockConfig = config.Position.Forge('dock-menu');

// Sidebar lateral
const sidebarConfig = config.Position.Forge('side-panel');

// Card flutuante
const floatingConfig = config.Position.Forge('floating-card');

// Posicionamento customizado
const customConfig = config.Position.Forge(['absolute', 'top', 'right']);
```

### Sistema de Z-Index

```javascript
const zIndex = {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1050,
    tooltip: 1070
};
```

## 📂 Estrutura do Projeto

```
vite-presets/
├── src/
│   ├── config/          # Sistema de configuração
│   ├── presets/         # Presets de aplicações
│   ├── pages/           # Páginas pré-configuradas
│   ├── types.ts         # Tipos TypeScript
│   └── index.ts         # Exportações principais
├── examples/            # Exemplos de uso
├── dist/                # Build output
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Classes CSS Disponíveis

### Botões
- `.btn-marketing-primary` - Botão verde gradiente
- `.btn-marketing-secondary` - Botão outline

### Cards
- `.card-marketing` - Card com tema dark
- `.card-marketing-hover` - Card com animação

### Texto
- `.text-marketing-gradient` - Texto com gradiente
- `.hero-title` - Título grande monospace
- `.section-title` - Título de seção

### Layout
- `.container-center` - Container centralizado
- `.grid-cards` - Grid responsivo de cards
- `.flex-center` - Flexbox centralizado

## 🚀 Desenvolvimento

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Type checking
npm run type-check
```

## 📋 TODO / Roadmap

- [ ] Suporte a React Components pré-construídos
- [ ] Mais presets (Admin, Blog, E-commerce)
- [ ] Sistema de temas customizáveis
- [ ] Integração com CSS-in-JS
- [ ] Storybook para componentes
- [ ] Testes automatizados

## 📄 Licença

MIT - Veja o arquivo LICENSE para detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Abra uma issue ou PR.

---

**Feito com ❤️ para a comunidade de desenvolvimento**
