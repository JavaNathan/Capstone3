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
              onClick={() => {
                window.location.href = '/';
              }}
            />
            <div style={{
                display: 'flex',
                gridColumn: '4 / span 8',
                padding: '10px',
            }}>
                <u1 id="doormat-nav" style={{
                    flex: '1',
                    padding: '0',
                    listStyle: 'none',
                    margin: '0',
                    textAlign: 'left',
                }}>
                    <li className="title" style={{
                        fontWeight: 'bold',
                        fontSize: '1.2em',
                    }}>
                        Doormat Navigation
                    </li>
                    <li>
                        <a style={{color: 'white', textDecoration: 'none'}} href="/">Home</a>
                    </li>
                    <li>
                        <a style={{color: 'white', textDecoration: 'none'}} href="#about">About</a>
                    </li>
                </u1>
            </div>
        </div>
    );
}