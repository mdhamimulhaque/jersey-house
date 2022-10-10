import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from "./components/Home/Home";
import Error from './components/Error/Error';


function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
