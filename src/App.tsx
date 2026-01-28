import { HashRouter, Routes, Route } from 'react-router-dom';
import { GameLayout } from './components/GameLayout';
import { LevelRenderer } from './components/LevelRenderer';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<GameLayout />}>
          <Route index element={<LevelRenderer />} />
          <Route path=":slug/*" element={<LevelRenderer />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
