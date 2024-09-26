import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Redux store
import Board from './components/Board'; // Main task board component
import TaskDetails from './components/TaskDetails'; // Task details component
import Header from './components/Header'; // Dynamic header component

function App() {
  return (
    <Provider store={store}> {/* Redux Provider for state management */}
      <Router> {/* React Router for navigation */}
        <div className="App"> {/* Main app container */}
          <Header /> {/* Dynamic header component */}
          <Routes>
            <Route path="/" element={<Navigate to="/boards" />} /> {/* Redirect to /boards */}
            <Route path="/boards" element={<Board />} /> {/* Task board route */}
            <Route path="/boards/:id" element={<TaskDetails />} /> {/* Task details route */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
