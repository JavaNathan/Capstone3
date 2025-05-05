import Nav from '../capstone3/src/components/Nav';
import BookingForm from '../capstone3/src/components/BookingForm';
import { useState, useReducer, useEffect } from 'react';

function BookingPage(props) {
    const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

    function initializeTimes() {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }
    
    function updateTimes(selectedDate) {
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate});
    }

    return (
        <>
            <Nav/>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
            />
        </>
    );
}

const reducer = ( state, action ) => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export default BookingPage;

