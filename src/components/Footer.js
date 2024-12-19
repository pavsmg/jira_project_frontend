import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-800 text-gray-300 py-4 text-center">
            <div className="flex justify-center gap-6 mb-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-github text-xl"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-twitter text-xl"></i></a>
                <a href="mailto:support@alphaomega.com" className="hover:text-white"><i className="fas fa-envelope text-xl"></i></a>
            </div>
            <p>&copy; 2024 Alphaomega Team. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;
