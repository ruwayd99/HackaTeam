import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SoloCard({ teamName, teamID, userProfiles, teamIntro }) {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Title>{teamName}</Card.Title>
                <Card.Text><b>Average Seriousness Score:</b> 3</Card.Text>
                <Card.Text><b>Average Experience Score:</b> 5</Card.Text>
                <Card.Text>
                    <b>Team Description:</b><br />
                    {teamIntro}
                </Card.Text>
                <Card.Link href="#">View</Card.Link>
                <Card.Link href="#">Join</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default SoloCard;