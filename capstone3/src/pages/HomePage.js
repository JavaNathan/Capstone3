import Nav from '../capstone3/src/components/Nav';
import Header from '../capstone3/src/components/Header';
import About from '../capstone3/src/components/About';
import Footer from '../capstone3/src/components/Footer';
import Testimonials from '../capstone3/src/components/Testimonials';
import Menu from '../capstone3/src/components/Menu';

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