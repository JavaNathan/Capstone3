import bruchetta from '../images/bruchetta.svg';
import greekSalad from '../images/greek salad.jpg';
import lemonDessert from '../images/lemon dessert.jpg';

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
                            fontFamily: 'Courier New',
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
                            fontFamily: 'Courier New',
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
                                fontFamily: 'Courier New',
                            }}>
                                <p>Greek Salad</p>
                                <p>$12.99</p>
                            </div>
                            <p style={{ padding: '0 10px', fontFamily: 'Courier New'}}>
                                The famous greek salad of crispy lettuce, cucumbers, tomatoes, onions, feta cheese,
                                kalamata olives, and pepperoncini peppers.
                            </p>
                            <div style={{
                                flexDirection: 'row',
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0 10px',
                                alignItems: 'center',
                                fontFamily: 'Courier New',
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
                            <div>
                            <img src={bruchetta} alt="bruchetta" style={{
                                width: '256px',
                                height: '192px',
                                objectFit: 'cover',
                                borderRadius: '8px 8px 0px 0px',
                            }} />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0 10px',
                                fontFamily: 'Courier New',
                            }}>
                                <p>Bruchetta</p>
                                <p>$8.99</p>
                            </div>
                            <p style={{ padding: '0 10px', fontFamily: 'Courier New' }}>
                                Our bruchetta is made with lovely fresh tomatoes, basil, garlic, and olive oil. Served on toasted
                                baguette slices and topped with parmesan cheese. You'll love our bruchetta.
                            </p>
                            <div style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                display: 'flex',
                                padding: '0 10px',
                                alignItems: 'center',
                                fontFamily: 'Courier New'
                            }}>
                                <p>Order a delivery</p>
                                <img alt="courier" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png?f=webp&amp;w=256" style={{
                                    width: '24px',
                                    height: '24px',
                                    objectFit: 'cover',
                                }} />
                            </div>
                        </div>
                        <div id="card3" style={{
                            backgroundColor: '#edefee',
                            borderRadius: '8px',
                            width: '256px',
                            height: 'auto',
                        }}>
                            <div>
                                <img src={lemonDessert} alt="lemon dessert" style={{
                                    width: '256px',
                                    height: '192px',
                                    objectFit: 'cover',
                                    borderRadius: '8px 8px 0px 0px',
                                }} />
                            </div>
                            <div style={{
                                flexDirection: 'row',
                                display: 'flex',
                                padding: '0 10px',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                fontFamily: 'Courier New'
                            }}>
                                <p>Lemon Dessert</p>
                                <p>$5.00</p>
                            </div>
                            <p style={{ padding: '0 10px', fontFamily: 'Courier New', }}>
                                This recipe comes straight from grandma's recipe book. A light and fluffy lemon cake with
                                a lemon glaze. Served with a scoop of vanilla ice cream.
                            </p>
                            <div style={{
                                flexDirection: 'row',
                                padding: '0 10px',
                                justifyContent: 'space-between',
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'Courier New'
                            }}>
                                <p>Order a delivery</p>
                                <img alt="courier" 
                                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png?f=webp&amp;w=256"
                                style={{
                                    objectFit: 'cover',
                                    width: '24px',
                                    height: '24px',
                                }}/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Menu;