import React from 'react';
import { Icon } from "semantic-ui-react";

class Kontak extends React.Component{
    render(){
        return(
            <div align="center">
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <h2>Contact Me</h2>
                <div>
                    <a href='https://www.instagram.com/eka_________p' style={{color: '#549150'}}><Icon link name='instagram' size='large' /></a>
                    <a href='https://twitter.com/shoutovol2' style={{color: '#8a5f80'}}><Icon link name='twitter' size='large'/></a>
                    <a href='https://open.spotify.com/user/5rzygx4hb9e8872q9v6iaci7o' style={{color: '#549150'}}><Icon link name='spotify' size='large' /></a>
                    <a href='www.pinterest.com/shoutovol2' style={{color: '#8a5f80'}}><Icon link name='pinterest' size='large' /></a>
                </div>
            </div>
        )
    }
}

export default Kontak;
