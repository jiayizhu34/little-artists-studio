import { Link } from "react-router-dom";
import { Monitor, User, MapPin, Clock, Users, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import paintSplatter from "@/assets/paint-splatter.png";

const classes = [
  {
    icon: Monitor,
    title: "Online Group Classes",
    age: "Ages 4–12 (grouped by age)",
    duration: "45–60 minutes",
    size: "4–6 kids per group",
    description: "Our most popular format! Kids join a lively Zoom session with peers their own age. Each class features a guided painting project with step-by-step instruction, plenty of encouragement, and time to share their finished work. Materials lists are sent in advance so you're always prepared.",
    highlights: ["Small groups for personal attention", "Organized by age group", "New projects every week", "Materials list provided"],
    color: "bg-secondary/20",
    borderColor: "border-secondary",
  },
  {
    icon: User,
    title: "One-on-One Sessions",
    age: "Ages 4–12",
    duration: "45 minutes",
    size: "Private session",
    description: "Perfect for children who want tailored instruction or are working on a special project. These private online sessions are fully customized to your child's interests, skill level, and pace. Great for kids who are passionate about art or need extra encouragement.",
    highlights: ["Fully personalized curriculum", "Flexible scheduling", "Focus on individual goals", "Great for shy or advanced artists"],
    color: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: MapPin,
    title: "In-Person Workshops",
    age: "Ages 4–12",
    duration: "1.5–2 hours",
    size: "6–12 kids",
    description: "Available on request for local families, birthday parties, or special events. These hands-on workshops are a wonderful way for kids to experience the joy of painting together in a real studio setting. Contact me to plan your event!",
    highlights: ["Birthday parties & events", "All materials included", "Available in select locations", "Group discounts available"],
    color: "bg-accent/20",
    borderColor: "border-accent",
  },
];

const Classes = () => (
  <Layout>
    <section className="py-16 md:py-24 relative overflow-hidden">
      <img src={paintSplatter} alt="" className="absolute bottom-0 left-0 w-48 opacity-10 rotate-90 pointer-events-none" loading="lazy" width={512} height={512} />
      <div className="container">
        <SectionHeading
          title="Our Classes"
          subtitle="Designed to be fun, mess-friendly, and full of creative learning. Choose the format that works best for your family."
        />

        <div className="space-y-8">
          {classes.map((c) => (
            <div key={c.title} className={`rounded-2xl border ${c.borderColor} ${c.color} p-8 md:p-10`}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center shadow-sm">
                    <c.icon className="text-primary" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-800 text-2xl text-foreground mb-3">{c.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Users size={14} /> {c.age}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {c.duration}</span>
                    <span className="flex items-center gap-1"><Palette size={14} /> {c.size}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">{c.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="rounded-full font-semibold">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl border border-border p-8 text-center">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">Not sure which class is right?</h3>
          <p className="text-muted-foreground mb-5">Book a free trial and we'll find the perfect fit for your child together!</p>
          <Link to="/contact">
            <Button className="rounded-full font-semibold px-8">Book a Free Trial</Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Classes;
