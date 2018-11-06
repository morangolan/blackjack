import React, { Component } from 'react';

import StartBar from '../containers/start_bar';
import GameBar from '../containers/game_bar';


export default class App extends Component {
  render() {
    return (
	    <div>
	    	<StartBar />
	    	<GameBar />
	    </div>
    );
  }
}
