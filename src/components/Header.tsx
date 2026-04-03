import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "My Story" },
  { to: "/classes", label: "Classes" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🎨</span>
          <span className="font-heading font-800 text-xl md:text-2xl text-foreground">
            Little Brushes <span className="text-primary">Studio</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-muted ${
                location.pathname === link.to
                  ? "text-primary bg-peach"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="ml-2 rounded-full font-semibold">Book a Trial</Button>
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <nav className="container flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-peach"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-2 rounded-full font-semibold">Book a Trial</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
