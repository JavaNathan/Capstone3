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

                    }}>
                        
                    </div>
                </div>
            </div>
        </>
    );
}