// Tipos TypeScript para Vite Presets
export interface PositionPreset {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: string;
  transform?: string;
  width?: string;
  height?: string;
}

export interface LayoutPreset {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  gridTemplateColumns?: string;
  padding?: string;
  margin?: string;
  maxWidth?: string;
  maxHeight?: string;
  width?: string;
  height?: string;
}

export interface ColorPreset {
  background?: string;
  color?: string;
  border?: string;
  boxShadow?: string;
  borderRadius?: string;
}

export interface TypographyPreset {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string;
  textAlign?: string;
  textTransform?: string;
  color?: string;
}

export interface ComponentPreset {
  base?: string;
  hover?: string;
  active?: string;
  focus?: string;
  disabled?: string;
}

export interface ThemePreset {
  colors: Record<string, string>;
  typography: Record<string, TypographyPreset>;
  spacing: Record<string, string>;
  shadows?: Record<string, string>;
  borderRadius?: Record<string, string>;
}

export interface LayoutPreset {
  container?: string;
  header?: {
    height: string;
    position: 'fixed' | 'sticky' | 'relative';
    background?: string;
  };
  sidebar?: {
    width: string;
    position: 'fixed' | 'absolute';
    background?: string;
    collapsible?: boolean;
  };
  main?: {
    padding: string;
    marginLeft?: string;
    marginTop?: string;
  };
  footer?: {
    height: string;
    background?: string;
  };
}

export interface HeroSectionPreset {
  height: string;
  background: string;
  centered?: boolean;
  overlay?: boolean;
}

export interface LandingPagePreset {
  layout: {
    header: {
      height: string;
      position: 'fixed' | 'relative';
      transparent?: boolean;
    };
    hero: HeroSectionPreset;
    sections: {
      padding: string;
      maxWidth: string;
    };
  };
  theme: ThemePreset;
  components: Record<string, string>;
}

export interface DashboardPreset {
  layout: {
    header: {
      height: string;
      position: 'fixed' | 'sticky';
      background?: string;
    };
    sidebar: {
      width: string;
      position: 'fixed' | 'absolute';
      background?: string;
      collapsible?: boolean;
    };
    main: {
      padding: string;
      marginLeft: string;
      marginTop?: string;
    };
    footer?: {
      height: string;
      background?: string;
    };
  };
  theme: ThemePreset;
  components: Record<string, string>;
}

export interface DocumentationPreset {
  layout: {
    header: {
      height: string;
      position: 'fixed' | 'sticky';
    };
    sidebar: {
      width: string;
      position: 'fixed';
      background?: string;
      searchable?: boolean;
    };
    content: {
      maxWidth: string;
      padding: string;
      marginLeft: string;
    };
  };
  theme: ThemePreset;
  components: Record<string, string>;
}

export interface PageComponent {
  [key: string]: any;
}

export interface PagePreset {
  layout: string;
  components: Record<string, PageComponent>;
  styles: Record<string, any>;
  scripts?: string[];
}

// Utilitários de tipo
export type PositionPresetName = 'dock-menu' | 'top-bar' | 'side-panel' | 'floating-card' | 'sticky-header' | 'relative' | 'absolute' | 'fixed';

export type LayoutPresetName = 'container-center' | 'flex-center' | 'flex-column' | 'grid-cards' | 'grid-sidebar' | 'full-screen';

export type ColorPresetName = 'primary-bg' | 'secondary-bg' | 'accent-border' | 'gradient-primary' | 'card-default';

export type TypographyPresetName = 'hero-title' | 'section-title' | 'card-title' | 'body-text' | 'caption';

export type PresetType = 'dashboard' | 'landingpage' | 'documentation';

export type PageType = 'calendar' | 'chatbot' | 'upload' | 'login';

// Interfaces para as classes principais
export interface PositionEntity {
  presets: Record<string, PositionPreset>;
  Forge: (config: string | string[]) => PositionPreset;
}

export interface LayoutEntity {
  presets: Record<string, LayoutPreset>;
  Forge: (config: string | Partial<LayoutPreset>) => LayoutPreset;
}

export interface ColorEntity {
  presets: Record<string, ColorPreset>;
  Forge: (config: string | ColorPreset) => ColorPreset;
}

export interface TypographyEntity {
  presets: Record<string, TypographyPreset>;
  Forge: (config: string | TypographyPreset) => TypographyPreset;
}

// Interface principal da configuração
export interface VitePresetsConfig {
  Position: PositionEntity;
  Layout: LayoutEntity;
  Color: ColorEntity;
  Typography: TypographyEntity;
}

// Props para componentes React
export interface PresetComponentProps {
  preset?: string;
  customizations?: Record<string, any>;
  className?: string;
  children?: React.ReactNode;
}

export interface PageGeneratorProps {
  type: PageType;
  preset?: PresetType;
  customizations?: Record<string, any>;
}

// Tipos para eventos
export interface PresetEvents {
  onPresetApplied?: (preset: any) => void;
  onPageGenerated?: (page: string, type: PageType) => void;
  onCustomizationApplied?: (original: any, customized: any) => void;
}
