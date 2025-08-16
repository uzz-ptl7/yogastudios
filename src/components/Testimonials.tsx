import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Rodriguez",
      role: "Marketing Manager",
      content: "This yoga center transformed my life. I came stressed and anxious, but through their gentle guidance and supportive community, I found peace and strength I never knew I had.",
      rating: 5,
      transformation: "Reduced anxiety by 80%"
    },
    {
      name: "David Kim",
      role: "Software Developer",
      content: "As someone who sits at a desk all day, the back pain was unbearable. The instructors here helped me not just with poses, but with a complete lifestyle change. My posture and energy levels are completely different now.",
      rating: 5,
      transformation: "Pain-free for 6 months"
    },
    {
      name: "Maria Santos",
      role: "Teacher",
      content: "I was skeptical about yoga at first, but the welcoming atmosphere and patient instruction made all the difference. The meditation classes especially have given me tools to handle daily stress with grace.",
      rating: 5,
      transformation: "Better sleep quality"
    },
    {
      name: "James Wilson",
      role: "Retiree",
      content: "At 65, I thought it was too late to start yoga. How wrong I was! The modifications and gentle approach here made me feel confident and capable. My flexibility and balance have improved tremendously.",
      rating: 5,
      transformation: "Improved mobility"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-yoga">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Student <span className="text-primary">Stories</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from our community members about their transformative 
            journeys and how yoga has enriched their lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="yoga-card">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Transformation Badge */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-6">
                <span className="text-sm font-medium text-accent">
                  ✨ {testimonial.transformation}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial CTA */}
        <div className="text-center">
          <div className="yoga-card inline-block">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              🎥 Watch More Student Stories
            </h3>
            <p className="text-muted-foreground mb-6">
              See our students share their transformation journeys in their own words.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-smooth font-medium"
            >
              <span>View Video Testimonials</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-heading font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-accent mb-2">95%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-secondary mb-2">8+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Classes Weekly</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;