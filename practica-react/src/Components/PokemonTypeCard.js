import PokemonTypeInfo from "./PokemonTypeInfo";
import Card from 'react-bootstrap/Card';

function PokemonTypeCard(type) {

    return (
        <Card style={{width: "13.5rem", marginLeft: "7.5%", marginTop: "4.5%"}}>

            <Card.Header style={{ backgroundColor: 'gray', color: '#FFFFFF' }}>
                Types
            </Card.Header>

            {type.datapokemon.types && type.datapokemon.types.map(poke => (
                <PokemonTypeInfo data={poke} />
            ))}

        </Card>
    );
}

export default PokemonTypeCard;