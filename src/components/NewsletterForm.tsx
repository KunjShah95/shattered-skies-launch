import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

interface NewsletterFormProps {
  showName?: boolean;
  buttonText?: string;
}

const NewsletterForm = ({ showName = false, buttonText = "Join the Circle" }: NewsletterFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      toast.success("Welcome to the Reader Circle!");
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 rounded-lg bg-card border border-primary/20 animate-fade-in">
        <h3 className="text-2xl font-serif mb-2 gradient-text">Thank you!</h3>
        <p className="text-muted-foreground">
          Check your email for your first exclusive chapter.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      {showName && (
        <Input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background"
        />
      )}
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-background"
      />
      <Button type="submit" className="w-full" size="lg">
        {buttonText}
      </Button>
    </form>
  );
};

export default NewsletterForm;
