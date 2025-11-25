import { Card } from "@/components/ui/card";
import { BookOpen, Eye, Gift, Users } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

const Newsletter = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Exclusive Chapters",
      description: "Get sneak peeks and bonus chapters before they're released to the public.",
    },
    {
      icon: Eye,
      title: "Behind-the-Scenes",
      description: "Author commentary, world-building notes, and creative process insights.",
    },
    {
      icon: Gift,
      title: "Launch Discounts",
      description: "Special pricing on new releases and early bird access to pre-orders.",
    },
    {
      icon: Users,
      title: "Shape the Story",
      description: "Vote on character decisions and influence future plot directions.",
    },
  ];

  const pastUpdates = [
    {
      title: "Worldbuilding Notes: Cities Above the Clouds",
      date: "March 2024",
      description: "An in-depth look at the floating cities and their unique architectures.",
    },
    {
      title: "Meet the Main Characters",
      date: "February 2024",
      description: "Character profiles, backstories, and the inspiration behind each protagonist.",
    },
    {
      title: "How the Ending Almost Changed",
      date: "January 2024",
      description: "A fascinating look at the original ending and why it was rewritten.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero */}
      <section className="container py-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold animate-fade-in">
            Join the <span className="gradient-text">Reader Circle</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Be the first to get exclusive chapters, author notes, and launch bonuses. 
            This is for readers who like to be early.
          </p>
          <div className="pt-4">
            <NewsletterForm showName={true} />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container py-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
          What You'll Receive
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 space-y-4 hover:shadow-lg transition-all bg-card"
            >
              <benefit.icon className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Updates */}
      <section className="container py-20 bg-muted/30 -mx-[100vw] px-[100vw]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            Sample Updates
          </h2>
          <div className="space-y-6">
            {pastUpdates.map((update, index) => (
              <Card key={index} className="p-6 bg-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold">{update.title}</h3>
                    <p className="text-muted-foreground">{update.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    {update.date}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-20">
        <Card className="p-12 text-center space-y-6 bg-card border-primary/20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold">
            This is for the readers who like to be <span className="gradient-text">early</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join thousands of readers already inside the circle. Get your first exclusive chapter 
            within minutes of signing up.
          </p>
          <div className="pt-4">
            <NewsletterForm buttonText="Join Now" />
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Newsletter;
