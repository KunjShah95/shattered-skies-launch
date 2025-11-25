import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Zap, Star } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import bookCover from "@/assets/book-cover.jpg";

const Home = () => {
  const themes = [
    {
      icon: Zap,
      title: "A world on the brink",
      description: "Reality fractures as the skies themselves begin to shatter",
    },
    {
      icon: Heart,
      title: "Deep character journeys",
      description: "Follow heroes who must confront their deepest fears",
    },
    {
      icon: BookOpen,
      title: "Unfolding mystery",
      description: "Each chapter reveals secrets that change everything",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Beta Reader",
      quote: "I couldn't put it down. The world-building is absolutely stunning.",
    },
    {
      name: "James Chen",
      role: "Early Reviewer",
      quote: "A perfect blend of fantasy and sci-fi. The characters feel so real.",
    },
    {
      name: "Maya Patel",
      role: "Book Blogger",
      quote: "This is the kind of story that stays with you long after the last page.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                Shattered <span className="gradient-text">Skies</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                When the sky breaks, the real story begins.
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                In a world where reality itself is fracturing, a group of unlikely heroes must 
                journey beyond the shattered skies to discover the truth that could save—or 
                destroy—everything they know.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link to="/buy">Buy the Book</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="#sample">Read a Free Sample</a>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <img
                  src={bookCover}
                  alt="Shattered Skies Book Cover"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              About the Book
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <em>Shattered Skies</em> is a genre-bending fiction novel that seamlessly weaves 
              together elements of fantasy, science fiction, and emotional drama. Set in a world 
              where the boundaries between dimensions are breaking down, the story follows an 
              ensemble cast of characters—each with their own secrets and scars—as they embark 
              on a perilous journey to understand why their reality is collapsing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With rich world-building, complex characters, and a mystery that deepens with every 
              chapter, this novel will take you on an unforgettable adventure beyond the edge of 
              what you thought possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {themes.map((theme, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 hover:shadow-lg transition-all hover:scale-105 bg-background"
              >
                <theme.icon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{theme.title}</h3>
                <p className="text-muted-foreground">{theme.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            Early Praise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 hover:shadow-lg transition-all bg-card"
              >
                <Star className="h-6 w-6 text-primary fill-primary" />
                <p className="text-lg italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Get Exclusive Chapters
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the inner circle to receive sneak peeks, deleted scenes, and launch discounts 
              before anyone else.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-muted/30">
        <div className="container relative text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Ready to enter the world of <span className="gradient-text">Shattered Skies</span>?
          </h2>
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link to="/buy">Buy the Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
