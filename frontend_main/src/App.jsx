import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home }  from "./pages/Home"
import { Products }  from "./pages/Products"
import { TestDemo } from './pages/TestDemo'; 


function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/test" element={<TestDemo />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App