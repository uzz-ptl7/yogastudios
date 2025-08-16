import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yoga.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-yoga text-center max-w-4xl mx-auto px-4 mt-[100px] mb-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-gray-600 mb-6 leading-tight">
          Find Your <span className="text-primary">Balance</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-accent mb-8">
          Embrace Your Inner Peace
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience yoga in a welcoming space for mind, body, and soul. 
          Join our community of wellness and mindfulness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="hero-button text-lg px-10 py-6"
            onClick={() => scrollToSection("classes")}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;