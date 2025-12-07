import './App.css';
import { todosPokemons } from './pokedexData';
import { DashboardColumn } from './components/DashboardColumn';
import { TeamPokemonCard } from './components/TeamPokemonCard';
import { PCPokemonIcon } from './components/PCPokemonIcon';

function App() {
  const equipePokemons = todosPokemons.filter(p => p.selecionado);
  const boxPokemons = todosPokemons.filter(p => !p.selecionado);

  return (
    <div className="dashboard-layout">
      
      <DashboardColumn titulo="PC (Box 1)" gridType="pc">
        {boxPokemons.map(pokemon => (
          <PCPokemonIcon
            key={pokemon.id}
            imagemUrl={pokemon.imagemUrl}
            nome={pokemon.nome}
          />
        ))}
      </DashboardColumn>

      <DashboardColumn titulo="Equipe Atual" gridType="time">
        {equipePokemons.map(pokemon => (
          <TeamPokemonCard 
            key={pokemon.id} 
            id={pokemon.id}
            imagemUrl={pokemon.imagemUrl}
            nome={pokemon.nome}
            numero={pokemon.numero}
            tipos={pokemon.tipos}
            estatisticas={pokemon.estatisticas}
            vantagens={pokemon.vantagens}
            fraquezas={pokemon.fraquezas}
            selecionado={pokemon.selecionado}
          />
        ))}
      </DashboardColumn>

    </div>
  );
}

export default App;