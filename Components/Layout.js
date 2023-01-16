import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TopNav } from "./TopNav";
import { Poziv } from "./Poziv";

const Layout = ( {children} ) => {
    return (
        <div className="content">
            <TopNav />
            <Navbar />
            <Poziv />
            {children}
            <Footer />
        </div>
     );

}

export default Layout