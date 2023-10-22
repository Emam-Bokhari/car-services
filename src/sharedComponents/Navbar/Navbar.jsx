import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { BiShoppingBag, BiSearch } from "react-icons/bi"

const Navbar = () => {
    return (
        <div>

            <div className="max-w-screen-2xl  mx-auto px-8 md:px-16 lg:px-32 my-10" >

                <nav className="flex  items-center justify-between" >

                    {/* logo */}
                    <div>
                        <img src={logo} />
                    </div>

                    {/* navlink */}
                    <ul className="flex gap-5 font-semibold text-[#444] text-lg" >
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/services" >Services</Link></li>
                        <li><Link to="/blog" >Blog</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>

                    {/* icon and button */}
                    <div className="flex items-center gap-5" >

                        {/* shopping icon */}
                        <div className="text-2xl" >
                            <BiShoppingBag />
                        </div>

                        {/* search icon */}
                        <div className="text-2xl" >
                            <BiSearch />
                        </div>

                        {/* appointment button */}
                        <div>
                            <button className="border-[1px] border-[#FF3811] rounded-md px-4 py-2 text-[#FF3811] font-semibold text-lg" >Appointment</button>
                        </div>
                    </div>


                </nav>


            </div>
        </div>
    );
};

export default Navbar;