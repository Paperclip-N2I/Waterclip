const Footer = () => {
    return (
        <footer className="footer text-light py-6">
            <div className="flex gap-3 flex-col items-center">
                <ul className="footer-links flex flex-row gap-4">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;