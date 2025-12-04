// Sistema de Configuração com Proxy para Vite Presets
export interface PositionConfig {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: string;
}

export interface PositionEntity {
  presets: Record<string, PositionConfig>;
  Forge: (config: string | string[]) => PositionConfig;
}

const createPositionEntity = (): PositionEntity => {
  const entity = {
    presets: {
      'dock-menu': {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '50'
      },
      'top-bar': {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '40'
      },
      'side-panel': {
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        width: '320px',
        zIndex: '30'
      },
      'floating-card': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '20'
      },
      'sticky-header': {
        position: 'sticky',
        top: '0',
        zIndex: '10'
      },
      'relative': {
        position: 'relative'
      },
      'absolute': {
        position: 'absolute'
      },
      'fixed': {
        position: 'fixed'
      }
    },

    Forge(config: string | string[]): PositionConfig {
      if (typeof config === 'string') {
        // Busca preset
        const preset = entity.presets[config];
        if (preset) {
          return { ...preset };
        }
        // Fallback para position simples
        return { position: config };
      }

      if (Array.isArray(config)) {
        // Monta configuração customizada
        const result: PositionConfig = { position: 'relative' };

        config.forEach(prop => {
          switch (prop) {
            case 'absolute':
              result.position = 'absolute';
              break;
            case 'fixed':
              result.position = 'fixed';
              break;
            case 'sticky':
              result.position = 'sticky';
              break;
            case 'top':
              result.top = '0';
              break;
            case 'right':
              result.right = '0';
              break;
            case 'bottom':
              result.bottom = '0';
              break;
            case 'left':
              result.left = '0';
              break;
            case 'center':
              result.top = '50%';
              result.left = '50%';
              result.transform = 'translate(-50%, -50%)';
              break;
          }
        });

        return result;
      }

      return { position: 'relative' };
    }
  };

  return entity;
};

export interface LayoutConfig {
  container?: string;
  padding?: string;
  margin?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  gridTemplateColumns?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export interface LayoutEntity {
  presets: Record<string, LayoutConfig>;
  Forge: (config: string | Partial<LayoutConfig>) => LayoutConfig;
}

const createLayoutEntity = (): LayoutEntity => {
  const entity = {
    presets: {
      'container-center': {
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '0 20px'
      },
      'flex-center': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      'flex-column': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      },
      'grid-cards': {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      },
      'grid-sidebar': {
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        gap: '24px'
      },
      'full-screen': {
        width: '100vw',
        height: '100vh'
      }
    },

    Forge(config: string | Partial<LayoutConfig>): LayoutConfig {
      if (typeof config === 'string') {
        const preset = entity.presets[config];
        return preset ? { ...preset } : {};
      }

      return { ...config };
    }
  };

  return entity;
};

export interface ColorConfig {
  background?: string;
  color?: string;
  border?: string;
  boxShadow?: string;
}

export interface ColorEntity {
  presets: Record<string, ColorConfig>;
  Forge: (config: string | ColorConfig) => ColorConfig;
}

const createColorEntity = (): ColorEntity => {
  const entity = {
    presets: {
      'primary-bg': {
        background: 'var(--background-primary, #000000)',
        color: 'var(--text-primary, #ffffff)'
      },
      'secondary-bg': {
        background: 'var(--background-secondary, #0f172a)',
        color: 'var(--text-primary, #ffffff)'
      },
      'accent-border': {
        border: '1px solid var(--primary-color, #10b981)',
        background: 'var(--background-secondary, #0f172a)'
      },
      'gradient-primary': {
        background: 'linear-gradient(135deg, var(--primary-color, #10b981), var(--color-primary-dark, #059669))'
      },
      'card-default': {
        background: 'linear-gradient(135deg, var(--background-secondary, #1e293b), var(--secondary-color, #334155))',
        border: '1px solid var(--border-primary, #334155)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }
    },

    Forge(config: string | ColorConfig): ColorConfig {
      if (typeof config === 'string') {
        const preset = entity.presets[config];
        return preset ? { ...preset } : {};
      }

      return { ...config };
    }
  };

  return entity;
};

export interface TypographyConfig {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string;
  textAlign?: string;
  textTransform?: string;
}

export interface TypographyEntity {
  presets: Record<string, TypographyConfig>;
  Forge: (config: string | TypographyConfig) => TypographyConfig;
}

const createTypographyEntity = (): TypographyEntity => {
  const entity = {
    presets: {
      'hero-title': {
        fontFamily: 'var(--font-secondary, monospace)',
        fontSize: '4.5rem',
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: '-0.025em'
      },
      'section-title': {
        fontFamily: 'var(--font-secondary, monospace)',
        fontSize: '3.5rem',
        fontWeight: 900,
        lineHeight: 1.1
      },
      'card-title': {
        fontFamily: 'var(--font-secondary, monospace)',
        fontSize: '1.5rem',
        fontWeight: 700
      },
      'body-text': {
        fontFamily: 'var(--font-primary, sans-serif)',
        fontSize: '1rem',
        lineHeight: 1.6
      },
      'caption': {
        fontSize: '0.875rem',
        color: 'var(--text-muted, #94a3b8)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }
    },

    Forge(config: string | TypographyConfig): TypographyConfig {
      if (typeof config === 'string') {
        const preset = entity.presets[config];
        return preset ? { ...preset } : {};
      }

      return { ...config };
    }
  };

  return entity;
};

// Configuração principal usando Proxy
export const createConfig = () => {
  const config = {
    Position: createPositionEntity(),
    Layout: createLayoutEntity(),
    Color: createColorEntity(),
    Typography: createTypographyEntity()
  };

  return new Proxy(config, {
    get(target, prop) {
      if (prop in target) {
        return target[prop as keyof typeof target];
      }
      return undefined;
    }
  });
};

export type VitePresetsConfig = ReturnType<typeof createConfig>;
