import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import ListGroup from 'react-bootstrap/ListGroup';

function PokemonTypeInfo(type) {

    return (
        <ListGroup variant="flush">
            <ListGroup.Item>  {capitalizeFirstLetter(type.data.type.name)} </ListGroup.Item> 
        </ListGroup>
    );
}

export default PokemonTypeInfo;