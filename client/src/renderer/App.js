import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Dashboard';
import AppRouter from './Utils/Router';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    document.documentElement.style.width = '100%';
    document.documentElement.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);
  return (
  <AppRouter />
  );
}
