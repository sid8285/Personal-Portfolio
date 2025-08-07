import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Trade Lens",
      description: "A full-stack web platform for real-time stock analysis and market insights gathered by scraping data from Reddit.",
      image: "/tradeLens1.png",
      technologies: ["TypeScript", "Python", "TursoDB", "Google Cloud"],
      features: ["Weekly updates", "Sentiment analysis", "Clean dashboard", "Mobile friendly"],
      liveUrl: "#",
      githubUrl: "https://www.github.com/sid8285/tradelens",
      featured: true
    },
    {
      title: "BORD",
      description: "Task management app which utilizes monetary incentives to complete the tasks you set out to do.",
      image: "/BORD.png",
      technologies: ["Swift", "Swift UI", "Firebase", "AWS"],
      features: ["Team collaboration", "Real-time updates", "Project analytics", "Drag & drop"],
      liveUrl: "#",
      githubUrl: "https://www.github.com/sid8285/Swift-UI-Learning",
      featured: true
    },
    {
      title: "Sid's BlockChain",
      description: "Using python, I created my very own blockchain from scratch.",
      image: "/api/placeholder/600/400",
      technologies: ["Python"],
      features: ["Location-based forecasts", "Interactive maps", "Weather analytics", "PWA"],
      liveUrl: "#",
      githubUrl: "https://www.github.com/sid8285/blockchain_project",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio website with animation, dark mode, and CMS integration for easy content management.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Framer Motion", "Sanity", "Tailwind"],
      features: ["Smooth animations", "Dark mode", "CMS integration", "SEO optimized"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with file sharing, emoji reactions, and group chat functionality.",
      image: "/api/placeholder/600/400",
      technologies: ["Socket.io", "Express", "MongoDB", "React"],
      features: ["Real-time messaging", "File sharing", "Group chats", "Emoji reactions"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    // {
    //   title: "Analytics Dashboard",
    //   description: "Comprehensive analytics dashboard with data visualization, custom reports, and export functionality.",
    //   image: "/api/placeholder/600/400",
    //   technologies: ["React", "D3.js", "Python", "FastAPI"],
    //   features: ["Data visualization", "Custom reports", "Export functionality", "Role-based access"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-hero bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A showcase of my best work, demonstrating technical skills, creativity, and problem-solving abilities.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                      {/* <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Github size={14} className="mr-1" />
                        Code
                      </Button> */}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground/80 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-foreground/60">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-primary rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/20 text-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Other <span className="text-primary">Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={project.githubUrl} className="text-foreground/60 hover:text-primary">
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/20 text-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
              <Github size={16} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
