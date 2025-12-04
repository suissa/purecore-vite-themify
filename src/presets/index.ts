// Sistema de Presets para Vite
import { VitePresetsConfig } from '../config';

export interface PresetConfig {
  layout: {
    header?: any;
    sidebar?: any;
    main?: any;
    footer?: any;
  };
  theme: {
    colors: Record<string, string>;
    typography: Record<string, any>;
    spacing: Record<string, string>;
  };
  components: Record<string, any>;
}

export interface DashboardPreset extends PresetConfig {
  layout: {
    header: {
      height: string;
      position: 'fixed' | 'sticky';
      background: string;
    };
    sidebar: {
      width: string;
      position: 'fixed' | 'absolute';
      background: string;
      collapsible?: boolean;
    };
    main: {
      padding: string;
      marginLeft: string;
    };
  };
}

export interface LandingPagePreset extends PresetConfig {
  layout: {
    header: {
      height: string;
      position: 'fixed' | 'relative';
      transparent?: boolean;
    };
    hero: {
      height: string;
      background: string;
      centered?: boolean;
    };
    sections: {
      padding: string;
      maxWidth: string;
    };
  };
}

export interface DocumentationPreset extends PresetConfig {
  layout: {
    header: {
      height: string;
      position: 'fixed' | 'sticky';
    };
    sidebar: {
      width: string;
      position: 'fixed';
      background: string;
      searchable?: boolean;
    };
    content: {
      maxWidth: string;
      padding: string;
      marginLeft: string;
    };
  };
}

// Presets pré-definidos
export const DASHBOARD_PRESETS = {
  default: {
    layout: {
      header: {
        height: '64px',
        position: 'fixed',
        background: 'var(--background-primary)'
      },
      sidebar: {
        width: '280px',
        position: 'fixed',
        background: 'var(--background-secondary)',
        collapsible: true
      },
      main: {
        padding: '24px',
        marginLeft: '280px',
        marginTop: '64px'
      },
      footer: {
        height: '60px',
        background: 'var(--background-secondary)'
      }
    },
    theme: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-primary)',
        surface: 'var(--background-secondary)'
      },
      typography: {
        fontFamily: 'var(--font-primary)',
        heading: {
          fontFamily: 'var(--font-secondary)',
          fontWeight: 700
        }
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
      }
    },
    components: {
      card: 'card-marketing',
      button: 'btn-marketing-primary',
      input: 'input-marketing'
    }
  } as DashboardPreset,

  compact: {
    layout: {
      header: {
        height: '48px',
        position: 'fixed',
        background: 'var(--background-primary)'
      },
      sidebar: {
        width: '240px',
        position: 'fixed',
        background: 'var(--background-secondary)',
        collapsible: true
      },
      main: {
        padding: '16px',
        marginLeft: '240px',
        marginTop: '48px'
      }
    },
    theme: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-primary)',
        surface: 'var(--background-secondary)'
      },
      typography: {
        fontFamily: 'var(--font-primary)',
        fontSize: '14px'
      },
      spacing: {
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '24px'
      }
    },
    components: {
      card: 'card-marketing-compact',
      button: 'btn-marketing-primary',
      input: 'input-marketing-compact'
    }
  } as DashboardPreset
};

export const LANDING_PAGE_PRESETS = {
  default: {
    layout: {
      header: {
        height: '80px',
        position: 'fixed',
        transparent: true
      },
      hero: {
        height: '100vh',
        background: 'linear-gradient(135deg, var(--background-primary), var(--background-secondary))',
        centered: true
      },
      sections: {
        padding: '80px 20px',
        maxWidth: '1200px'
      }
    },
    theme: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        background: 'var(--background-primary)',
        text: 'var(--text-primary)'
      },
      typography: {
        hero: {
          fontSize: '4.5rem',
          fontWeight: 900,
          fontFamily: 'var(--font-secondary)'
        },
        heading: {
          fontSize: '3.5rem',
          fontWeight: 900,
          fontFamily: 'var(--font-secondary)'
        },
        body: {
          fontSize: '1.125rem',
          lineHeight: 1.6,
          fontFamily: 'var(--font-primary)'
        }
      },
      spacing: {
        section: '80px',
        element: '40px',
        component: '24px'
      }
    },
    components: {
      hero: 'hero-section-marketing',
      card: 'card-marketing',
      button: 'btn-marketing-primary',
      gradient: 'text-marketing-gradient'
    }
  } as LandingPagePreset,

  minimal: {
    layout: {
      header: {
        height: '60px',
        position: 'relative',
        transparent: false
      },
      hero: {
        height: '80vh',
        background: 'var(--background-primary)',
        centered: true
      },
      sections: {
        padding: '60px 20px',
        maxWidth: '800px'
      }
    },
    theme: {
      colors: {
        primary: 'var(--primary-color)',
        background: 'var(--background-primary)',
        text: 'var(--text-primary)'
      },
      typography: {
        hero: {
          fontSize: '3.5rem',
          fontWeight: 700
        },
        heading: {
          fontSize: '2.5rem',
          fontWeight: 700
        }
      },
      spacing: {
        section: '60px',
        element: '30px'
      }
    },
    components: {
      hero: 'hero-section-minimal',
      card: 'card-marketing',
      button: 'btn-marketing-primary'
    }
  } as LandingPagePreset
};

export const DOCUMENTATION_PRESETS = {
  default: {
    layout: {
      header: {
        height: '70px',
        position: 'sticky'
      },
      sidebar: {
        width: '300px',
        position: 'fixed',
        background: 'var(--background-secondary)',
        searchable: true
      },
      content: {
        maxWidth: '800px',
        padding: '40px',
        marginLeft: '300px'
      }
    },
    theme: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-primary)',
        surface: 'var(--background-secondary)',
        border: 'var(--border-primary)'
      },
      typography: {
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '24px'
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '20px'
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '16px'
        },
        body: {
          fontSize: '1rem',
          lineHeight: 1.7,
          marginBottom: '16px'
        },
        code: {
          fontFamily: 'monospace',
          background: 'var(--background-secondary)',
          padding: '2px 6px',
          borderRadius: '4px'
        }
      },
      spacing: {
        content: '40px',
        paragraph: '16px',
        heading: '24px'
      }
    },
    components: {
      nav: 'doc-navigation',
      content: 'doc-content',
      code: 'doc-code-block',
      search: 'doc-search'
    }
  } as DocumentationPreset
};

// Classe principal para gerenciar presets
export class PresetManager {
  private config: VitePresetsConfig;

  constructor(config: VitePresetsConfig) {
    this.config = config;
  }

  getDashboardPreset(name: keyof typeof DASHBOARD_PRESETS = 'default') {
    return DASHBOARD_PRESETS[name];
  }

  getLandingPagePreset(name: keyof typeof LANDING_PAGE_PRESETS = 'default') {
    return LANDING_PAGE_PRESETS[name];
  }

  getDocumentationPreset(name: keyof typeof DOCUMENTATION_PRESETS = 'default') {
    return DOCUMENTATION_PRESETS[name];
  }

  // Método para customizar preset
  customizePreset<T extends PresetConfig>(
    basePreset: T,
    customizations: Partial<T>
  ): T {
    return {
      ...basePreset,
      ...customizations,
      layout: {
        ...basePreset.layout,
        ...customizations.layout
      },
      theme: {
        ...basePreset.theme,
        ...customizations.theme
      },
      components: {
        ...basePreset.components,
        ...customizations.components
      }
    };
  }
}
