import React from 'react';
import { Card } from "semantic-ui-react";

class Karya extends React.Component{
    render(){
        return(
            <div>
                <br/><br/><br/><br/><br/><br/>
                <Card.Group centered items>
                    <Card
                    href='https://github.com/ekaputridr'
                    header='Check My Work on GitHub'
                    image='gh.png'
                    />
                    <Card
                    href='https://www.instagram.com/tugasdasel/'
                    header='Check My Work on Instagram'
                    image='ig.png'
                    />
                    <Card
                    href='https://www.instagram.com/onyourd__sel/'
                    header='Check My Art Work on Instagram'
                    image='ig.png'
                    />
                </Card.Group>
            </div>
        )
    }
}

export default Karya;
