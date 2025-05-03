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
}