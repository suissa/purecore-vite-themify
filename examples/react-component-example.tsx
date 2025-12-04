// Exemplo de componente React usando Vite Presets
import React, { useEffect, useState } from 'react';
import { VitePresets, DashboardPreset, PositionPreset } from 'vite-presets';

interface DashboardProps {
  preset?: 'default' | 'compact';
  customizations?: Partial<DashboardPreset>;
}

const Dashboard: React.FC<DashboardProps> = ({
  preset = 'default',
  customizations = {}
}) => {
  const [presets, setPresets] = useState<VitePresets | null>(null);
  const [dashboardPreset, setDashboardPreset] = useState<DashboardPreset | null>(null);

  useEffect(() => {
    const vitePresets = new VitePresets();
    const basePreset = vitePresets.presets.getDashboardPreset(preset);
    const customizedPreset = vitePresets.presets.customizePreset(basePreset, customizations);

    setPresets(vitePresets);
    setDashboardPreset(customizedPreset);

    // Aplicar preset ao body
    vitePresets.applyPreset(document.body, 'dashboard', preset);
  }, [preset, customizations]);

  if (!dashboardPreset) {
    return <div>Loading...</div>;
  }

  // Exemplo de uso do Position.Forge
  const sidebarPosition: PositionPreset = presets?.config.Position.Forge('side-panel') || {};
  const headerPosition: PositionPreset = presets?.config.Position.Forge('top-bar') || {};

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <header
        className="dashboard-header"
        style={{
          position: headerPosition.position as any,
          top: headerPosition.top,
          left: headerPosition.left,
          right: headerPosition.right,
          height: dashboardPreset.layout.header?.height,
          background: dashboardPreset.layout.header?.background,
          zIndex: headerPosition.zIndex
        }}
      >
        <div className="header-content">
          <h1
            style={{
              color: dashboardPreset.theme.colors.primary,
              fontFamily: dashboardPreset.theme.typography.fontFamily
            }}
          >
            📊 Dashboard {preset === 'compact' ? 'Compacto' : 'Padrão'}
          </h1>

          <nav className="header-nav">
            <button className={dashboardPreset.components.button}>
              ⚙️ Configurações
            </button>
            <button className={dashboardPreset.components.button}>
              👤 Perfil
            </button>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className="dashboard-sidebar"
        style={{
          position: sidebarPosition.position as any,
          top: sidebarPosition.top,
          left: sidebarPosition.left,
          width: dashboardPreset.layout.sidebar?.width,
          background: dashboardPreset.layout.sidebar?.background,
          zIndex: sidebarPosition.zIndex
        }}
      >
        <nav className="sidebar-nav">
          <div className="sidebar-item active">
            📊 Dashboard
          </div>
          <div className="sidebar-item">
            📅 Calendário
          </div>
          <div className="sidebar-item">
            ✅ Tarefas
          </div>
          <div className="sidebar-item">
            📈 Relatórios
          </div>
          <div className="sidebar-item">
            👥 Usuários
          </div>
          <div className="sidebar-item">
            ⚙️ Configurações
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="dashboard-main"
        style={{
          marginLeft: dashboardPreset.layout.main?.marginLeft,
          marginTop: dashboardPreset.layout.main?.marginTop,
          padding: dashboardPreset.layout.main?.padding
        }}
      >
        <div className="main-content">
          <div className="content-header">
            <h2
              style={{
                fontFamily: dashboardPreset.theme.typography.heading?.fontFamily,
                fontSize: dashboardPreset.theme.typography.heading?.fontSize,
                fontWeight: dashboardPreset.theme.typography.heading?.fontWeight
              }}
            >
              Visão Geral
            </h2>
            <p style={{ color: dashboardPreset.theme.colors.text }}>
              Bem-vindo ao seu dashboard personalizado
            </p>
          </div>

          {/* Stats Grid */}
          <div
            className="stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: dashboardPreset.theme.spacing.md
            }}
          >
            <div className={dashboardPreset.components.card}>
              <div className="stat-icon">📈</div>
              <div className="stat-content">
                <h3 className="stat-value">R$ 45.231</h3>
                <p className="stat-label">Receita Total</p>
              </div>
            </div>

            <div className={dashboardPreset.components.card}>
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3 className="stat-value">1.234</h3>
                <p className="stat-label">Usuários Ativos</p>
              </div>
            </div>

            <div className={dashboardPreset.components.card}>
              <div className="stat-icon">📦</div>
              <div className="stat-content">
                <h3 className="stat-value">89</h3>
                <p className="stat-label">Pedidos Hoje</p>
              </div>
            </div>

            <div className={dashboardPreset.components.card}>
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <h3 className="stat-value">4.8</h3>
                <p className="stat-label">Avaliação Média</p>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div
            className="charts-section"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: dashboardPreset.theme.spacing.lg,
              marginTop: dashboardPreset.theme.spacing.xl
            }}
          >
            <div className={dashboardPreset.components.card}>
              <h3 style={{ marginBottom: dashboardPreset.theme.spacing.md }}>
                Vendas por Mês
              </h3>
              <div
                className="chart-placeholder"
                style={{
                  height: '200px',
                  background: `linear-gradient(135deg, ${dashboardPreset.theme.colors.surface}, ${dashboardPreset.theme.colors.background})`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: dashboardPreset.theme.colors.text
                }}
              >
                📊 Gráfico de Vendas
              </div>
            </div>

            <div className={dashboardPreset.components.card}>
              <h3 style={{ marginBottom: dashboardPreset.theme.spacing.md }}>
                Usuários por Canal
              </h3>
              <div
                className="chart-placeholder"
                style={{
                  height: '200px',
                  background: `linear-gradient(135deg, ${dashboardPreset.theme.colors.surface}, ${dashboardPreset.theme.colors.background})`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: dashboardPreset.theme.colors.text
                }}
              >
                📈 Gráfico de Usuários
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Exemplo de uso do componente
const App: React.FC = () => {
  return (
    <div>
      <Dashboard preset="default" />

      {/* Ou com customizações */}
      <Dashboard
        preset="compact"
        customizations={{
          layout: {
            sidebar: {
              width: '300px',
              background: '#1a1a1a'
            }
          },
          theme: {
            colors: {
              primary: '#ff6b6b'
            }
          }
        }}
      />
    </div>
  );
};

export default Dashboard;
export { Dashboard as DashboardComponent };
