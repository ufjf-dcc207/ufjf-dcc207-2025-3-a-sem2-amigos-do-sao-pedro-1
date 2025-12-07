import './StatBar.css';

interface StatBarProps {
  label: string;
  valor: number;
}

const MAX_STAT_VALOR = 150; 

export function StatBar({ label, valor }: StatBarProps) {
  const largura = (valor / MAX_STAT_VALOR) * 100;

  return (
    <div className="stat-bar-container">
      <span className="stat-label">{label}</span>
      <div className="stat-bar-background">
          <div
            className="stat-bar-fill"
            style={{ width: `${largura}%` }}
          ></div>
      </div>
      <span className="stat-valor">{valor}</span>
    </div>
  );
}