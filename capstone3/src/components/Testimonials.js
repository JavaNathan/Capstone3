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
                        <h1>Kind Words From Happy Customers!</h1>
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
                                <p>5.0</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px',
                                gap: '20px',
                            }}>
                                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="avatar" style={{
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    objectFit: 'cover',
                                }} />
                                <p>Kevin T.</p>
                            </div>
                            <p>
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
                                
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}