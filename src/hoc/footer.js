import React from 'react';
import { Container, Segment, List, Image } from "semantic-ui-react";

class Footer extends React.Component{
    render(){
        return(
            <div align="center">
                <br/><br/><br/><br/><br/><br/>
                <Segment inverted vertical style={{ margin: '4em 0em 0em', padding: '5em 0em' }}>
                    <Container textAlign='center'>
                        <Image centered size='mini' src='/logo.png' />
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>Contact Me</List.Item>
                            <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                            <List.Item as='a' href='#'>Privacy Policy</List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Footer;
