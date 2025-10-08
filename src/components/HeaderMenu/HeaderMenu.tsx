import Image from "next/image";
import logoMenu from "@/assets/logo-papiro-di-laurea.png";

export const HeaderMenu = () => {
    return (        
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    {/* MOBILE */ } 
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a>Papiro di laurea</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Caricature</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Cruciverba</a></li>
                        <li><a>Scherzi</a></li>
                        <li><a>Contatti</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/"><Image src={logoMenu} alt="Papirata" /></a>
            </div>
            {/* DESKTOP */ } 
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">                
                    <li>
                        <details>
                        <summary>Papiro di laurea</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Caricature</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Cruciverba</a></li>
                    <li><a>Scherzi</a></li>
                    <li><a href="/blog/chi-siamo">Contatti</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/crea-papiro-di-laurea" className="btn bg-green-500">Crea papiro</a>
            </div>
        </div>
    );
}