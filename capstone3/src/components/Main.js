import { Routs, Route } from 'react-router-dom';
import HomePage from '../capstone3/src/pages/HomePage';
import BookingPage from '../capstone3/src/pages/BookingPage';

function Main(){
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
            </Routes>
        </>
    );
}

export default Main;