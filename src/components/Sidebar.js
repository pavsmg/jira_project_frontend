import React, { useState } from 'react';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transition-transform duration-300 ${isOpen ? '' : '-translate-x-full'} lg:translate-x-0`}>
            <div className="p-4 text-xl font-bold border-b border-blue-600 flex justify-between">
                <span>Menú</span>
                <button className="text-2xl lg:hidden" onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
                <a href="#" className="hover:text-blue-300">Inicio</a>
                <a href="#" className="hover:text-blue-300">Servicios</a>
                <a href="#" className="hover:text-blue-300">Acerca de</a>
                <a href="#" className="hover:text-blue-300">Contacto</a>
            </nav>
        </aside>
    );
}

export default Sidebar;
