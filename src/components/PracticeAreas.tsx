import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Calculator, Shield, Clock, Award } from "lucide-react";

const PracticeAreas = () => {
  const areas = [
    {
      icon: FileText,
      title: "Aposentadorias",
      description: "Auxílio na concessão de aposentadorias por idade, tempo de contribuição, invalidez e especial, garantindo seus direitos junto ao INSS.",
    },
    {
      icon: Users,
      title: "Pensão por Morte",
      description: "Orientação e suporte para beneficiários em casos de pensão por morte, assegurando o amparo necessário às famílias.",
    },
    {
      icon: Calculator,
      title: "Revisões Previdenciárias",
      description: "Análise detalhada de benefícios para identificar possíveis direitos a revisões e aumentos de valores recebidos.",
    },
    {
      icon: Shield,
      title: "Auxílio-Doença e Acidente",
      description: "Assessoria completa para concessão e manutenção de benefícios por incapacidade temporária ou permanente.",
    },
    {
      icon: Clock,
      title: "Regularização de Vínculos",
      description: "Especialização em reconhecimento de vínculos empregatícios e períodos de contribuição não computados.",
    },
    {
      icon: Award,
      title: "BPC/LOAS",
      description: "Orientação para obtenção do Benefício de Prestação Continuada para idosos e pessoas com deficiência de baixa renda.",
    },
  ];

  return (
    <section id="atuacao" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Especialistas em Direito Previdenciário, oferecemos soluções completas para proteger seus direitos
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading text-secondary">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground mb-6">
            Não encontrou o que procura? Entre em contato conosco para discutir seu caso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
