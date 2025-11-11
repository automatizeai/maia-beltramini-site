import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-heading font-bold text-primary">
            Maia & Beltramini
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("equipe")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("atuacao")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button onClick={() => scrollToSection("contato")}>
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("equipe")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Equipe
              </button>
              <button
                onClick={() => scrollToSection("atuacao")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Áreas de Atuação
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contato
              </button>
              <Button onClick={() => scrollToSection("contato")} className="w-full">
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
