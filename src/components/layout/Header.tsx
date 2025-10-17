import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToolkitModal from '@/components/common/ToolkitModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolkitOpen, setToolkitOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const servicesItems = [
    { title: "Seed-Stage Consulting", href: "/services#seed-stage" },
    { title: "SME Optimization", href: "/services#sme" },
    { title: "Venture Growth", href: "/services#venture" },
    { title: "M&A Advisory", href: "/services#ma" },
    { title: "Outsourced HR", href: "/services#outsourced-hr" },
    { title: "Executive Coaching", href: "/services#executive-coaching" },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  const handleServiceClick = (href: string) => {
    const [path, hash] = href.split('#');
    
    // If already on services page, just scroll to the section
    if (location.pathname === '/services') {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // Otherwise navigate to services page with the hash
    else {
      navigate(href);
    }
  };
  
  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-jet-black/80 backdrop-blur-lg border-b border-royal-gold/20 shadow-md py-3"
          : "bg-jet-black/70 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleHomeClick}>
          <span className="text-2xl font-bold text-soft-cream">
            Apex<span className="text-royal-gold">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            onClick={handleHomeClick}
            className={`font-medium transition-colors ${
              isActive("/") 
                ? "text-royal-gold"
                : "text-soft-cream hover:text-warm-gold"
            }`}
          >
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`font-medium flex items-center transition-colors ${
                  location.pathname.startsWith("/services")
                    ? "text-royal-gold"
                    : "text-soft-cream hover:text-warm-gold"
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4 text-royal-gold" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-deep-charcoal w-56 shadow-lg rounded-lg border border-royal-gold/30">
              {servicesItems.map((item) => (
                <DropdownMenuItem key={item.title}>
                  <button 
                    onClick={() => handleServiceClick(item.href)}
                    className="py-2 px-4 cursor-pointer w-full hover:bg-royal-gold/10 text-soft-cream block text-left"
                  >
                    {item.title}
                  </button>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link
            to="/about"
            className={`font-medium transition-colors ${
              isActive("/about")
                ? "text-royal-gold"
                : "text-soft-cream hover:text-warm-gold"
            }`}
          >
            About
          </Link>
          
          <Link
            to="/insights"
            className={`font-medium transition-colors ${
              isActive("/insights")
                ? "text-royal-gold"
                : "text-soft-cream hover:text-warm-gold"
            }`}
          >
            Insights
          </Link>
          
          <Link
            to="/contact"
            className={`font-medium transition-colors ${
              isActive("/contact")
                ? "text-royal-gold"
                : "text-soft-cream hover:text-warm-gold"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="gold"
            className="font-medium"
            onClick={() => setToolkitOpen(true)}
          >
            Get Your Free Toolkit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-royal-gold" />
          ) : (
            <Menu className="h-6 w-6 text-royal-gold" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-deep-charcoal border-t border-royal-gold/30">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={handleHomeClick}
                className={`py-2 font-medium ${
                  isActive("/")
                    ? "text-royal-gold"
                    : "text-soft-cream hover:text-warm-gold"
                }`}
              >
                Home
              </Link>
              
              <div className="py-2">
                <div className="flex items-center justify-between font-medium text-soft-cream mb-2">
                  <Link to="/services" className={`${
                    location.pathname.startsWith("/services") ? "text-royal-gold" : "text-soft-cream"
                  }`}>
                    Services
                  </Link>
                </div>
                <div className="pl-4 flex flex-col space-y-2 border-l border-royal-gold/30">
                  {servicesItems.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => handleServiceClick(item.href)}
                      className="text-soft-cream/80 hover:text-warm-gold text-sm text-left"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
              
              <Link
                to="/about"
                className={`py-2 font-medium ${
                  isActive("/about")
                    ? "text-royal-gold"
                    : "text-soft-cream hover:text-warm-gold"
                }`}
              >
                About
              </Link>
              
              <Link
                to="/insights"
                className={`py-2 font-medium ${
                  isActive("/insights")
                    ? "text-royal-gold"
                    : "text-soft-cream hover:text-warm-gold"
                }`}
              >
                Insights
              </Link>
              
              <Link
                to="/contact"
                className={`py-2 font-medium ${
                  isActive("/contact")
                    ? "text-royal-gold"
                    : "text-soft-cream hover:text-warm-gold"
                }`}
              >
                Contact
              </Link>
              
                <Button
                variant="gold"
                className="mt-4 w-full"
                onClick={() => setToolkitOpen(true)}
                >
                  Get Your Free Toolkit
                </Button>
            </nav>
          </div>
        </div>
      )}
      {/* Toolkit Modal */}
      <ToolkitModal open={toolkitOpen} onClose={() => setToolkitOpen(false)} />
    </header>
  );
};

export default Header;
