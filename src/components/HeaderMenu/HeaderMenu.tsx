import Image from "next/image";
import logoMenu from "@/assets/logo-papiro-di-laurea.png";

export const HeaderMenu = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
            <Image src={logoMenu} alt="Papirata" />
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <details className="bg-orange-500 md:bg-blue-500">
                <summary>Papiro di laurea</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            <li><a>Caricature</a></li>
            <li><a>Cruciverba</a></li>
            <li><a>Scherzi</a></li>
            <li><a href="/blog/chi-siamo">Contatti</a></li>
            </ul>
        </div>
        </div>
    );
}