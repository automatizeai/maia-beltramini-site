import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-gold to-yellow-300 mb-4">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-custom-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você e esclarecer suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      Montes Claros, Minas Gerais
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground">
                      (38) 99932-9662
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      E-mail
                    </h3>
                    <p className="text-muted-foreground">
                      contato@maiaebeltramini.com.br
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Horário de Atendimento
                    </h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Como podemos ajudar?"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
