import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with modern frameworks and technologies",
      tech: ["React", "TypeScript", "Node.js", "Python"]
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design with focus on user experience and visual appeal",
      tech: ["Figma", "Adobe Creative Suite", "Prototyping", "Design Systems"]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications with focus on speed and efficiency",
      tech: ["Performance Optimization", "SEO", "Web Vitals", "Accessibility"]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player with excellent communication and project management skills",
      tech: ["Agile", "Git", "Team Leadership", "Mentoring"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              I'm passionate about creating digital experiences that make a difference. 
              With a background in both design and development, I bring ideas to life 
              through clean code and thoughtful user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  I started my journey in tech with a curiosity for how things work behind the scenes. 
                  What began as tinkering with HTML and CSS has evolved into a full-stack development 
                  career spanning [X] years.
                </p>
                <p>
                  I believe in the power of clean, maintainable code and user-centered design. 
                  Every project is an opportunity to solve real problems and create meaningful 
                  interactions that users love.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border/50">
                <h4 className="text-xl font-bold mb-4 text-primary">Quick Facts</h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Based in [Your Location]
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    [X]+ years of experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    [X]+ projects completed
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Always learning new things
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={skill.title} 
                  className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">{skill.title}</h4>
                  <p className="text-sm text-foreground/70 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {skill.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;