import { Button } from "@/components/ui/button";
import { Clock, Users, Heart } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      title: "Hatha Yoga",
      description: "Gentle, slow-paced practice focusing on basic postures and breathing techniques. Perfect for beginners and those seeking relaxation.",
      duration: "60 min",
      level: "Beginner",
      icon: "🧘‍♀️",
      benefits: ["Improved flexibility", "Stress relief", "Better posture"]
    },
    {
      title: "Vinyasa Flow",
      description: "Dynamic sequences that flow from one pose to another, synchronized with breath. Builds strength and flexibility.",
      duration: "75 min",
      level: "Intermediate",
      icon: "🌊",
      benefits: ["Cardiovascular health", "Core strength", "Mental clarity"]
    },
    {
      title: "Yin Yoga",
      description: "Passive practice with poses held for 3-5 minutes. Deep stretching that targets connective tissues and promotes inner stillness.",
      duration: "90 min",
      level: "All Levels",
      icon: "🌙",
      benefits: ["Deep flexibility", "Meditation", "Joint health"]
    },
    {
      title: "Meditation & Breathwork",
      description: "Guided meditation sessions combined with pranayama (breathing techniques) to calm the mind and energize the body.",
      duration: "45 min",
      level: "All Levels",
      icon: "💨",
      benefits: ["Mental peace", "Emotional balance", "Stress reduction"]
    },
    {
      title: "Private Sessions",
      description: "One-on-one personalized yoga instruction tailored to your specific needs, goals, and physical abilities.",
      duration: "60 min",
      level: "All Levels",
      icon: "👤",
      benefits: ["Personalized attention", "Faster progress", "Injury prevention"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="classes" className="section-padding">
      <div className="container-yoga">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Classes & <span className="text-primary">Programs</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted/40 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect class for your journey. From gentle beginnings 
            to advanced practice, we offer something for every body and every soul.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <div key={index} className="yoga-card group">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{classItem.icon}</div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  {classItem.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {classItem.description}
              </p>

              {/* Class Details */}
              <div className="flex justify-between items-center mb-6 text-sm">
                <div className="flex items-center space-x-1 text-accent">
                  <Clock className="h-4 w-4" />
                  <span>{classItem.duration}</span>
                </div>
                <div className="flex items-center space-x-1 text-primary">
                  <Users className="h-4 w-4" />
                  <span>{classItem.level}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Heart className="h-4 w-4 text-accent mr-2" />
                  Benefits
                </h4>
                <ul className="space-y-1">
                  {classItem.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className="w-full hero-button group-hover:shadow-glow"
                onClick={scrollToContact}
              >
                Book Class
              </Button>
            </div>
          ))}
        </div>

        {/* Schedule Note */}
        <div className="text-center">
          <div className="yoga-card inline-block">
            <p className="text-muted-foreground mb-4">
              🗓️ Classes run daily with multiple time slots available
            </p>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={scrollToContact}
            >
              View Full Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;