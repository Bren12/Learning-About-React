import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PokemonInfoCard(info) {

    return (
        <Card style={{width: "13.5rem", marginLeft: "7.5%"}}>

            <Card.Header style={{ backgroundColor: 'black', color: '#FFFFFF' }}>
                Aditional Info
            </Card.Header>

            <ListGroup variant="flush">
                <ListGroup.Item> Base Exp: {info.data.base_experience} </ListGroup.Item>
                <ListGroup.Item> Height: {info.data.height} </ListGroup.Item>
                <ListGroup.Item> Weight: {info.data.weight} </ListGroup.Item>
            </ListGroup>

        </Card>
    );
}

export default PokemonInfoCard;