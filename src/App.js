import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        {/* Widget */}
      </div> 
    </div>
  );
}

export default App;
