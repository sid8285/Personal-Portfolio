import { Card } from "@/components/ui/card";
import { Code, Users, Layers, Cloudy } from "lucide-react";

const AboutSection = () => {
  // TEST: Hot reload test - this should update immediately
  const skills = [
    {
      icon: Code,
      title: "Languages",
      description: "Full-stack development with modern frameworks and technologies",
      tech: ["Java", "Python", "C", "JavaScript"]
    },
    {
      icon: Layers,
      title: "Frameworks",
      description: "Modern frameworks and libraries for building robust applications",
      tech: ["React", "Node.js", "Express", "Spring Boot"]
    },
    {
      icon: Cloudy,
      title: "Cloud & DevOps",
      description: "Deployment, infrastructure, and development operations",
      tech: ["AWS", "Docker", "CI/CD", "Kubernetes"]
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
              I am a B.S.M.S. student at Georgia Tech passionate about building things and making a difference through the software I build. 
              With a background in web and app development, I bring ideas I have to life while learning as much as I can along the way!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold mb-6 text-primary">From curiosity to code</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  I started my journey in tech because I loved the idea of being able to build anything using just my imagination. 
                  What began as tinkering with HTML and CSS has evolved into a passion for full-stack development and almost 2 years of industry experience. 
                  I am very proud of the work I have done and the projects I have completed, and I am always looking for new challenges and opportunities to grow.
                </p>
                <p>
                My main motivation for building software is to have a direct impact on people. 
                I draw significant inspiration from prominent figures in the field, such as Linus Torvalds and Tim Berners-Lee, who have helped countless individuals through their work. 
                One day, I hope to make a similar impact. 
                To me, every project is an opportunity to solve real problems and create meaningful experiences that users truly value.
                </p>
                <p>
                  When I'm not coding, you can find me playing golf, weightlifting, and spending time with my close family and friends.
                </p>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border/50">
                <h4 className="text-xl font-bold mb-4 text-primary">Quick Facts</h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Based in Atlanta, GA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    B.S.M.S. CS student @ Georgia Institute of Technology
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Graduating in May 2027
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    2+ years of industry experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-6 text-primary">Skills</h3>
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