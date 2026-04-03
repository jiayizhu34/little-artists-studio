import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

const TestimonialCard = ({ quote, author, location }: TestimonialCardProps) => (
  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
    <Quote className="text-primary/30 mb-3" size={28} />
    <p className="text-foreground/80 leading-relaxed italic mb-4">{quote}</p>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
        {author[0]}
      </div>
      <div>
        <p className="font-heading font-bold text-sm text-foreground">{author}</p>
        <p className="text-xs text-muted-foreground">{location}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
