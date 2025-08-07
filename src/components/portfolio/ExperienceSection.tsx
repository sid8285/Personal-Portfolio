import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Centene Corporation",
      location: "St. Louis, MO",
      period: "May 2025 - Present",
      description: "Led development of user-facing features for a platform serving 1M+ users. Collaborated with design and backend teams to deliver high-quality, performant web applications.",
      achievements: [
        "Improved page load times by 40% through optimization",
        "Mentored 3 junior developers",
        "Led migration from legacy framework to React"
      ],
      technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "Startup Solutions",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects from concept to deployment. Worked directly with clients to understand requirements and deliver custom solutions.",
      achievements: [
        "Delivered 15+ successful projects on time",
        "Reduced client onboarding time by 60%",
        "Implemented automated testing increasing code reliability"
      ],
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker", "Heroku"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Developed responsive websites and web applications for various clients in different industries. Focused on creating pixel-perfect implementations of design mockups.",
      achievements: [
        "Created 20+ responsive websites",
        "Achieved 95+ PageSpeed scores consistently",
        "Established component library for team efficiency"
      ],
      technologies: ["JavaScript", "SCSS", "WordPress", "jQuery", "Gulp"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="bg-gradient-hero bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A journey through my professional development and the impact I've made at each step.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-foreground/70">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-foreground/60 mt-2 sm:mt-0">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground/80">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-48 flex justify-center lg:justify-end">
                    <div className="w-2 h-24 bg-gradient-accent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-foreground/60">
              <span>Want to see more details?</span>
              <a 
                href="#" 
                className="text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                View Full Resume <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;