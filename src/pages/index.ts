// Sistema de Páginas Pré-configuradas
import { VitePresetsConfig } from '../config';

export interface PageConfig {
  layout: string;
  components: Record<string, any>;
  styles: Record<string, any>;
  scripts?: string[];
}

// Página de Calendário
export const CALENDAR_PAGE: PageConfig = {
  layout: 'dashboard',
  components: {
    header: {
      title: 'Calendário',
      actions: ['add-event', 'filter', 'export']
    },
    sidebar: {
      menu: ['dashboard', 'calendar', 'tasks', 'reports']
    },
    main: {
      calendar: {
        type: 'monthly',
        events: true,
        timeSlots: true
      },
      events: {
        list: true,
        create: true,
        edit: true
      }
    }
  },
  styles: {
    calendar: {
      background: 'var(--background-secondary)',
      border: '1px solid var(--border-primary)',
      borderRadius: '12px'
    },
    event: {
      background: 'var(--primary-color)',
      color: '#000',
      padding: '8px 12px',
      borderRadius: '6px'
    }
  }
};

// Página de Chatbot
export const CHATBOT_PAGE: PageConfig = {
  layout: 'dashboard',
  components: {
    header: {
      title: 'Chatbot IA',
      actions: ['settings', 'analytics', 'export']
    },
    sidebar: {
      menu: ['dashboard', 'chatbot', 'conversations', 'analytics']
    },
    main: {
      chat: {
        messages: true,
        input: true,
        typing: true
      },
      sidebar: {
        conversations: true,
        settings: true
      }
    }
  },
  styles: {
    chat: {
      background: 'var(--background-primary)',
      border: '1px solid var(--border-primary)',
      borderRadius: '12px'
    },
    message: {
      user: {
        background: 'var(--primary-color)',
        color: '#000',
        alignSelf: 'flex-end'
      },
      bot: {
        background: 'var(--background-secondary)',
        color: 'var(--text-primary)',
        alignSelf: 'flex-start'
      }
    }
  }
};

// Página de Upload de Arquivos
export const UPLOAD_PAGE: PageConfig = {
  layout: 'dashboard',
  components: {
    header: {
      title: 'Upload de Arquivos',
      actions: ['settings', 'help']
    },
    sidebar: {
      menu: ['dashboard', 'upload', 'files', 'analytics']
    },
    main: {
      upload: {
        dragDrop: true,
        progress: true,
        preview: true,
        multiple: true
      },
      files: {
        list: true,
        grid: true,
        search: true,
        filter: true
      }
    }
  },
  styles: {
    upload: {
      border: '2px dashed var(--border-primary)',
      borderRadius: '12px',
      padding: '40px',
      textAlign: 'center',
      background: 'var(--background-secondary)',
      transition: 'all 0.3s'
    },
    'upload:hover': {
      borderColor: 'var(--primary-color)',
      background: 'rgba(16, 185, 129, 0.05)'
    }
  }
};

// Página de Login
export const LOGIN_PAGE: PageConfig = {
  layout: 'landingpage',
  components: {
    hero: {
      title: 'Bem-vindo',
      subtitle: 'Acesse sua conta',
      background: 'linear-gradient(135deg, var(--background-primary), var(--background-secondary))'
    },
    form: {
      fields: ['email', 'password'],
      buttons: ['login', 'forgot-password'],
      social: ['google', 'github']
    },
    footer: {
      links: ['privacy', 'terms', 'support']
    }
  },
  styles: {
    form: {
      background: 'var(--background-secondary)',
      border: '1px solid var(--border-primary)',
      borderRadius: '12px',
      padding: '32px',
      maxWidth: '400px',
      margin: '0 auto'
    },
    input: {
      background: 'var(--background-primary)',
      border: '1px solid var(--border-primary)',
      borderRadius: '8px',
      padding: '12px 16px',
      color: 'var(--text-primary)',
      width: '100%'
    },
    button: {
      background: 'var(--primary-color)',
      color: '#000',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 24px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%'
    }
  }
};

// Gerador de HTML para páginas
export class PageGenerator {
  private config: VitePresetsConfig;

  constructor(config: VitePresetsConfig) {
    this.config = config;
  }

  generateCalendarPage(): string {
    const position = this.config.Position.Forge('dock-menu');
    const layout = this.config.Layout.Forge('grid-cards');

    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendário - Dashboard</title>
    <script src="../theme-loader.js"></script>
    <style>
        .calendar-container {
            background: var(--background-secondary);
            border: 1px solid var(--border-primary);
            border-radius: 12px;
            padding: 24px;
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 8px;
        }

        .calendar-day {
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .calendar-day:hover {
            background: var(--primary-color);
            color: #000;
        }

        .calendar-day.today {
            background: var(--primary-color);
            color: #000;
        }

        .calendar-day.has-events {
            position: relative;
        }

        .calendar-day.has-events::after {
            content: '';
            position: absolute;
            bottom: 4px;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 64px;
        background: var(--background-primary);
        border-bottom: 1px solid var(--border-primary);
        z-index: 40;
        display: flex;
        align-items: center;
        padding: 0 24px;
    ">
        <h1 style="color: var(--primary-color); font-family: var(--font-secondary);">
            📅 Calendário
        </h1>
        <div style="margin-left: auto; display: flex; gap: 16px;">
            <button class="btn-marketing-primary">+ Novo Evento</button>
        </div>
    </header>

    <!-- Sidebar -->
    <nav style="
        position: fixed;
        left: 0;
        top: 64px;
        bottom: 0;
        width: 280px;
        background: var(--background-secondary);
        border-right: 1px solid var(--border-primary);
        padding: 24px;
    ">
        <div style="display: flex; flex-direction: column; gap: 16px;">
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                📊 Dashboard
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; background: var(--primary-color); color: #000;">
                📅 Calendário
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                ✅ Tarefas
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                📈 Relatórios
            </a>
        </div>
    </nav>

    <!-- Main Content -->
    <main style="
        margin-left: 280px;
        margin-top: 64px;
        padding: 24px;
        min-height: calc(100vh - 64px);
    ">
        <div class="calendar-container">
            <div class="calendar-header">
                <h2 style="color: var(--text-primary); font-size: 1.5rem; font-weight: 600;">
                    Outubro 2025
                </h2>
                <div style="display: flex; gap: 8px;">
                    <button style="padding: 8px 12px; background: var(--background-primary); border: 1px solid var(--border-primary); border-radius: 6px; color: var(--text-primary); cursor: pointer;">‹</button>
                    <button style="padding: 8px 12px; background: var(--background-primary); border: 1px solid var(--border-primary); border-radius: 6px; color: var(--text-primary); cursor: pointer;">›</button>
                </div>
            </div>

            <div class="calendar-grid">
                <!-- Dias da semana -->
                <div style="color: var(--text-muted); font-weight: 600; padding: 12px; text-align: center;">Dom</div>
                <div style="color: var(--text-muted); font-weight: 600; padding: 12px; text-align: center;">Seg</div>
                <div style="color: var(--text-muted); font-weight: 600; padding: 12px; text-align: center;">Ter</div>
                <div style="color: var(--text-muted); font-weight: 600; padding: 12px; text-align: center;">Qua</div>
                <div style="color: var(--text-muted); font-weight: 600; padding: 12px; text-align: center;">Qui</div>
                <div style="color: var(--text-muted); font-weight: 600; padding: 12px; text-align: center;">Sex</div>
                <div style="color: var(--text-muted); font-weight: 600; padding: 12px; text-align: center;">Sáb</div>

                <!-- Dias do mês -->
                ${Array.from({ length: 35 }, (_, i) => {
                    const day = i - 3; // Ajuste para começar no dia certo
                    const isToday = day === 30; // Exemplo: dia 30 é hoje
                    const hasEvents = [5, 12, 18, 25].includes(day); // Dias com eventos

                    return `
                        <div class="calendar-day ${isToday ? 'today' : ''} ${hasEvents ? 'has-events' : ''}" ${day > 0 && day <= 31 ? `onclick="alert('Dia ${day} clicado')"` : ''}>
                            ${day > 0 && day <= 31 ? day : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    </main>
</body>
</html>`;
  }

  generateChatbotPage(): string {
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot IA - Dashboard</title>
    <script src="../theme-loader.js"></script>
    <style>
        .chat-container {
            height: calc(100vh - 128px);
            display: flex;
            gap: 24px;
        }

        .chat-messages {
            flex: 1;
            background: var(--background-secondary);
            border: 1px solid var(--border-primary);
            border-radius: 12px;
            padding: 24px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .message {
            max-width: 70%;
            padding: 12px 16px;
            border-radius: 12px;
            font-size: 0.9rem;
            line-height: 1.4;
        }

        .message.user {
            align-self: flex-end;
            background: var(--primary-color);
            color: #000;
        }

        .message.bot {
            align-self: flex-start;
            background: var(--background-primary);
            color: var(--text-primary);
            border: 1px solid var(--border-primary);
        }

        .chat-input {
            position: fixed;
            bottom: 0;
            left: 280px;
            right: 0;
            padding: 24px;
            background: var(--background-primary);
            border-top: 1px solid var(--border-primary);
        }

        .chat-input-container {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            gap: 12px;
        }

        .chat-input-field {
            flex: 1;
            background: var(--background-secondary);
            border: 1px solid var(--border-primary);
            border-radius: 24px;
            padding: 12px 20px;
            color: var(--text-primary);
            font-size: 1rem;
        }

        .chat-input-field:focus {
            outline: none;
            border-color: var(--primary-color);
        }

        .conversations-list {
            width: 300px;
            background: var(--background-secondary);
            border: 1px solid var(--border-primary);
            border-radius: 12px;
            padding: 16px;
        }

        .conversation-item {
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 8px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .conversation-item:hover {
            background: var(--primary-color);
            color: #000;
        }

        .conversation-item.active {
            background: var(--primary-color);
            color: #000;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 64px;
        background: var(--background-primary);
        border-bottom: 1px solid var(--border-primary);
        z-index: 40;
        display: flex;
        align-items: center;
        padding: 0 24px;
    ">
        <h1 style="color: var(--primary-color); font-family: var(--font-secondary);">
            🤖 Chatbot IA
        </h1>
        <div style="margin-left: auto; display: flex; gap: 16px;">
            <button class="btn-marketing-primary">Configurações</button>
        </div>
    </header>

    <!-- Sidebar -->
    <nav style="
        position: fixed;
        left: 0;
        top: 64px;
        bottom: 0;
        width: 280px;
        background: var(--background-secondary);
        border-right: 1px solid var(--border-primary);
        padding: 24px;
    ">
        <div style="display: flex; flex-direction: column; gap: 16px;">
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                📊 Dashboard
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; background: var(--primary-color); color: #000;">
                🤖 Chatbot
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                💬 Conversas
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                📈 Analytics
            </a>
        </div>
    </nav>

    <!-- Main Content -->
    <main style="
        margin-left: 280px;
        margin-top: 64px;
        padding: 24px;
    ">
        <div class="chat-container">
            <!-- Conversations Sidebar -->
            <div class="conversations-list">
                <h3 style="color: var(--text-primary); font-weight: 600; margin-bottom: 16px;">Conversas</h3>
                <div class="conversation-item active">
                    <div style="font-weight: 600;">Cliente João</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Há 5 minutos</div>
                </div>
                <div class="conversation-item">
                    <div style="font-weight: 600;">Maria Silva</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Há 12 minutos</div>
                </div>
                <div class="conversation-item">
                    <div style="font-weight: 600;">Pedro Santos</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Há 1 hora</div>
                </div>
            </div>

            <!-- Chat Messages -->
            <div class="chat-messages" id="messages">
                <div class="message bot">
                    Olá! Sou o assistente virtual da Marketing Intelligence Hub. Como posso ajudar você hoje?
                </div>
                <div class="message user">
                    Quero saber mais sobre otimização de campanhas no Google Ads.
                </div>
                <div class="message bot">
                    Excelente pergunta! Posso ajudar você com várias técnicas avançadas de Google Ads:

                    🎯 **Quality Score Optimization** - Alcance QS 9-10/10
                    🤖 **Smart Bidding ML** - Target CPA e ROAS inteligente
                    🎪 **RSA Structure** - 15 headlines x 4 descriptions
                    🎯 **SKAG Strategy** - Single Keyword Ad Groups

                    Qual dessas técnicas você gostaria de explorar primeiro?
                </div>
            </div>
        </div>
    </main>

    <!-- Chat Input -->
    <div class="chat-input">
        <div class="chat-input-container">
            <input type="text" class="chat-input-field" placeholder="Digite sua mensagem..." id="messageInput">
            <button class="btn-marketing-primary" style="border-radius: 50%; width: 48px; height: 48px; padding: 0; display: flex; align-items: center; justify-content: center;" onclick="sendMessage()">
                ➤
            </button>
        </div>
    </div>

    <script>
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const messages = document.getElementById('messages');

            if (input.value.trim()) {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'message user';
                userMessage.textContent = input.value;
                messages.appendChild(userMessage);

                // Clear input
                input.value = '';

                // Simulate bot response
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.className = 'message bot';
                    botMessage.textContent = 'Entendi sua pergunta. Deixe-me pensar na melhor resposta...';
                    messages.appendChild(botMessage);

                    // Scroll to bottom
                    messages.scrollTop = messages.scrollHeight;
                }, 1000);

                // Scroll to bottom
                messages.scrollTop = messages.scrollHeight;
            }
        }

        // Send on Enter
        document.getElementById('messageInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    </script>
</body>
</html>`;
  }

  generateUploadPage(): string {
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload de Arquivos - Dashboard</title>
    <script src="../theme-loader.js"></script>
    <style>
        .upload-zone {
            border: 2px dashed var(--border-primary);
            border-radius: 12px;
            padding: 60px 40px;
            text-align: center;
            background: var(--background-secondary);
            transition: all 0.3s;
            cursor: pointer;
            margin-bottom: 32px;
        }

        .upload-zone:hover,
        .upload-zone.dragover {
            border-color: var(--primary-color);
            background: rgba(16, 185, 129, 0.05);
        }

        .upload-zone.dragover {
            transform: scale(1.02);
        }

        .file-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 16px;
            margin-top: 24px;
        }

        .file-item {
            background: var(--background-secondary);
            border: 1px solid var(--border-primary);
            border-radius: 8px;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .file-icon {
            font-size: 2rem;
        }

        .file-info {
            flex: 1;
        }

        .file-name {
            color: var(--text-primary);
            font-weight: 500;
            margin-bottom: 4px;
        }

        .file-size {
            color: var(--text-muted);
            font-size: 0.8rem;
        }

        .progress-bar {
            width: 100%;
            height: 4px;
            background: var(--background-primary);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 8px;
        }

        .progress-fill {
            height: 100%;
            background: var(--primary-color);
            border-radius: 2px;
            transition: width 0.3s ease;
        }

        .upload-actions {
            display: flex;
            gap: 12px;
            margin-top: 24px;
            justify-content: center;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 64px;
        background: var(--background-primary);
        border-bottom: 1px solid var(--border-primary);
        z-index: 40;
        display: flex;
        align-items: center;
        padding: 0 24px;
    ">
        <h1 style="color: var(--primary-color); font-family: var(--font-secondary);">
            📁 Upload de Arquivos
        </h1>
        <div style="margin-left: auto; display: flex; gap: 16px;">
            <button class="btn-marketing-primary">Configurações</button>
        </div>
    </header>

    <!-- Sidebar -->
    <nav style="
        position: fixed;
        left: 0;
        top: 64px;
        bottom: 0;
        width: 280px;
        background: var(--background-secondary);
        border-right: 1px solid var(--border-primary);
        padding: 24px;
    ">
        <div style="display: flex; flex-direction: column; gap: 16px;">
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                📊 Dashboard
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; background: var(--primary-color); color: #000;">
                📁 Upload
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                📄 Arquivos
            </a>
            <a href="#" style="color: var(--text-primary); padding: 12px; border-radius: 8px; transition: background 0.3s;" onmouseover="this.style.background='var(--primary-color)'; this.style.color='#000'" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)'">
                📈 Analytics
            </a>
        </div>
    </nav>

    <!-- Main Content -->
    <main style="
        margin-left: 280px;
        margin-top: 64px;
        padding: 24px;
        min-height: calc(100vh - 64px);
    ">
        <div style="max-width: 800px; margin: 0 auto;">
            <!-- Upload Zone -->
            <div class="upload-zone" id="uploadZone">
                <div style="font-size: 3rem; margin-bottom: 16px;">📤</div>
                <h3 style="color: var(--text-primary); font-size: 1.5rem; margin-bottom: 8px;">
                    Arraste seus arquivos aqui
                </h3>
                <p style="color: var(--text-muted); margin-bottom: 24px;">
                    ou <span style="color: var(--primary-color); cursor: pointer; text-decoration: underline;" onclick="document.getElementById('fileInput').click()">clique para selecionar</span>
                </p>
                <input type="file" id="fileInput" multiple style="display: none;" onchange="handleFileSelect(event)">
                <div class="upload-actions">
                    <button class="btn-marketing-primary" onclick="document.getElementById('fileInput').click()">
                        Selecionar Arquivos
                    </button>
                </div>
            </div>

            <!-- File List -->
            <div id="fileList" class="file-list">
                <!-- Files will be added here -->
            </div>
        </div>
    </main>

    <script>
        let uploadedFiles = [];

        function handleFileSelect(event) {
            const files = Array.from(event.target.files);
            files.forEach(file => {
                uploadFile(file);
            });
        }

        function uploadFile(file) {
            const fileId = Date.now() + Math.random();
            const fileItem = createFileItem(file, fileId);
            document.getElementById('fileList').appendChild(fileItem);

            // Simulate upload progress
            simulateUpload(fileId);
        }

        function createFileItem(file, fileId) {
            const item = document.createElement('div');
            item.className = 'file-item';
            item.id = \`file-\${fileId}\`;

            const icon = getFileIcon(file.type);
            const size = formatFileSize(file.size);

            item.innerHTML = \`
                <div class="file-icon">\${icon}</div>
                <div class="file-info">
                    <div class="file-name">\${file.name}</div>
                    <div class="file-size">\${size}</div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progress-\${fileId}" style="width: 0%"></div>
                    </div>
                </div>
            \`;

            return item;
        }

        function getFileIcon(type) {
            if (type.startsWith('image/')) return '🖼️';
            if (type.startsWith('video/')) return '🎥';
            if (type.startsWith('audio/')) return '🎵';
            if (type.includes('pdf')) return '📄';
            if (type.includes('zip') || type.includes('rar')) return '📦';
            if (type.includes('text')) return '📝';
            return '📄';
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        function simulateUpload(fileId) {
            const progressBar = document.getElementById(\`progress-\${fileId}\`);
            let progress = 0;

            const interval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                }
                progressBar.style.width = progress + '%';
            }, 200);
        }

        // Drag and drop functionality
        const uploadZone = document.getElementById('uploadZone');

        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.classList.add('dragover');
        });

        uploadZone.addEventListener('dragleave', () => {
            uploadZone.classList.remove('dragover');
        });

        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');

            const files = Array.from(e.dataTransfer.files);
            files.forEach(file => {
                uploadFile(file);
            });
        });

        // Click to upload
        uploadZone.addEventListener('click', () => {
            document.getElementById('fileInput').click();
        });
    </script>
</body>
</html>`;
  }

  generateLoginPage(): string {
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Marketing Intelligence Hub</title>
    <script src="../theme-loader.js"></script>
    <style>
        .login-container {
            min-height: 100vh;
            background: linear-gradient(135deg, var(--background-primary), var(--background-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .login-form {
            background: var(--background-secondary);
            border: 1px solid var(--border-primary);
            border-radius: 12px;
            padding: 40px;
            width: 100%;
            max-width: 400px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .login-header {
            text-align: center;
            margin-bottom: 32px;
        }

        .login-title {
            color: var(--text-primary);
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 8px;
            font-family: var(--font-secondary);
        }

        .login-subtitle {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            color: var(--text-primary);
            font-weight: 500;
            margin-bottom: 8px;
        }

        .form-input {
            width: 100%;
            background: var(--background-primary);
            border: 1px solid var(--border-primary);
            border-radius: 8px;
            padding: 12px 16px;
            color: var(--text-primary);
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        .form-input:focus {
            outline: none;
            border-color: var(--primary-color);
        }

        .login-btn {
            width: 100%;
            background: var(--primary-color);
            color: #000;
            border: none;
            border-radius: 8px;
            padding: 14px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-bottom: 16px;
        }

        .login-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
        }

        .divider {
            text-align: center;
            margin: 24px 0;
            position: relative;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: var(--border-primary);
        }

        .divider span {
            background: var(--background-secondary);
            padding: 0 16px;
            position: relative;
            z-index: 1;
        }

        .social-btn {
            width: 100%;
            background: var(--background-primary);
            border: 1px solid var(--border-primary);
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 12px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            color: var(--text-primary);
        }

        .social-btn:hover {
            border-color: var(--primary-color);
            transform: translateY(-1px);
        }

        .forgot-link {
            text-align: center;
            margin-top: 16px;
        }

        .forgot-link a {
            color: var(--primary-color);
            text-decoration: none;
            font-size: 0.9rem;
        }

        .forgot-link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-form">
            <div class="login-header">
                <h1 class="login-title">🚀 Marketing Hub</h1>
                <p class="login-subtitle">Acesse sua conta para continuar</p>
            </div>

            <form id="loginForm">
                <div class="form-group">
                    <label class="form-label" for="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        class="form-input"
                        placeholder="seu@email.com"
                        required
                    >
                </div>

                <div class="form-group">
                    <label class="form-label" for="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        class="form-input"
                        placeholder="••••••••"
                        required
                    >
                </div>

                <button type="submit" class="login-btn">
                    Entrar
                </button>
            </form>

            <div class="forgot-link">
                <a href="#" onclick="alert('Funcionalidade em desenvolvimento')">Esqueceu sua senha?</a>
            </div>

            <div class="divider">
                <span>ou continue com</span>
            </div>

            <button class="social-btn" onclick="alert('Login com Google - Em desenvolvimento')">
                <span>🌐</span>
                Google
            </button>

            <button class="social-btn" onclick="alert('Login com GitHub - Em desenvolvimento')">
                <span>⚫</span>
                GitHub
            </button>
        </div>
    </div>

    <script>
        // Theme initialization
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Login page loaded with Marketing Intelligence Theme');
        });

        // Form handling
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simulate login
            if (email && password) {
                // Show loading state
                const btn = document.querySelector('.login-btn');
                const originalText = btn.textContent;
                btn.textContent = 'Entrando...';
                btn.disabled = true;

                // Simulate API call
                setTimeout(() => {
                    alert('Login realizado com sucesso! Redirecionando...');
                    // In a real app, you would redirect to dashboard
                    // window.location.href = '/dashboard';
                }, 1500);
            }
        });

        // Add some interactive effects
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });

            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    </script>
</body>
</html>`;
  }
}
