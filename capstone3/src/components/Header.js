import headerImg from '../capstone3/src/images/restaurant.jpg';

function Header(){
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridGap: '10px',
            padding: '0 20px 20px 20px',
            backgroundColor: '#495e57',
            margin: '72px 0 120px 0',
        }}>
            <section className="container" style={{
                gridColumn: '3 / span 3',
                display: 'flex',
                alignItems: 'top',
                justifyContent: 'top',
                padding: '20px',
                flexDirection: 'column',
            }}>
                <div className="content" style={{
                    textAlign: 'left',
                }}>
                    <h1 style={{
                        color: '#f4ce14',
                        fontSize: '3em',
                        fontFamily: 'Markazi Text, sans-serif',
                        margin: '0',
                    }}>Little Lemon</h1>
                </div>
            </section>
        </div>
    );
}