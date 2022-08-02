import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Film from './pages/Film'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <BrowserRouter>
    <Home />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Film/title" element={<Film />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App