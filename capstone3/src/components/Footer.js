import restaurant from '../images/restaurant.jpg';

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
                <ul id="doormat-nav" style={{
                    flex: '1',
                    padding: '0',
                    listStyle: 'none',
                    margin: '0',
                    textAlign: 'left',
                }}>
                    <li className="title" style={{
                        fontWeight: 'bold',
                        fontSize: '1.2em',
                        fontFamily: 'Times New Roman'
                    }}>
                        Doormat Navigation
                    </li>
                    <li>
                        <a style={{color: 'white', textDecoration: 'none', fontFamily: 'Times New Roman'}} href="/">Home</a>
                    </li>
                    <li>
                        <a style={{color: 'white', textDecoration: 'none', fontFamily: 'Times New Roman'}} href="#about">About</a>
                    </li>
                    <li>
                        <a style={{color: 'white', textDecoration: 'none', fontFamily: 'Times New Roman'}} href="#menu">Menu</a>
                    </li>
                    <li>
                        <a style={{color: 'white', textDecoration: 'none', fontFamily: 'Times New Roman'}} href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a style={{color: 'grey', textDecoration: 'none', fontFamily: 'Times New Roman'}} href="/">Order Online</a> 
                    </li>
                    <li>
                        <a style={{color: 'grey', textDecoration: 'none', fontFamily: 'Times New Roman'}} href="/">Login</a>
                    </li>
                </ul>
                <ul id="contact" style={{
                    padding: '0',
                    flex: '1',
                    listStyle: 'none',
                    margin: '0',
                    textAlign: 'left',
                }}>
                    <li className="title" style={{
                        fontSize: '1.2em',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontFamily: 'Times New Roman'
                    }}>
                        Contact
                    </li>
                    <li style={{fontFamily: 'Times New Roman'}}>
                        123 Sesame Street, Anytown, USA
                    </li>
                    <li style={{fontFamily: 'Times New Roman'}}>555-123-4567</li>
                    <li>
                        <a href="mailto:littlelemon@fakemail.com" style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontFamily: 'Times New Roman',
                        }}>littlelemon@fakemail.com</a>
                    </li>
                </ul>
                <ul id="social-media-links" style={{
                    flex: '1',
                    padding: '0',
                    margin: '0',
                    listStyle: 'none',
                    textAlign: 'left',
                    fontFamily: 'Times New Roman',
                }}>
                    <li className="title" style={{
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                    }}>Social Media Links
                    </li>
                    <li>
                        <a href="www.facebook.com" style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}>Facebook</a>
                    </li>
                    <li>
                        <a href="www.instagram.com" style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}>Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;