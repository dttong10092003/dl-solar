import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Breadcrumb from '../components/Breadcrumb';

const GalleryPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <Gallery />
            <Footer />
        </>
    );
};

export default GalleryPage;
