import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

import { IoIosAlbums } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";


import { AnimatePresence, motion } from "framer-motion";
const sidebarData = [
    { path: "/administrador/interfaz/banner", name: "Banner", icon: <MdPhotoLibrary  /> },
    { path: "/administrador/interfaz/insertarAlbum", name: "Album", icon: <IoIosAlbums   /> },
    { path: "/", name: "Logout", icon: <RiLogoutBoxLine /> },
];

export const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="sidebar-container">
            <motion.div
                animate={{
                    minWidth: isOpen ? "250px" : "60px",
                    transition: { duration: 0.3 },
                }}
                className="sidebar"
                style={{ marginLeft: "0px" }}
            >
                <div className="sidebar-header" onClick={toggleSidebar}>
                    <FaBars />
                </div>
                <div className="sidebar-content">
                    <AnimatePresence>
                        {sidebarData.map((route, index) => (
                            <NavLink
                                key={index}
                                to={route.path}
                                className={(navData) => (navData.isActive ? "active" : "")}
                                onClick={() => console.log('Navegando a:', route.path)}
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="sidebar-item"
                                >
                                    <div className="icon text-warning">{route.icon}</div>
                                    {isOpen && <span className="link-text text-light fw-bold">{route.name}</span>}
                                </motion.div>
                            </NavLink>

                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>
            <main
                className="p-0 h-100"
            >
                {children}
            </main>
            <Outlet />
        </div>
    );
};
