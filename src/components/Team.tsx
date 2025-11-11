import carlaImage from "@/assets/carla-maia.jpg";
import rodrigoImage from "@/assets/rodrigo-beltramini.jpg";

const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Quem Somos
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os sócios fundadores do escritório Maia & Beltramini
          </p>
        </div>

        {/* Carla Maia */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 animate-fade-in">
              <h3 className="text-3xl font-heading font-bold text-secondary mb-2">
                Carla Maia
              </h3>
              <p className="text-primary font-semibold mb-6">
                Sócia Fundadora | OAB/MG 116182
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Com formação sólida em Direito Previdenciário, Carla possui vasta experiência em assessoria e consultoria para benefícios do INSS. Sua participação ativa em processos judiciais e administrativos é marcada pela dedicação, sensibilidade e profundo domínio do direito previdenciário.
                </p>
                <p>
                  Seu trabalho é orientado pela busca constante de justiça social e atenção diferenciada a cada cliente. Conhecida pela escuta atenta e abordagem humanizada, ela é referência em atendimento personalizado na região.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 blur-xl" />
                <img
                  src={carlaImage}
                  alt="Carla Maia"
                  className="relative rounded-lg shadow-xl w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rodrigo Beltramini */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary rounded-lg opacity-20 blur-xl" />
                <img
                  src={rodrigoImage}
                  alt="Rodrigo Beltramini"
                  className="relative rounded-lg shadow-xl w-full aspect-square object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-3xl font-heading font-bold text-secondary mb-2">
                Rodrigo Beltramini
              </h3>
              <p className="text-primary font-semibold mb-6">
                Sócio Fundador | OAB 199139
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Especialista em regularização de vínculos empregatícios e revisões previdenciárias, Rodrigo atua com ética, comprometimento e foco em resultados. Seu trabalho garante segurança jurídica aos segurados que enfrentam dificuldades com contribuições não recolhidas.
                </p>
                <p>
                  É reconhecido pelo compromisso ético, dedicação ao cliente e busca de soluções inovadoras que garantam o melhor resultado para cada caso, fortalecendo a confiança dos clientes no escritório.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
