import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Auth} from "./pages/auth/index"
import { ExpenseTracker } from './pages/expense_tracker/index';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<Auth />} />
        <Route path="expense-tracker" element={<ExpenseTracker />} />
      </Routes>
    </Router>
    </div>
  );

}

export default App;
