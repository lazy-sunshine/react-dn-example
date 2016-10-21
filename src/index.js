import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import './index.css';

ReactDOM.render(
  <HomePage title="DesignNews" menubar={['UpVotes','Starred']}/>,
  document.getElementById('root')
);
