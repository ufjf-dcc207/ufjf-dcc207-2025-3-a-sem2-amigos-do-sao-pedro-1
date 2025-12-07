import './TypeBadge.css';

interface TypeBadgeProps {
  tipo: string;
}

export function TypeBadge({ tipo }: TypeBadgeProps) {
  const className = `type-badge ${tipo.toLowerCase()}`;
  
  return (
    <span className={className}>
      {tipo}
    </span>
  );
}