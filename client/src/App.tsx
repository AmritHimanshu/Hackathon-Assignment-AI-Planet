import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChallengeDetails from './components/ChallengeDetail';
import CreateChallenge from './components/CreateChallenge';
import ChallengesList from './components/ChallengesList';

function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<ChallengesList />} /> 
            <Route path="/create-challenge" element={<CreateChallenge />} />
            <Route path="/challenge-detail" element={<ChallengeDetails />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
