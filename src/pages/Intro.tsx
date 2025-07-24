import VisionMissionGrid from '../components/VisionMissionGrid';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const Intro = () => {

    return (
        <>
            <Header />
            <Breadcrumb />
            <VisionMissionGrid />
            <Footer />
        </>
    );
};

export default Intro;
