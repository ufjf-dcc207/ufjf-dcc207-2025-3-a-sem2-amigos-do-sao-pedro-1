import type { ReactNode } from 'react'; 
import './DashboardColumn.css';

interface ColumnProps {
  titulo: string;
  gridType: 'pc' | 'time';
  children: ReactNode;
  onMoverPokemon?: (instanceId: number, destino: 'equipe' | 'box') => void;
}

export function DashboardColumn({ titulo, gridType, children, onMoverPokemon }: ColumnProps) {
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const instanceId = Number(e.dataTransfer.getData('text/plain'));
    const destino = gridType === 'time' ? 'equipe' : 'box';
    onMoverPokemon?.(instanceId, destino);
  }

  return (
    <section className="dashboard-column">
      <h2 className="column-titulo">{titulo}</h2>
      <div 
        className={gridType}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {children}
      </div>
    </section>
  );
}