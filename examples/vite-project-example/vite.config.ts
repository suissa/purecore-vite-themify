import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePresets } from 'vite-presets';

// Criar instância dos presets
const presets = new VitePresets();

// Obter preset de dashboard
const dashboardPreset = presets.presets.getDashboardPreset('default');

// Configuração do Vite com presets aplicados
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          // Variáveis CSS dos presets
          :root {
            --dashboard-sidebar-width: ${dashboardPreset.layout.sidebar?.width};
            --dashboard-header-height: ${dashboardPreset.layout.header?.height};
            --primary-color: ${dashboardPreset.theme.colors.primary};
            --background-primary: ${dashboardPreset.theme.colors.background};
          }
        `
      }
    }
  },
  define: {
    // Disponibilizar presets no código
    __DASHBOARD_PRESET__: JSON.stringify(dashboardPreset),
    __LANDING_PRESET__: JSON.stringify(presets.presets.getLandingPagePreset('default'))
  }
});
