import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes.tsx';

import './App.css';

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
