import bruchetta from '../capstone3/src/images/bruchetta.svg';
import greekSalad from '../capstone3/src/images/greek salad.jpg';
import lemonDessert from '../capstone3/src/images/lemon dessert.jpg';

function Menu(){
    return (
        <>
            <div style={{ height: '72px' }} className='menu' id='menu'></div>
            <div
                style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridGap: '10px',
                padding: '0px',
                margin: '0px',
            }}>
                <div className="container" style={{
                    padding: '25px',
                    gridColumn: '3 / span 8',
                }}>
                    <div className="title" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px',
                    }}>
                        <h1 style={{
                            fontSize: '2.5em',
                            fontFamily: 'Markazi Text, sans-serif',
                            margin: '0',
                        }}>
                            This weeks specials!
                        </h1>
                        <button style={{
                            backgroundColor: '#f4ce14',
                            border: 'none',
                            color: 'black',
                            padding: '15px 32px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            margin: '8px 0px',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            fontFamily: 'Karla, sans-serif',
                            fontWeight: 'bold',
                        }}>
                            Online Menu
                        </button>
                    </div>
                    <section className="card" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '40px',
                    }}>
                        <div id="card1" style={{
                            backgroundColor: '#edefee',
                            borderRadius: '8px',
                            width: '256px',
                            height: 'auto',
                        }}>
                            <div>
                                <img src={greekSalad} alt="greek salad" style={{
                                    width: '256px',
                                    height: '192px',
                                    objectFit: 'cover',
                                    borderRadius: '8px 8px 0px 0px',
                                }} />
                            </div>
                            <div style={{
                                flexDirection: 'row',
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0 10px',
                            }}>
                                <p>Greek Salad</p>
                                <p>$12.99</p>
                            </div>
                            <p style={{ padding: '0 10px', }}>
                                The famous greek salad of crispy lettuce, cucumbers, tomatoes, onions, feta cheese,
                                kalamata olives, and pepperoncini peppers.
                            </p>
                            <div style={{
                                flexDirection: 'row',
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0 10px',
                                alignItems: 'center',
                            }}>
                                <p>Order a delivery</p>
                                <img alt="courier" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png?f=webp&amp;w=256" style={{
                                    width: '24px',
                                    height: '24px',
                                    objectFit: 'cover',
                                }} />
                            </div>
                        </div>
                        <div id="card2" style={{
                            backgroundColor: '#edefee',
                            borderRadius: '8px',
                            width: '256px',
                            height: 'auto',
                        }}>
                            
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}