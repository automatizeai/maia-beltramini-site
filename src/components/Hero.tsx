import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maia & Beltramini"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
              Maia & Beltramini
            </h1>
            <div className="h-1 w-32 bg-white/80 mx-auto mb-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Humanização, ética e respeito desde 2016
          </h2>

          <p className="text-xl md:text-2xl font-light mb-12 text-white/90 max-w-3xl mx-auto">
            Protegendo seus direitos previdenciários com conhecimento técnico e
            atendimento humanizado
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="group bg-white text-secondary hover:bg-white/90 text-lg px-8"
            >
              Fale Conosco
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white text-white hover:bg-white/10 text-lg px-8"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
