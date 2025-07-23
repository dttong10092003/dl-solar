import {
    Header, Banner, AboutMe, Why, InstallationProcess, SolarBenefitsInfographic,
    SolarProductsCatalog, SolarHeroBanner, SolarProjectsShowcase, BlogNewsSection,
    CustomerTestimonials, PartnersSection, Footer
} from "../components/Home";
const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <AboutMe />
            <Why />
            <InstallationProcess />
            <SolarBenefitsInfographic />
            <SolarProductsCatalog />
            <SolarHeroBanner />
            <SolarProjectsShowcase />
            <BlogNewsSection />
            <CustomerTestimonials />
            <PartnersSection />
            <Footer />
        </>
    );
};

export default Home;