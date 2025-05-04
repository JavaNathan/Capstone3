import restaurant from '../capstone3/src/images/restaurant.jpg';

function Footer() {
    return (
        <div style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            display: 'grid',
            backgroundColor: '#333333',
            gridGap: '10px',
            listStyle: 'none',
            color: 'white',
            margin: '0 0 0 0',
            padding: '20px 0 20px 0',
            textAlign: 'center',
        }}>
            <img src={restaurant} alt="logo" style={{
                width: '108px',
                height: '192px',
                cursor: 'pointer',
                objectFit: 'cover',
                gridColumn: '3 / span 1',
            }}
        </div>
    );
}