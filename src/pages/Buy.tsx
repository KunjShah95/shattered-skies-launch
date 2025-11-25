import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck, Zap, Mail } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

const Buy = () => {
  const [format, setFormat] = useState("ebook");
  const [quantity, setQuantity] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const prices = {
    ebook: 9.99,
    paperback: 19.99,
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen py-20">
        <div className="container max-w-2xl">
          <Card className="p-12 text-center space-y-6 animate-fade-in bg-card">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-serif font-bold gradient-text">
              Thank You for Your Order!
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">Your order has been confirmed.</p>
              <div className="bg-muted/50 rounded-lg p-6 space-y-2">
                <p className="font-semibold text-foreground">Order Summary:</p>
                <p>Book: Shattered Skies</p>
                <p>Format: {format === "ebook" ? "eBook (Digital Download)" : "Paperback (Physical)"}</p>
                <p>Quantity: {quantity}</p>
                <p className="text-xl font-bold text-foreground mt-4">
                  Total: ${(prices[format as keyof typeof prices] * quantity).toFixed(2)}
                </p>
              </div>
              <p>
                A confirmation email has been sent to: <strong className="text-foreground">{formData.email}</strong>
              </p>
              {format === "ebook" && (
                <p className="text-sm">
                  Your download link will arrive within 5 minutes. Check your spam folder if you don't see it.
                </p>
              )}
              {format === "paperback" && (
                <p className="text-sm">
                  Your book will be shipped to the address provided and should arrive within 5-7 business days.
                </p>
              )}
            </div>
            <Button asChild size="lg" className="mt-6">
              <a href="/">Return to Home</a>
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-12">
          Get Your <span className="gradient-text">Copy</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Book Details */}
          <div className="space-y-8">
            <Card className="p-8 bg-card">
              <div className="aspect-[3/4] max-w-sm mx-auto mb-6">
                <img
                  src={bookCover}
                  alt="Shattered Skies Book Cover"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Shattered Skies</h2>
              <p className="text-muted-foreground mb-6">
                A genre-bending journey through fractured realities where nothing is as it seems.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Genre:</strong> Fiction / Fantasy / Sci-Fi</p>
                <p><strong>Pages:</strong> 384</p>
                <p><strong>Language:</strong> English</p>
              </div>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-card">
                <ShieldCheck className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Secure Payment</p>
              </Card>
              <Card className="p-4 text-center bg-card">
                <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Instant Access</p>
              </Card>
              <Card className="p-4 text-center bg-card">
                <Mail className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Email Support</p>
              </Card>
            </div>
          </div>

          {/* Order Form */}
          <div>
            <Card className="p-8 bg-card">
              <form onSubmit={handlePurchase} className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Choose Format</Label>
                  <RadioGroup value={format} onValueChange={setFormat}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="ebook" id="ebook" />
                      <Label htmlFor="ebook" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">eBook (Digital Download)</p>
                            <p className="text-sm text-muted-foreground">PDF, EPUB, MOBI formats</p>
                          </div>
                          <p className="text-lg font-bold">${prices.ebook}</p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="paperback" id="paperback" />
                      <Label htmlFor="paperback" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">Paperback (Physical Book)</p>
                            <p className="text-sm text-muted-foreground">Ships within 5-7 days</p>
                          </div>
                          <p className="text-lg font-bold">${prices.paperback}</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Your Information</h3>
                  <Input
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                  {format === "paperback" && (
                    <>
                      <Input
                        placeholder="Street Address"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="bg-background"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="City"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="bg-background"
                        />
                        <Input
                          placeholder="ZIP Code"
                          required
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="bg-background"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="gift" />
                  <Label htmlFor="gift" className="text-sm text-muted-foreground cursor-pointer">
                    This is a gift
                  </Label>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-3xl font-bold gradient-text">
                      ${(prices[format as keyof typeof prices] * quantity).toFixed(2)}
                    </span>
                  </div>
                  <Button type="submit" size="lg" className="w-full shadow-lg hover:shadow-xl transition-shadow">
                    Complete Purchase
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Secure checkout powered by Stripe (Demo Mode)
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
