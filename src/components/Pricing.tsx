import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Drop-in",
      price: "8,000",
      period: "per class",
      description: "Perfect for trying out classes or occasional practice",
      features: [
        "Single class access",
        "All class types available",
        "Valid for 30 days",
        "No commitment required"
      ],
      popular: false,
      buttonText: "Buy Single Class"
    },
    {
      name: "Monthly",
      price: "45,000",
      period: "per month",
      originalPrice: "64,000",
      description: "Great for regular practitioners who want consistency",
      features: [
        "Unlimited classes",
        "All class types included",
        "Priority booking",
        "Guest pass (1 per month)",
        "Community events access"
      ],
      popular: true,
      buttonText: "Start Monthly Plan"
    },
    {
      name: "Unlimited Annual",
      price: "480,000",
      period: "per year",
      originalPrice: "540,000",
      description: "Best value for dedicated yogis with maximum flexibility",
      features: [
        "Unlimited classes all year",
        "All class types included",
        "Priority booking",
        "Guest passes (2 per month)",
        "Free workshops & events",
        "Private session discount (20%)",
        "Retreat discounts"
      ],
      popular: false,
      buttonText: "Join Annual Plan"
    }
  ];

  const addOns = [
    {
      name: "Private Session",
      price: "35,000",
      description: "One-on-one personalized instruction"
    },
    {
      name: "Workshop Pass",
      price: "15,000",
      description: "Access to special weekend workshops"
    },
    {
      name: "Meditation Package",
      price: "25,000",
      description: "4 guided meditation sessions"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-hero">
      <div className="container-yoga">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted/40 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your yoga journey. All prices in Rwandan Francs (RWF).
            Start with a free trial class to experience our community.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative yoga-card ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium">
                    <Crown className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-muted-foreground line-through text-lg mb-1">
                      RWF {plan.originalPrice}
                    </div>
                  )}
                  <div className="text-4xl font-heading font-bold text-primary">
                    RWF {plan.price}
                  </div>
                  <div className="text-muted-foreground">{plan.period}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${plan.popular ? 'hero-button' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'}`}
                variant={plan.popular ? "default" : "outline"}
                onClick={scrollToContact}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
            Additional Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {addOns.map((addon, index) => (
              <div key={index} className="yoga-card text-center">
                <h4 className="font-semibold text-foreground mb-2">{addon.name}</h4>
                <div className="text-2xl font-heading font-bold text-accent mb-2">
                  RWF {addon.price}
                </div>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>

          {/* Free Trial CTA */}
          <div className="text-center">
            <div className="yoga-card inline-block">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                🎁 New to Yoga?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get your first class absolutely free! Experience our welcoming community 
                and find the perfect class for your needs.
              </p>
              <Button 
                size="lg"
                className="hero-button"
                onClick={scrollToContact}
              >
                Book Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;