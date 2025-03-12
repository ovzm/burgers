import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo/logo.png";
import { Nav } from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.scrollY;

            setIsScrolled(scrollTop > window.innerHeight);

            if (scrollTop > lastScrollTop.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollTop.current = scrollTop; 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Nav className={`${isScrolled ? "white" : "black"} ${isVisible ? "visible" : "hidden"}`}>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" className="cart-icon" />
        </Nav>
    );
}
