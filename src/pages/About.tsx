import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import instructorImg from "@/assets/instructor.jpg";
import paintSplatter from "@/assets/paint-splatter.png";
import { Heart, Star, Palette, Globe } from "lucide-react";

const values = [
  { icon: Heart, title: "Every Child Is an Artist", text: "I believe creativity lives in every child. My job is simply to help them find it." },
  { icon: Star, title: "Confidence Through Art", text: "Painting builds self-esteem, focus, and the courage to express yourself freely." },
  { icon: Palette, title: "Joy in the Process", text: "It's not about perfection — it's about exploration, play, and the thrill of creating something new." },
  { icon: Globe, title: "Art Knows No Borders", text: "I work with families across Europe and beyond, bringing art education to children everywhere." },
];

const About = () => (
  <Layout>
    <section className="py-16 md:py-24 relative overflow-hidden">
      <img src={paintSplatter} alt="" className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none" loading="lazy" width={512} height={512} />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-2" />
            <img
              src={instructorImg}
              alt="Art instructor in her studio"
              className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover aspect-[4/5]"
              loading="lazy"
              width={640}
              height={800}
            />
          </div>
          <div>
            <SectionHeading title="My Story" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For as long as I can remember, I've had a paintbrush in my hand. As a little girl growing up in Europe, art was my favorite way to make sense of the world — every feeling, every daydream, every adventure found its way onto paper.
              </p>
              <p>
                That childhood passion carried me through my studies in fine arts and art education. I learned technique, theory, and art history — but what truly lit me up was watching others discover their own creativity, especially children.
              </p>
              <p>
                After years of teaching in schools, community centers, and private settings, I realized I wanted to create something of my own — a space where every child feels welcome, inspired, and free to create without pressure or judgment.
              </p>
              <p>
                That's how <strong className="text-foreground">Little Brushes Studio</strong> was born. Today, I teach children ages 4–12 from families across Italy, Germany, the UK, and beyond. Whether we're painting rainbows on Zoom or getting messy with acrylics in person, every class is built around one simple truth:
              </p>
              <p className="text-foreground font-heading font-bold text-lg">
                Every child is naturally creative. They just need someone to believe in them.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <SectionHeading title="What I Believe" subtitle="The principles that guide every class at Little Brushes Studio." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
