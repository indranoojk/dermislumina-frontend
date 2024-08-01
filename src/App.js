import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Assessment from './components/Assessment';
import Footer from './components/Footer';
import Age from './components/Age';
import Skintype from './components/Skintype';
import Skintone from './components/Skintone';
import Sunprotection from './components/Sunprotection';
import Sleeptime from './components/Sleeptime';
import SkinCareAssessment from './components/SkinCareAssessment';
import Recommendations from './components/Recommendations';
import Remedies from './components/Remedies';
import SkinConcerns from './components/SkinConcerns';
import About from './components/About';
import WithLoading from './components/WithLoading';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import NoteState from './context/NoteState';

function App() {

  return (
    <>

      <NoteState>
        <Router>
          <div className="mb-24">
            <Navbar />
          </div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/remedies' element={<Remedies />} />
            <Route exact path='/skincare' element={<Assessment />} />
            <Route exact path='/age/:selectedAge' element={<Age />} />
            <Route exact path='/skintype' element={<Skintype />} />
            <Route exact path='/skintone' element={<Skintone />} />
            <Route exact path='/sunprotection' element={<Sunprotection />} />
            <Route exact path='/sleeptime' element={<Sleeptime />} />
            <Route exact path='/skincareassessment' element={<SkinCareAssessment />} />
            <Route exact path='/recommendations' element={
              <WithLoading>
                <Recommendations />
              </WithLoading>} 
            />
            <Route exact path='/skinconcerns' element={<SkinConcerns />} />
            <Route exact path='/chatbot' element={<Chatbot />} />
            <Route exact path='/profile' element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
