import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import paintSplatter from "@/assets/paint-splatter.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    childAge: "",
    format: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 🎨",
      description: "Thank you! I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", childAge: "", format: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 relative overflow-hidden">
        <img src={paintSplatter} alt="" className="absolute top-10 right-0 w-56 opacity-10 pointer-events-none" loading="lazy" width={512} height={512} />
        <div className="container max-w-2xl">
          <SectionHeading
            title="Let's Get Creative Together!"
            subtitle="Book a class, ask a question, or just say hello. I'd love to hear from you."
          />

          <div className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-secondary/20 border border-secondary/30">
              <MessageCircle className="text-primary flex-shrink-0" size={20} />
              <p className="text-sm text-muted-foreground">
                Not sure which class is right? Send me a message and we'll figure it out together!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="font-semibold">Your Name</Label>
                  <Input
                    id="name"
                    required
                    maxLength={100}
                    placeholder="e.g. Maria"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1.5 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="childAge" className="font-semibold">Child's Age</Label>
                  <Input
                    id="childAge"
                    placeholder="e.g. 7"
                    maxLength={10}
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="mt-1.5 rounded-xl"
                  />
                </div>
                <div>
                  <Label className="font-semibold">Preferred Format</Label>
                  <Select value={formData.format} onValueChange={(v) => setFormData({ ...formData, format: v })}>
                    <SelectTrigger className="mt-1.5 rounded-xl">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online-group">Online Group Class</SelectItem>
                      <SelectItem value="one-on-one">One-on-One Session</SelectItem>
                      <SelectItem value="in-person">In-Person Workshop</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="font-semibold">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your child and what you're looking for..."
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 rounded-xl"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full font-bold">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
