import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours. Namaste! 🙏",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-yoga">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start your yoga journey? Have questions about our classes? 
            We'd love to hear from you and help you find your perfect practice.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="yoga-card">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-primary"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary"
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary min-h-32"
                    placeholder="Tell us about your yoga experience, goals, or any questions you have..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full hero-button">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="yoga-card h-fit">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Visit Our Studio
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-muted-foreground">
                      KG 123 St, Kimisagara<br />
                      Nyarugenge, Kigali<br />
                      Rwanda
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Phone & WhatsApp</div>
                    <div className="text-muted-foreground">
                      <a href="tel:+250123456789" className="hover:text-primary transition-smooth">
                        +250 123 456 789
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">
                      <a href="mailto:hello@yogacenter.rw" className="hover:text-primary transition-smooth">
                        hello@yogacenter.rw
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Studio Hours</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>Monday - Friday: 6:00 AM - 9:00 PM</div>
                      <div>Saturday: 7:00 AM - 7:00 PM</div>
                      <div>Sunday: 8:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t border-border pt-6 mt-6">
                <div className="font-medium text-foreground mb-4">Follow Us</div>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/yogacenter" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>@yogacenter</span>
                  </a>
                  <a 
                    href="https://facebook.com/yogacenter" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Yoga Center</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-1">
            <div className="yoga-card p-0 overflow-hidden h-fit">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.042721346838!2d30.05879!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4257eb81dd9%3A0x73e1d2b4c7daea7a!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yoga Center Location in Kigali, Rwanda"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;