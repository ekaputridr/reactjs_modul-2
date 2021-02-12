import React from 'react';
//import Utama from './components/utama';
import MenuExampleSecondaryPointing from './hoc/navbar';
import Footer from './hoc/footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <p><MenuExampleSecondaryPointing/></p>
        <p><Footer/></p>
      </div>
    );
  }
}

export default App;