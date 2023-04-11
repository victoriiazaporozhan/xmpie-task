import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { routes } from './routes.tsx';

import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer />
    </div>
  );
}

export default App;
