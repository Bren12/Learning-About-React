import PokemonAbilityInfo from "./PokemonAbilityInfo";
import Card from 'react-bootstrap/Card';

function PokemonAbilityCard(ability) {

    return (
        <Card style={{width: "13.5rem"}}>

            <Card.Header style={{ backgroundColor: 'red', color: '#FFFFFF' }}>
                Abilities
            </Card.Header>

            {ability.datapokemon.abilities && ability.datapokemon.abilities.map(poke => (
                <PokemonAbilityInfo data={poke} />
            ))}

        </Card>
    );
}

export default PokemonAbilityCard;