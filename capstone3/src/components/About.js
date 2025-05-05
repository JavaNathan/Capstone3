import chefA from '../images/Mario and Adrian A.jpg';
import chefB from '../images/Mario and Adrian B.jpg';

function About()
{
    return (
        <>
          <div style={{ height: '96px' }} className='about' id='about'></div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr', gridGap: '10px',
            padding: '0 20px 20px 20px', margin: '0px 0 120px 0',
          }}>
            <section className="container" style={{display: 'flex', justifyContent: 'top', flexDirection: 'column',
            gridColumn: '3 / span 3', alignItems: 'top', padding: '20px',
            }}>
                <div className="content" style={{textAlign: 'left',}}>
                    <h1 style={{fontSize: '3em', color: '#f4ce14', fontFamily: 'Merkazi Text, sans-serif', margin: '0',

                    }}>Little Lemon</h1>
                    <h3 style={{
                        fontSize: '2em',
                        color: '#ee9972',
                        margin: '0',
                        fontFamily: 'Karla, sans-serif',
                    }}>Chicago</h3>
                    <p style={{fontFamily: 'Karla, sans-serif', color: 'black', fontSize: '1.2em',}}>
                        Little Lemon is owned by Italian brothers: Mario and Adrian, who moved to the United States
                        to pursue their shared dream of owning a restaurant.
                        <br/><br/>
                        To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
                        Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond
                        classic Italian recipes to incorporate additional cuisines from the Mediterranean region.  
                        At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that 
                        makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, 
                        Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.
                    </p>
                </div>
            </section>
            <div style={{
                display: 'flex',
                gridColumn: '7 / span 3',
                margin: '20px 0 -225px 0',
                alignItems: 'top',
                justifyContent: 'top',
            }}>
                <img src={chefB} alt="Chef serving" style={{
                    height: '70%',
                    objectFit: 'cover',
                    width: '90%',
                    borderRadius: '10px',
                    zIndex: '1',
                    margin: '80px 20px 0 0',
                }}/>
                <img src={chefA} alt="Chef serving" style={{objectFit: 'cover', height: '70%', width: '90%', margin: '0 0 0 -200px',
                    borderRadius: '10px',
                }}/>
            </div>
          </div>
        </>
    );
}

export default About;