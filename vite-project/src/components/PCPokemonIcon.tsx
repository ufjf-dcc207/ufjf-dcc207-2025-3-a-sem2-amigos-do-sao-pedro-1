import './PCPokemonIcon.css';

interface PCIconProps {
  imagemUrl: string;
  nome: string;
}

export function PCPokemonIcon({ imagemUrl, nome }: PCIconProps) {
  return (
    <div className="pc-icon-container">
      <img src={imagemUrl} alt={nome} title={nome} />
    </div>
  );
}