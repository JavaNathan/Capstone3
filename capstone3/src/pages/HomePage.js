import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Menu from '../components/Menu';

function HomePage() {
    return (
        <>
            <Nav/>
            <Header/>
            <Menu/>
            <Testimonials/>
            <About/>
            <Footer/>
        </>
    );
}

export default HomePage;