import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import MobileComputing from './pages/MobileComputing'
import MC2020 from './pages/MC2020'
import MC2022 from './pages/MC2022'
import MC2024 from './pages/MC2024'
import InternetWebThings from './pages/InternetWebThings'
import IWT2022 from './pages/IWT2022'
import IWT2023 from './pages/IWT2023'
import IWT2024 from './pages/IWT2024'
import SoftwareEngineering from './pages/SoftwareEngineering'
import SE2022 from './pages/SE2022'
import SE2023 from './pages/SE2023'
import SE2024 from './pages/SE2024'
import QuestionDetail from './pages/QuestionDetail'
import IWTQuestionDetail from './pages/IWTQuestionDetail'
import SEQuestionDetail from './pages/SEQuestionDetail'
import Explore from './pages/Explore'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mobile-computing" element={<MobileComputing />} />
        <Route path="/mobile-computing/mc2020" element={<MC2020 />} />
        <Route path="/mobile-computing/mc2022" element={<MC2022 />} />
        <Route path="/mobile-computing/mc2024" element={<MC2024 />} />
        <Route path="/internet-web-things" element={<InternetWebThings />} />
        <Route path="/internet-web-things/iwt2022" element={<IWT2022 />} />
        <Route path="/internet-web-things/iwt2023" element={<IWT2023 />} />
        <Route path="/internet-web-things/iwt2024" element={<IWT2024 />} />
        <Route path="/software-engineering" element={<SoftwareEngineering />} />
        <Route path="/software-engineering/se2022" element={<SE2022 />} />
        <Route path="/software-engineering/se2023" element={<SE2023 />} />
        <Route path="/software-engineering/se2024" element={<SE2024 />} />
        <Route path="/question/:id" element={<QuestionDetail />} />
        <Route path="/iwt-question/:id" element={<IWTQuestionDetail />} />
        <Route path="/se-question/:id" element={<SEQuestionDetail />} />
      </Routes>
    </Layout>
  )
}

export default App

