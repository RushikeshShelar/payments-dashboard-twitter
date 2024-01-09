import Company from "./company";
import Routes from "./nav-routes";

const NavTop = () => {
    return ( 
        <div className="min-w-[208px] max-h-screen gap-24px">
            <Company />
            <Routes />
        </div>
    );
}
 
export default NavTop;