import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import HomeScreen from './pages/Home'
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
        <Header/>
          <Routes>
          <Route element={
            <HomeScreen />
            } path="/" />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
