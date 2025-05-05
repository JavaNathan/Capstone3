import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../capstone3/src/pages/HomePage';
import BookingPage from '../capstone3/src/pages/BookingPage';
import LoginPage from '../capstone3/src/pages/LoginPage';
import ConfirmedBooking from '../capstone3/src/components/ConfirmedBooking';
import OrderOnlinePage from '../capstone3/src/pages/OrderOnlinePage';
import '../capstone3/src/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
