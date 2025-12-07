import type { ReactNode } from 'react'; 
import './DashboardColumn.css';

interface ColumnProps {
  titulo: string;
  gridType: 'pc' | 'time';
  children: ReactNode;
}

export function DashboardColumn({ titulo, gridType, children }: ColumnProps) {
  return (
    <section className="dashboard-column">
      <h2 className="column-titulo">{titulo}</h2>
      <div className={gridType}>
        {children}
      </div>
    </section>
  );
}