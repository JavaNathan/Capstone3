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
                </div>
            </div>
        </>
    );
}