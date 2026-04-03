import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 mt-20">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div>
          <span className="font-heading font-800 text-xl">
            🎨 Little Brushes <span className="text-primary">Studio</span>
          </span>
          <p className="mt-3 text-background/70 text-sm leading-relaxed">
            Nurturing creativity in children through the magic of painting. Online & in-person classes for little artists worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-heading font-bold text-sm uppercase tracking-wider text-background/50 mb-1">Quick Links</span>
          {[
            { to: "/about", label: "My Story" },
            { to: "/classes", label: "Classes" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Book a Class" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="text-background/70 hover:text-primary transition-colors text-sm">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-heading font-bold text-sm uppercase tracking-wider text-background/50 mb-1">Connect</span>
          <a href="mailto:hello@littlebrushes.studio" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm">
            <Mail size={16} /> hello@littlebrushes.studio
          </a>
          <div className="flex gap-3 mt-2">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Youtube, href: "#", label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/40 text-xs">
        © {new Date().getFullYear()} Little Brushes Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
