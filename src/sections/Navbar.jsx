import React, { useState } from 'react';
import { navLinks } from "../constants/index.js";

const NavItems = () => (
    <ul style={styles.navUl}>
        {navLinks.map(({ id, href, name }) => (
            <li key={id} style={styles.navLi}>
                <a href={href} style={styles.navLink}>
                    {name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header style={styles.navbar}>
            <div style={styles.navContainer}>
                <a href="/" style={styles.logo}>
                    Sai Sushanth
                </a>
                <button
                    onClick={toggleMenu}
                    style={styles.menuButton}
                    aria-label="Toggle menu"
                >
                    <img
                        src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                        alt="toggle"
                        style={styles.menuIcon}
                    />
                </button>
                <nav style={styles.navItemsDesktop}>
                    <NavItems />
                </nav>
            </div>
            {isOpen && (
                <div style={styles.sidebar}>
                    <NavItems />
                </div>
            )}
        </header>
    );
};

export default Navbar;

const styles = {
    navbar: {
        backgroundColor: "#111827",
        color: "#f3f3f3",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 50,
        padding: "1rem 2rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    navContainer: {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        color: "#d1d5db",
        fontSize: "1.25rem",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "color 0.3s ease",
    },
    menuButton: {
        display: "none",
        background: "none",
        border: "none",
        color: "#d1d5db",
        cursor: "pointer",
    },
    menuIcon: {
        width: "1.5rem",
        height: "1.5rem",
    },
    navItemsDesktop: {
        display: "flex",
        gap: "1rem",
    },
    navUl: {
        listStyle: "none",
        display: "flex",
        gap: "1rem",
    },
    navLi: {
        listStyle: "none",
    },
    navLink: {
        fontSize: "1rem",
        color: "#d1d5db",
        textDecoration: "none",
        transition: "color 0.3s ease",
    },
    sidebar: {
        backgroundColor: "#111827",
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};
