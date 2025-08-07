import { Button } from "@/components/ui/button";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const PortfolioHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Social media and contact links - UPDATE THESE WITH YOUR ACTUAL LINKS
  const socialLinks = {
    github: "https://github.com/sid8285",
    linkedin: "https://www.linkedin.com/in/siddhant-srivastava8285",
    email: "mailto:ssrivastava329@gatech.edu",
    resume: "/resume.pdf" // Make sure to add your resume file to the public folder
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = socialLinks.resume;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Headshot with shake animation */}
          <div className="flex items-center">
            {/* Temporarily commented out to test HMR performance */}
            <img
              src="/headshot-compressed.jpg"
              alt="Siddhant Srivastava"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 hover:border-primary/40 cursor-pointer transition-all duration-300 hover:animate-shake"
              onError={(e) => {
                console.error('Failed to load image:', e.currentTarget.src);
                // Fallback to a placeholder or different image
                e.currentTarget.src = '/placeholder.svg';
              }}
              onLoad={() => {
                console.log('Image loaded successfully');
              }}
            />
            
            {/* Test placeholder */}
            {/* <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              SS
            </div> */}
            
            {/* Test with placeholder to see if images work at all */}
            {/* <img 
              src="/placeholder.svg" 
              alt="Test" 
              className="w-8 h-8 ml-2"
              style={{display: 'none'}}
            /> */}
            {/* <span className="ml-3 text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Portfolio
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={socialLinks.email} 
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
            <Button 
              onClick={handleResumeDownload}
              className="bg-gradient-accent text-black font-medium hover:shadow-glow transition-all duration-300"
            >
              <Download size={16} className="mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={socialLinks.email} 
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default PortfolioHeader;