import yogaClassImage from "@/assets/realistic-yoga-class.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="container-yoga">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Welcome to our sacred space where mind, body, and spirit unite. 
                For over 8 years, we've been dedicated to creating a welcoming 
                environment where yogis of all levels can explore their practice 
                and discover inner peace.
              </p>
              
              <p>
                Our philosophy centers on mindfulness, wellness, and community. 
                We believe that yoga is not just a physical practice, but a 
                journey of self-discovery that transforms lives from the inside out.
              </p>
              
              <p>
                Led by certified instructors with decades of combined experience, 
                our center offers authentic teachings rooted in traditional yoga 
                practices while embracing modern wellness approaches.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧘</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Mindfulness</h3>
                <p className="text-sm text-muted-foreground">Present moment awareness</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Wellness</h3>
                <p className="text-sm text-muted-foreground">Holistic health approach</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Supportive environment</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="yoga-card overflow-hidden">
              <img
                src={yogaClassImage}
                alt="Yoga class in session"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            {/* Certification Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-elevated">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold">8+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;