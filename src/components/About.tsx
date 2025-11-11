import { Scale, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-gold to-yellow-300 mb-4">
            Sobre Nós
          </h2>
          <div className="h-1 w-24 bg-custom-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fundado em 2016 em Montes Claros, Minas Gerais, o escritório Maia & Beltramini nasceu com o propósito de levar justiça e proteção aos trabalhadores do Norte de Minas.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-xl text-foreground leading-relaxed">
            Consolidamos nossa trajetória como referência em <span className="font-semibold text-custom-gold">Direito Previdenciário</span>, ajudando centenas de clientes a conquistar benefícios do INSS com segurança, agilidade e, principalmente, respeito.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                <Scale className="w-8 h-8 text-custom-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Garantir o acesso aos direitos previdenciários por meio de um atendimento ético, transparente e acolhedor, promovendo justiça social e valorizando a dignidade dos trabalhadores.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-8 h-8 text-custom-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecido como o escritório de advocacia líder em Direito Previdenciário no Norte de Minas, destacado pela excelência técnica e impacto positivo na vida dos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-8 h-8 text-custom-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Valores
              </h3>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>Ética e transparência</li>
                <li>Compromisso com resultados</li>
                <li>Atendimento humanizado</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
