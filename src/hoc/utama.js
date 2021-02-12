import React from 'react';
import {Switch, Route} from "react-router-dom";

import Beranda from '../components/home';
import TentangSaya from '../components/aboutme';
import Karya from '../components/work';
import Kontak from '../components/contact';

const Utama = () => (
    <Switch>
        <Route exact path="/home" component={Beranda}/>
        <Route path="/aboutme" component={TentangSaya}/>
        <Route path="/work" component={Karya}/>
        <Route path="/contact" component={Kontak}/>
    </Switch>
)

export default Utama;