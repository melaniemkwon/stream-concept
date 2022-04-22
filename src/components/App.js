import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      page 1
      <Link to="/pagetwo">Go to Page Two</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      page 2<button>Click me!</button>
      <Link to="/">Go to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;