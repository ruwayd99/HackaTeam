import React from 'react';
import SoloCard from './Cards/SoloCard.js'
import CardDeck from 'react-bootstrap/CardGroup'

function SoloSection() {
    return (
        <div><h1>Match with other hackers</h1>
            <CardDeck>
                <SoloCard className="SoloCard"
                    teamName="Team Example Name"
                    teamIntro="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                <SoloCard className="SoloCard"
                    teamName="Team Example Name"
                    teamIntro="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
            </CardDeck>

        </div>

    );
}

export default SoloSection;
