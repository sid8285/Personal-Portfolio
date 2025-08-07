import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Coffee, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Debug logging
    console.log("EmailJS Config Check:", {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY,
      hasService: !!EMAILJS_SERVICE_ID,
      hasTemplate: !!EMAILJS_TEMPLATE_ID,
      hasKey: !!EMAILJS_PUBLIC_KEY
    });

    try {
      // Validate that we have all required config
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("Missing EmailJS configuration. Check your .env.local file.");
      }

      // EmailJS template parameters - try both naming conventions
      const templateParams = {
        // Common naming convention
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Portfolio Contact",
        message: formData.message,
        // Alternative naming convention
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Siddhant",
        // Additional fallbacks
        user_name: formData.name,
        user_email: formData.email,
        reply_to: formData.email,
      };

      console.log("Sending email with params:", templateParams);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS success:", result);

      // Success - clear form and show success message
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      toast.success("Message sent successfully! I'll get back to you soon.", {
        description: "Thanks for reaching out!"
      });

    } catch (error) {
      console.error("EmailJS error details:", error);
      
      // Log the full error object for debugging
      if (error && typeof error === 'object') {
        console.error("Error status:", (error as any).status);
        console.error("Error text:", (error as any).text);
        console.error("Full error object:", JSON.stringify(error, null, 2));
      }
      
      // More specific error messages
      let errorMessage = "Failed to send message";
      let errorDescription = "Please try again or contact me directly via email.";
      
      if (error && typeof error === 'object') {
        const errorObj = error as any;
        if (errorObj.status === 400) {
          errorDescription = "Bad request - check template configuration and variable names.";
        } else if (errorObj.status === 404) {
          errorDescription = "Service or template not found. Please check your EmailJS setup.";
        } else if (errorObj.status === 403 || errorObj.status === 401) {
          errorDescription = "Authentication failed. Please check your public key.";
        } else if (errorObj.text) {
          errorDescription = `EmailJS error: ${errorObj.text}`;
        }
      } else if (error instanceof Error) {
        if (error.message.includes("Missing EmailJS configuration")) {
          errorDescription = "Configuration error. Please check environment variables.";
        }
      }
      
      toast.error(errorMessage, {
        description: errorDescription
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ssrivastava329@gatech.edu",
      href: "mailto:ssrivastava329@gatech.edu"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (678) 477-8285",
      href: "tel:+16784778285"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Atlanta, GA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-hero bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-accent text-black font-medium hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-primary" />
                  Get in Touch
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  If you have a project in mind or just want to chat about technology, 
                  design, or life in general, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card 
                      key={info.title}
                      className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group animate-fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <a 
                        href={info.href}
                        className="flex items-center gap-4 group-hover:text-primary transition-colors"
                      >
                        <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <p className="text-foreground/70 group-hover:text-primary/80 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>

              <Card className="p-6 bg-gradient-card border-border/50 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h4 className="font-semibold mb-2 text-foreground">Quick Response</h4>
                <p className="text-sm text-foreground/70">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to reach out via phone or LinkedIn.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;