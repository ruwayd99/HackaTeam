import Card from 'react-bootstrap/Card';

const TeamCard = ({teamName, teamID}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{teamName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{teamID}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">View</Card.Link>
        <Card.Link href="#">Join</Card.Link>
      </Card.Body>
    </div>
  );
}

export default TeamCard;