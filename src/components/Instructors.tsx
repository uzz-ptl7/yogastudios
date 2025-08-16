import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

const Instructors = () => {
  const instructors = [
    {
      name: "Sarah Chen",
      image: instructor1,
      certifications: "RYT 500, Yin Yoga Specialist",
      teachingStyle: "Gentle & Mindful",
      quote: "Yoga is not about touching your toes. It's about what you learn on the way down.",
      specialties: ["Hatha Yoga", "Yin Yoga", "Meditation"],
      experience: "8 years"
    },
    {
      name: "Marcus Thompson",
      image: instructor2,
      certifications: "RYT 200, Vinyasa Flow Expert",
      teachingStyle: "Dynamic & Energetic",
      quote: "The success of yoga does not lie in the ability to attain the perfect posture but in how it empowers you to live fully.",
      specialties: ["Vinyasa Flow", "Power Yoga", "Breathwork"],
      experience: "6 years"
    }
  ];

  return (
    <section id="instructors" className="section-padding bg-gradient-hero">
      <div className="container-yoga">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Meet Your <span className="text-primary">Instructors</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted/40 max-w-2xl mx-auto leading-relaxed">
            Our experienced and certified instructors are here to guide you 
            on your yoga journey with wisdom, compassion, and expertise.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <div key={index} className="yoga-card text-center">
              {/* Photo */}
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-elevated">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {instructor.experience} experience
                </div>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-accent font-medium mb-1">{instructor.certifications}</p>
                  <p className="text-sm text-muted-foreground">{instructor.teachingStyle}</p>
                </div>

                {/* Quote */}
                <blockquote className="italic text-muted-foreground border-l-4 border-accent pl-4 py-2">
                  "{instructor.quote}"
                </blockquote>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Specialties</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {instructor.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm border border-secondary/30"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="yoga-card inline-block">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Interested in Teaching with Us?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate, certified instructors to join our community.
            </p>
            <a 
              href="mailto:hello@yogacenter.com" 
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-smooth font-medium"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;