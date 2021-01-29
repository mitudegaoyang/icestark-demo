import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getBasename, renderNotFound } from '@ice/stark-app';
import Home from './routes/Home'
import List from './routes/List'
import Detail from './routes/Detail'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function notFound(props: any) {
  return (
    <>
      {renderNotFound()}
    </>
  )
}

function App(props: any) {
  return (
    <Router basename={getBasename()}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/list" component={List}></Route>
        <Route exact path="/list/detail/:contractId" component={Detail} />
        <Route
          component={notFound}
        />
      </Switch>
    </Router>
  );
}

export default App;
