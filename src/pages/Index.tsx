import { Link } from "react-router-dom";
import { Palette, Monitor, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import heroBg from "@/assets/hero-bg.jpg";
import instructorImg from "@/assets/instructor.jpg";
import paintSplatter from "@/assets/paint-splatter.png";

const testimonials = [
  { quote: "My daughter used to say she 'couldn't draw.' After just a few classes, she's painting every single day and her confidence has soared!", author: "Sofia's mom", location: "Milan, Italy" },
  { quote: "The online format is incredibly convenient for our family. The instructor is so patient and makes every child feel like a true artist.", author: "Lukas's parents", location: "Munich, Germany" },
  { quote: "We've tried many online classes, but this is the only one where my son stays focused for the entire session. She's magic!", author: "Emma's dad", location: "London, UK" },
  { quote: "The small class sizes make such a difference. My kids get personal attention and they absolutely love the projects.", author: "Aisha's mom", location: "Dubai, UAE" },
];

const classFormats = [
  { icon: Monitor, title: "Online Group Classes", desc: "Fun, interactive sessions via Zoom in small groups organized by age." },
  { icon: Users, title: "One-on-One Sessions", desc: "Personalized instruction tailored to your child's interests and skill level." },
  { icon: Palette, title: "In-Person Workshops", desc: "Hands-on art experiences for local families and special events." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Children painting in a bright art studio" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      <img src={paintSplatter} alt="" className="absolute -top-10 -right-10 w-64 opacity-15 animate-float pointer-events-none" loading="lazy" width={512} height={512} />

      <div className="container relative z-10 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="font-heading font-800 text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
            Where Little Artists Find Their <span className="text-primary">Colors</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Nurturing creativity, confidence, and joy in children through the magic of painting — online & in-person classes for ages 4–12.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="rounded-full font-bold text-base px-8">
                <Sparkles size={18} className="mr-2" />
                Book a Free Trial
              </Button>
            </Link>
            <Link to="/classes">
              <Button size="lg" variant="outline" className="rounded-full font-bold text-base px-8">
                Explore Classes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Meet the Instructor */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/30 rounded-3xl -rotate-3" />
            <img
              src={instructorImg}
              alt="Art instructor smiling with paintbrushes"
              className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover aspect-[4/5]"
              loading="lazy"
              width={640}
              height={800}
            />
          </div>
          <div>
            <SectionHeading title="Hi, I'm Your Child's Art Teacher!" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a background in fine arts and art education, I've spent years helping children discover the joy of painting. I believe every child is naturally creative — they just need the right encouragement to let their imagination shine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Having worked with hundreds of families across Europe and beyond, I created Little Brushes Studio to combine my two greatest passions: art and working with kids.
            </p>
            <Link to="/about">
              <Button variant="outline" className="rounded-full font-semibold">Read My Full Story →</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Class Formats */}
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <SectionHeading
          title="Classes That Spark Creativity"
          subtitle="Choose the format that works best for your family — all designed to be fun, mess-friendly, and full of learning."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {classFormats.map((c) => (
            <div key={c.title} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <c.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/classes">
            <Button className="rounded-full font-semibold px-8">View All Classes</Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="What Parents Are Saying"
          subtitle="Families from around the world trust Little Brushes Studio to nurture their children's creativity."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
      <img src={paintSplatter} alt="" className="absolute -bottom-10 -left-10 w-48 opacity-10 rotate-180 pointer-events-none" loading="lazy" width={512} height={512} />
      <div className="container text-center relative z-10">
        <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground mb-4">
          Ready to Let Your Child's Creativity Bloom?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          Book a free trial class and watch your little artist discover the joy of painting.
        </p>
        <Link to="/contact">
          <Button size="lg" className="rounded-full font-bold text-base px-10">
            <Sparkles size={18} className="mr-2" />
            Book a Free Trial
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
