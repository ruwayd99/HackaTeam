import React from 'react';
import Card from 'react-bootstrap/Card';
import './TeamSection.css'

const TeamSection = ({team1}) => {
  return (
    <div className='TeamPad'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{team1.Name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{team1.ID}</Card.Subtitle>
        <Card.Text>
          {team1.Intro}
        </Card.Text>
        <Card.Link href="#">View</Card.Link>
        <Card.Link href="#">Join</Card.Link>
      </Card.Body>
      </Card>
    </div>
  );
}

export default TeamSection;
