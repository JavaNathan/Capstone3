import headShot1 from '../images/headshot1.png';
import headShot2 from '../images/headshot2.png';
import headShot3 from '../images/headshot3.png';
import headShot4 from '../images/headshot4.png';

function Testimonials(){
    const starIcon = 'https://cdn-icons-png.flaticon.com/512/2107/2107957.png';
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(<img key={i} src={starIcon} alt="star" style={{
          width: '16px',
          height: '16px',
          objectFit: 'cover',
        }} />);
    }
    
    return (
        <>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridGap: '10px',
                padding: '0px',
                backgroundColor: '#fbdabb',
                margin: '100px 0 0 0'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gridColumn: '3 / span 8',
                    justifyContent: 'center',
                    padding: '25px',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <h1 style = {{fontFamily: 'Courier New'}}>Reviews From Happy Customers!</h1>
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
                            width: '192px',
                            height: 'auto',
                            padding: '10px',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                            }}>
                                <div style={{
                                    margin: '0 15px 0 0',
                                }}>
                                    {stars}
                                </div>
                                <p style={{fontFamily: 'Courier New'}}>5.0</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                                gap: '20px',
                            }}>
                                <img src={headShot1} alt="avatar" style={{
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    objectFit: 'cover',
                                }} />
                                <p style={{fontFamily: 'Courier New'}}>Kevin T.</p>
                            </div>
                            <p style={{fontFamily: 'Courier New'}}>
                                "The food and service at Little Lemon is exceptional. 
                                The lemon chicken is bursting with bright citrus flavors 
                                and the desserts are sublime. Highly recommend!"
                            </p>
                        </div>
                        <div id="card2" style={{
                            backgroundColor: '#edefee',
                            borderRadius: '8px',
                            width: '192px',
                            height: 'auto',
                            padding: '10px',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                            }}>
                                <div style={{
                                    margin: '0 15px 0 0',
                                }}>
                                    {stars}
                                </div>
                                <p style={{fontFamily: 'Courier New'}}>4.8</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                                gap: '20px',
                            }}>
                                <img src={headShot2} alt="avatar" style={{
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    objectFit: 'cover',
                                }} />
                                <p style={{fontFamily: 'Courier New'}}>Mary S.</p>
                            </div>
                            <p style={{fontFamily: 'Courier New'}}>
                                "From the cozy atmosphere to the innovative menu, 
                                Little Lemon is my absolute favorite restaurant in town. 
                                I can't wait to go back and try it again!"
                            </p>
                        </div>
                        <div id="card3" style={{
                            backgroundColor: '#edefee',
                            borderRadius: '8px',
                            width: '192px',
                            height: 'auto',
                            padding: '10px',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                            }}>
                                <div style={{
                                    margin: '0 15px 0 0',
                                }}>
                                    {stars.slice(0, 3)}
                                </div>
                                <p style={{fontFamily: 'Courier New'}}>3</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                                gap: '20px',
                            }}>
                                <img src={headShot3} alt="avatar" style={{
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    objectFit: 'cover',
                                }} />
                                <p style={{fontFamily: 'Courier New'}}>Jason T.</p>
                            </div>
                            <p style={{fontFamily: 'Courier New'}}>
                                "While the staff were friendly, I found some dishes to be lacking in flavor 
                                and overpriced. The lemon tart, however, was a standout. 
                                Overall experience was just okay."
                            </p>
                        </div>
                        <div id="card4" style={{
                            backgroundColor: '#edefee',
                            borderRadius: '8px',
                            width: '192px',
                            height: 'auto',
                            padding: '10px',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                            }}>
                                <div style={{
                                    margin: '0 15px 0 0',
                                }}>
                                    {stars}
                                </div>
                                <p style={{fontFamily: 'Courier New'}}>4.5</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                                gap: '20px',
                            }}>
                                <img src={headShot4} alt="avatar" style={{
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    objectFit: 'cover',
                                }} />
                                <p style={{fontFamily: 'Courier New'}}>Marina L.</p>
                            </div>
                            <p style={{fontFamily: 'Courier New'}}>
                                "I've never had such incredible lemon-infused food! Everything on the menu at Little Lemon 
                                is creative, fresh and full of zesty lemon flavor. A new favorite!"
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Testimonials;