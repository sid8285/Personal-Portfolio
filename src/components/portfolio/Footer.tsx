import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Your Name
            </div>
            <p className="text-foreground/70 mb-4">
              Creative developer passionate about building beautiful, 
              functional digital experiences that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 bg-muted/50 rounded-lg text-foreground/60 hover:text-primary hover:bg-primary/20 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Let's Connect</h4>
            <div className="space-y-2 text-foreground/70">
              <p>Available for new opportunities</p>
              <p>Based in San Francisco, CA</p>
              <p>Open to remote work</p>
            </div>
            <div className="mt-4">
              <a 
                href="mailto:hello@yourname.com"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <Mail size={16} />
                hello@yourname.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-foreground/60 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;