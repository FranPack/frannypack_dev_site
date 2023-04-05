import { Route, Routes} from 'react-router-dom'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Project from './pages/Project';
import Error404 from './pages/Error404'


function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/projects" element={<Portfolio />}/>
        <Route exact path="/resume" element={<Resume />}/>
        <Route exact path="/projects/:projectslug" element={<Project/>}/>
        <Route exact path="/404" element={<Error404/>}/>
      </Routes>
  );
}

export default App;
