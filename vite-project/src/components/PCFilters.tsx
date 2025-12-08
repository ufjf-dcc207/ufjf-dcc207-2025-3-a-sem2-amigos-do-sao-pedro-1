import type { PokemonType } from '../pokedexData';
import './PCFilters.css';

interface PCFiltersProps {
  filterType: string;
  setFilterType: (tipo: string) => void;

  filterMinHP: number;
  setFilterMinHP: (valor: number) => void;

  filterMinATK: number;
  setFilterMinATK: (valor: number) => void;

  filterMinDEF: number;
  setFilterMinDEF: (valor: number) => void;

  filterMinSpATK: number;
  setFilterMinSpATK: (valor: number) => void;

  filterMinSpDEF: number;
  setFilterMinSpDEF: (valor: number) => void;

  filterMinSpeed: number;
  setFilterMinSpeed: (valor: number) => void;
  
  filterVantagem: string;
  setFilterVantagem: (tipo: string) => void;

  filterFraqueza: string;
  setFilterFraqueza: (tipo: string) => void;

  filterBusca: string;
  setFilterBusca: (texto: string) => void;
  
  limparFiltros: () => void;
}

export function PCFilters({
  filterType,
  setFilterType,
  filterMinHP,
  setFilterMinHP,
  filterMinATK,
  setFilterMinATK,
  filterMinDEF,
  setFilterMinDEF,
  filterMinSpATK,
  setFilterMinSpATK,
  filterMinSpDEF,
  setFilterMinSpDEF,
  filterMinSpeed,
  setFilterMinSpeed,
  filterVantagem,
  setFilterVantagem,
  filterFraqueza,
  setFilterFraqueza,
  filterBusca,
  setFilterBusca,
  limparFiltros
}: PCFiltersProps) {
  
  const tiposDisponiveis: PokemonType[] = [
    'Grama', 'Venenoso', 'Fogo', 'Água', 'Elétrico', 'Inseto', 
    'Terra', 'Pedra', 'Gelo', 'Voador', 'Psíquico', 'Normal', 
    'Dragão', 'Fada', 'Lutador', 'Fantasma'
  ];

  return (
    <div className="pc-filters">
      <h3 className="filters-title">Filtros</h3>
      
      <div className="filters-container">

        <div className="filter-group">
          <label htmlFor="filter-busca">Buscar:</label>
          <input 
            id="filter-busca"
            type="text" 
            placeholder="Nome ou número..."
            value={filterBusca}
            onChange={(e) => setFilterBusca(e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-type">Tipo:</label>
          <select 
            id="filter-type"
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos</option>
            {tiposDisponiveis.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-hp">HP mínimo:</label>
          <input 
            id="filter-hp"
            type="number" 
            min="0" 
            max="200"
            value={filterMinHP}
            onChange={(e) => setFilterMinHP(Number(e.target.value))}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-atk">ATK mínimo:</label>
          <input 
            id="filter-atk"
            type="number" 
            min="0" 
            max="200"
            value={filterMinATK}
            onChange={(e) => setFilterMinATK(Number(e.target.value))}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-def">DEF mínimo:</label>
          <input 
            id="filter-def"
            type="number" 
            min="0" 
            max="200"
            value={filterMinDEF}
            onChange={(e) => setFilterMinDEF(Number(e.target.value))}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-spatk">Sp.ATK mínimo:</label>
          <input 
            id="filter-spatk"
            type="number" 
            min="0" 
            max="200"
            value={filterMinSpATK}
            onChange={(e) => setFilterMinSpATK(Number(e.target.value))}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-spdef">Sp.DEF mínimo:</label>
          <input 
            id="filter-spdef"
            type="number" 
            min="0" 
            max="200"
            value={filterMinSpDEF}
            onChange={(e) => setFilterMinSpDEF(Number(e.target.value))}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-speed">SPEED mínimo:</label>
          <input 
            id="filter-speed"
            type="number" 
            min="0" 
            max="200"
            value={filterMinSpeed}
            onChange={(e) => setFilterMinSpeed(Number(e.target.value))}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filter-vantagem">Vantagem contra:</label>
          <select 
            id="filter-vantagem"
            value={filterVantagem} 
            onChange={(e) => setFilterVantagem(e.target.value)}
            className="filter-select"
          >
            <option value="">Nenhum</option>
            {tiposDisponiveis.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filter-fraqueza">Fraco contra:</label>
          <select 
            id="filter-fraqueza"
            value={filterFraqueza} 
            onChange={(e) => setFilterFraqueza(e.target.value)}
            className="filter-select"
          >
            <option value="">Nenhum</option>
            {tiposDisponiveis.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <button 
          onClick={limparFiltros}
          className="clear-filters-button"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}
