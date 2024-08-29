import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home }  from "./pages/Home"
import { Products }  from "./pages/Products"
import { Questions }  from "./pages/Questions"
import { Contact }  from "./pages/Contact"
import { NotFound404 }  from "./pages/NotFound404"
import { TestDemo } from './pages/TestDemo'; 

import { Notifications } from '@mantine/notifications';
import { AffixToTop } from './components/AffixToTop';

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestDemo />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
      <AffixToTop />
    </MantineProvider>
  )
}

export default App