const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Maia & Beltramini
            </h3>
            <p className="text-secondary-foreground/80">
              Advocacia Previdenciária com humanização, ética e respeito desde 2016.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
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
              <li>(38) 0000-0000</li>
              <li>contato@maiaebeltramini.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>
            © {new Date().getFullYear()} Maia & Beltramini Advogados Associados. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            OAB/MG 116182 | OAB 199139
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
