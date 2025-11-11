import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-6">
          <div>
            <img src="/logo1.png" alt="Maia & Beltramini" className="h-10" />
            <p className="text-secondary-foreground/80 mt-4">
              Advocacia Previdenciária com humanização, ética e respeito desde 2016.
            </p>
            <div className="flex items-center mt-4">
              <a href="https://www.instagram.com/maiaebeltraminiadvogados/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <FaInstagram size={24} />
              </a>
              <p className="ml-2 text-secondary-foreground/80">Siga nosso perfil no Instagram.</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("equipe")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("atuacao")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Áreas de Atuação
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Montes Claros, MG</li>
              <li>(38) 99932-9662</li>
              <li>contato@maiaebeltramini.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex justify-between text-center text-secondary-foreground/60">
          <p>
            © {new Date().getFullYear()} Maia & Beltramini Advogados Associados. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Desenvolvido por Click Podium | Marketing e Tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
