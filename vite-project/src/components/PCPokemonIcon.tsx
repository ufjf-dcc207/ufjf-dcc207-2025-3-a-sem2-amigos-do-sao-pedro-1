import './PCPokemonIcon.css';

interface PCIconProps {
  instanceId: number;
  imagemUrl: string;
  nome: string;
}

export function PCPokemonIcon({ instanceId, imagemUrl, nome }: PCIconProps) {
  function handleDragStart(e: React.DragEvent) {
    e.dataTransfer.setData('text/plain', instanceId.toString());
  }

  return (
    <div 
      className="pc-icon-container"
      draggable={true}
      onDragStart={handleDragStart}
    >
      <img src={imagemUrl} alt={nome} title={nome} />
    </div>
  );
}