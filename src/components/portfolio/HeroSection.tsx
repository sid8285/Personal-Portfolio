import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-foreground/80">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-glow-pulse">
              [Your Name]
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto">
            Creative Developer & Designer
          </p>
          
          <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
            I craft beautiful digital experiences that blend cutting-edge technology 
            with thoughtful design. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-accent text-black font-medium hover:shadow-glow transition-all duration-300 min-w-[200px]"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 min-w-[200px]"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-foreground/40" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;