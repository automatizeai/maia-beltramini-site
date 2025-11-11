import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PracticeAreas = () => {
  const areas = [
    {
      title: "Aposentadorias",
      description: "Auxílio na concessão de aposentadorias por idade, tempo de contribuição, invalidez e especial, garantindo seus direitos junto ao INSS.",
    },
    {
      title: "Pensão por Morte",
      description: "Orientação e suporte para beneficiários em casos de pensão por morte, assegurando o amparo necessário às famílias.",
    },
    {
      title: "Revisões Previdenciárias",
      description: "Análise detalhada de benefícios para identificar possíveis direitos a revisões e aumentos de valores recebidos.",
    },
    {
      title: "Auxílio-Doença e Acidente",
      description: "Assessoria completa para concessão e manutenção de benefícios por incapacidade temporária ou permanente.",
    },
    {
      title: "Regularização de Vínculos",
      description: "Especialização em reconhecimento de vínculos empregatícios e períodos de contribuição não computados.",
    },
    {
      title: "BPC/LOAS",
      description: "Orientação para obtenção do Benefício de Prestação Continuada para idosos e pessoas com deficiência de baixa renda.",
    },
  ];

  return (
    <section id="atuacao" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-gold to-yellow-300 mb-4">
            Áreas de Atuação
          </h2>
          <div className="h-1 w-24 bg-custom-gold mx-auto mb-6" />
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
                <CardTitle className="text-xl font-heading text-white">
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
