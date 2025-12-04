// Vite Presets - Sistema de presets visuais para aplicações Vite
import { createConfig, VitePresetsConfig } from './config';
import { PresetManager, DASHBOARD_PRESETS, LANDING_PAGE_PRESETS, DOCUMENTATION_PRESETS } from './presets';
import { PageGenerator, CALENDAR_PAGE, CHATBOT_PAGE, UPLOAD_PAGE, LOGIN_PAGE } from './pages';

// Versão da biblioteca
export const VERSION = '1.0.0';

// Função principal para criar uma nova instância
export function createVitePresets(): VitePresetsConfig {
  return createConfig();
}

// Classe principal da biblioteca
export class VitePresets {
  private config: VitePresetsConfig;
  private presetManager: PresetManager;
  private pageGenerator: PageGenerator;

  constructor() {
    this.config = createConfig();
    this.presetManager = new PresetManager(this.config);
    this.pageGenerator = new PageGenerator(this.config);
  }

  // Getters para acessar as entidades
  get config() {
    return this.config;
  }

  get presets() {
    return this.presetManager;
  }

  get pages() {
    return this.pageGenerator;
  }

  // Método utilitário para gerar página completa
  generatePage(type: 'calendar' | 'chatbot' | 'upload' | 'login'): string {
    switch (type) {
      case 'calendar':
        return this.pageGenerator.generateCalendarPage();
      case 'chatbot':
        return this.pageGenerator.generateChatbotPage();
      case 'upload':
        return this.pageGenerator.generateUploadPage();
      case 'login':
        return this.pageGenerator.generateLoginPage();
      default:
        throw new Error(`Tipo de página não suportado: ${type}`);
    }
  }

  // Método para aplicar preset a um elemento
  applyPreset(element: HTMLElement, presetType: 'dashboard' | 'landingpage' | 'documentation', presetName: string = 'default') {
    let preset;

    switch (presetType) {
      case 'dashboard':
        preset = this.presetManager.getDashboardPreset(presetName as keyof typeof DASHBOARD_PRESETS);
        break;
      case 'landingpage':
        preset = this.presetManager.getLandingPagePreset(presetName as keyof typeof LANDING_PAGE_PRESETS);
        break;
      case 'documentation':
        preset = this.presetManager.getDocumentationPreset(presetName as keyof typeof DOCUMENTATION_PRESETS);
        break;
      default:
        throw new Error(`Tipo de preset não suportado: ${presetType}`);
    }

    // Aplicar estilos baseados no preset
    if (preset.layout) {
      Object.entries(preset.layout).forEach(([key, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([prop, val]) => {
            element.style.setProperty(`--${key}-${prop}`, val as string);
          });
        } else {
          element.style.setProperty(`--${key}`, value as string);
        }
      });
    }

    // Adicionar classes do preset
    if (preset.components) {
      element.classList.add(...Object.values(preset.components));
    }

    return preset;
  }

  // Método para customizar preset existente
  customizePreset<T>(
    basePreset: T,
    customizations: Partial<T>
  ): T {
    return this.presetManager.customizePreset(basePreset, customizations);
  }
}

// Exportações nomeadas
export {
  createConfig,
  PresetManager,
  PageGenerator,
  DASHBOARD_PRESETS,
  LANDING_PAGE_PRESETS,
  DOCUMENTATION_PRESETS,
  CALENDAR_PAGE,
  CHATBOT_PAGE,
  UPLOAD_PAGE,
  LOGIN_PAGE
};

// Tipos
export type {
  VitePresetsConfig
};

// Exportação padrão
export default VitePresets;

// Exemplo de uso:
/*
// Criar instância
const presets = new VitePresets();

// Usar Position.Forge
const dockPosition = presets.config.Position.Forge('dock-menu');
const customPosition = presets.config.Position.Forge(['absolute', 'bottom']);

// Gerar página
const calendarPage = presets.generatePage('calendar');

// Aplicar preset
presets.applyPreset(document.body, 'dashboard', 'default');
*/
