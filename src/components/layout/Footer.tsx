import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-jet-black text-soft-cream border-t border-royal-gold/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Apex<span className="text-royal-gold">.</span>
            </h3>
            <p className="text-soft-cream/80 mb-4">
              Empowering entrepreneurs with tailored business strategies that drive sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-soft-cream/80 hover:text-royal-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-soft-cream/80 hover:text-royal-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-soft-cream/80 hover:text-royal-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-royal-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-soft-cream/80 hover:text-warm-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-soft-cream/80 hover:text-warm-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/insights" className="text-soft-cream/80 hover:text-warm-gold transition-colors">Insights</Link>
              </li>
              <li>
                <Link to="/contact" className="text-soft-cream/80 hover:text-warm-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-royal-gold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#seed-stage" className="text-soft-cream/80 hover:text-warm-gold transition-colors">Seed-Stage Consulting</Link>
              </li>
              <li>
                <Link to="/services#sme" className="text-soft-cream/80 hover:text-warm-gold transition-colors">SME Optimization</Link>
              </li>
              <li>
                <Link to="/services#venture" className="text-soft-cream/80 hover:text-warm-gold transition-colors">Venture Growth</Link>
              </li>
              <li>
                <Link to="/services#ma" className="text-soft-cream/80 hover:text-warm-gold transition-colors">M&A Advisory</Link>
              </li>
              <li>
                <Link to="/services#outsourced-hr" className="text-soft-cream/80 hover:text-warm-gold transition-colors">Outsourced HR</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-royal-gold">Contact Us</h4>
            <address className="not-italic text-soft-cream/80 mb-4">
              <p>81-83 Market Street</p>
              <p>York YO42 2AE</p>
            </address>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2 text-royal-gold"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:info@apexpartners.com" className="text-soft-cream/80 hover:text-warm-gold transition-colors">info@apexpartners.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-2 text-royal-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+442071234567" className="text-soft-cream/80 hover:text-warm-gold transition-colors">+44 (0) 20 7123 4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-royal-gold/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-soft-cream/60 mb-4 md:mb-0">
            &copy; {currentYear} Apex Executive Partners (a trading name of MVBR Consultancy). Registered Office: 81-83 Market Street, York YO42 2AE.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-soft-cream/60 hover:text-royal-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-soft-cream/60 hover:text-royal-gold transition-colors">Terms of Service</Link>
            <Link to="/login" className="text-soft-cream/60 hover:text-royal-gold transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
