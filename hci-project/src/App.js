import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Minister from './pages/Minister';
import Leadership from './pages/Leadership';
import Administration from './pages/Administration';
import Information from './pages/Information';
import AppropriateTech from './pages/AppropriateTech';
import ICT from './pages/ICT';
import LNBS from './pages/LNBS';
import LPS from './pages/LPS';
import ScienceAndTech from './pages/ScienceAndTech';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Speeches from './pages/Speeches';
import Legislation from './pages/Legislation';
import Policy from './pages/Policy';
import Tenders from './pages/Tenders';
import Vacancy from './pages/Vacancy';
import Contact from './pages/Contact';
import AboutUS from './pages/AboutUS';
import History from './pages/History';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/home' exact element={<Home />} />
        <Route path='/execMan' exact element={<Minister />} />
        <Route path='/execMan/minister' exact element={<Minister />} />
        <Route path='/execMan/leadership' exact element={<Leadership />} />
        <Route path='/departments' exact element={<Administration />} />
        <Route path='/departments/administration' exact element={<Administration />} />
        <Route path='/departments/ats' exact element={<AppropriateTech />} />
        <Route path='/departments/information' exact element={<Information />} />
        <Route path='/departments/ict' exact element={<ICT />} />
        <Route path='/departments/lnbs' exact element={<LNBS />} />
        <Route path='/departments/lps' exact element={<LPS />} />
        <Route path='/departments/sciAndTec' exact element={<ScienceAndTech />} />
        <Route path='/media' exact element={<News />} />
        <Route path='/media/news' exact element={<News />} />
        <Route path='/media/gallery' exact element={<Gallery />} />
        <Route path='/media/speeches' exact element={<Speeches />} />
        <Route path='/documents' exact element={<Legislation />} />
        <Route path='/documents/legislation' exact element={<Legislation />} />
        <Route path='/documents/policy' exact element={<Policy />} />
        <Route path='/tenders' exact element={<Tenders />} />
        <Route path='/vacancy' exact element={<Vacancy />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/about' exact element={<AboutUS />} />
        <Route path='/about/about' exact element={<AboutUS />} />
        <Route path='/about/history' exact element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
