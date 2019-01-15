import React, { Component } from 'react';
import Header from './components/Header';
import Activity from './components/Activity';
import './App.css';

import {Activities} from './testData'; 
import ActivityBrowseWrapper from './components/ActivityBrowseWrapper';

class App extends Component {
  render() {
    return (
      <div id="app">
      <Header/>
      <section className='home-page'>
      <ActivityBrowseWrapper>
      {Activities.map((v,i)=>{
        return(
        <Activity key={`active_${i}`} data={v}/>
        );
      })}
      </ActivityBrowseWrapper>
      </section>
      </div>
    );
  }
}

export default App;
