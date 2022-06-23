import { Footer } from "./Footer";
import { Navbar } from "./Navbar"
import { TopNav } from "./TopNav"

const Layout = ( {children} ) => {
    return (
        <div className="content">
            <TopNav />
            <Navbar />
            {children}
            <Footer />
        </div>
     );

}

export default Layout