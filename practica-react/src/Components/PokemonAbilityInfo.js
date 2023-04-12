import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import ListGroup from 'react-bootstrap/ListGroup';

function PokemonAbilityInfo(ability) {

    return (
        <ListGroup variant="flush">
            <ListGroup.Item> {capitalizeFirstLetter(ability.data.ability.name)} </ListGroup.Item>
        </ListGroup>
    );
}

export default PokemonAbilityInfo;