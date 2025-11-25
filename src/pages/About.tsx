
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import authorPhoto from "@/assets/author-photo.jpg";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const timeline = [
    {
      phase: "Idea Conception",
      description: "A dream about falling stars sparked the initial concept in late 2022.",
    },
    {
      phase: "Drafting",
      description: "Six months of intense writing, world-building, and character development.",
    },
    {
      phase: "Editing",
      description: "Multiple revision rounds to perfect the narrative and pacing.",
    },
    {
      phase: "Beta Readers",
      description: "Feedback from early readers shaped the final version.",
    },
    {
      phase: "Launch",
      description: "Ready to share this story with the world!",
    },
  ];

  const futureWorks = [
    {
      title: "Broken Realms",
      status: "Coming Soon",
      description: "Book 2 in the Shattered Skies universe",
    },
    {
      title: "Short Stories Collection",
      status: "In Progress",
      description: "Tales from the edges of reality",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12">
      {/* Author Introduction */}
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              Meet the <span className="gradient-text">Author</span>
            </h1>
            <p className="text-xl text-primary font-semibold">
              Fiction author obsessed with alternate realities and fragile worlds.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I've always been fascinated by the spaces between what we know and what we imagine. 
                Growing up, I devoured science fiction and fantasy novels, always wondering what 
                lay beyond the edges of those fictional worlds.
              </p>
              <p className="text-lg">
                <em>Shattered Skies</em> emerged from years of questioning our perception of reality. 
                What if the world we see is just one layer of a much deeper truth? This novel is 
                my attempt to explore that question through characters who feel as real to me as 
                old friends.
              </p>
              <p className="text-lg">
                My mission as an author is simple: to create stories that make you think, feel, 
                and question everything—then stay up way too late because you need to know what 
                happens next.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-md mx-auto">
              <img
                src={authorPhoto}
                alt="Aarav Sen"
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Writing Journey */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            The Journey Behind the Book
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.phase}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-10 rounded-[32px] border border-border/40 bg-background/30 p-6 sm:p-10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              What's Next
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {futureWorks.map((work, index) => (
                <Card key={index} className="p-8 space-y-4 bg-card">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {work.status}
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{work.title}</h3>
                  <p className="text-muted-foreground">{work.description}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground">
              Join the newsletter to follow the journey and be the first to know about new releases.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            Let's Connect
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button variant="outline" size="lg" asChild>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:aarav@example.com" aria-label="Email">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
            </Button>
          </div>

          <Card className="p-8 bg-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background"
              />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
