import ConfirmedBooking from '../capstone3/src/components/ConfirmedBooking.js';
import { useState, useEffect } from 'react';

function BookingForm(props)
{
    const [time, setTime] = useState('17:00');
    const [date, setDate] = useState('');
    const [occasion, setOccasion] = useState('Birthday');
    const [guests, setGuests] = useState(1);
    const [validationError, setValidationError] = useState('');
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    useEffect(() => {
        props.updateTimes(date);
    }, [date, props]);

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.updateTimes(selectedDate);
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();

        const isValid = validateInputs();

        if (isValid) 
        {
            setBookingConfirmed(true);
        } 
        else 
        {
            console.error('Validation error:', validationError);
        }
    };

    const validateInputs = () => {
        setValidationError('');

        if (!time)
        {
            setValidationError('Please choose a time.');
            return false;
        }

        if (!date)
        {
            setValidationError('Please chooses a date.');
            return false;
        }

        if (!guests || isNaN(guests) || guests < 1 || guests > 10)
        {
            setValidationError('Please enter a valid number of guests (1-10).');
            return false;
        }
        
        if (!occasion)
        {
            setValidationError('Please choose an occasion.');
            return false;
        }
        return true;
    }
}