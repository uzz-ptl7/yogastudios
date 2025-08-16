import { Flower, Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-yoga section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Flower className="h-8 w-8" />
              <span className="text-2xl font-heading font-bold">YOGA</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Find your balance and embrace your inner peace. 
              Experience yoga in a welcoming space for mind, body, and soul.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/yogacenter" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/yogacenter" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              {[
                { label: "About Us", id: "about" },
                { label: "Classes", id: "classes" },
                { label: "Instructors", id: "instructors" },
                { label: "Pricing", id: "pricing" },
                { label: "Testimonials", id: "testimonials" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Classes */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Our Classes</h3>
            <div className="space-y-3">
              {[
                "Hatha Yoga",
                "Vinyasa Flow",
                "Yin Yoga",
                "Meditation & Breathwork",
                "Private Sessions"
              ].map((className) => (
                <div
                  key={className}
                  className="text-primary-foreground/80"
                >
                  {className}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:hello@yogacenter.rw" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  hello@yogacenter.rw
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+250123456789" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  +250 123 456 789
                </a>
              </div>
              <div className="text-primary-foreground/80">
                KG 123 St, Kimisagara<br />
                Nyarugenge, Kigali<br />
                Rwanda
              </div>
            </div>

            {/* Studio Hours */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Studio Hours</h4>
              <div className="text-sm text-primary-foreground/80 space-y-1">
                <div>Mon-Fri: 6:00 AM - 9:00 PM</div>
                <div>Sat: 7:00 AM - 7:00 PM</div>
                <div>Sun: 8:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading font-semibold text-xl mb-4">
              Stay Connected
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter for yoga tips, class updates, and wellness inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex justify-between items-center lg:flex-row flex-col text-center border-t border-primary-foreground/20 pt-8">
          <p className="text-primary-foreground/80">
            © {currentYear} YOGA. All Rights Reserved.
          </p>
          <p className="font-accent text-primary-foreground mt-2 text-lg">
            Made with ❤️ in Rwanda by{" "}
            <a 
              href="https://www.sitecraftersz.co/" 
              className="underline hover:text-accent transition-smooth" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Sitecrafters Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;