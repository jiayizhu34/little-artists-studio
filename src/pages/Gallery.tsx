import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import artwork1 from "@/assets/gallery/artwork1.jpg";
import artwork2 from "@/assets/gallery/artwork2.jpg";
import artwork3 from "@/assets/gallery/artwork3.jpg";
import artwork4 from "@/assets/gallery/artwork4.jpg";
import artwork5 from "@/assets/gallery/artwork5.jpg";
import artwork6 from "@/assets/gallery/artwork6.jpg";

const artworks = [
  { src: artwork1, name: "Mia", age: 7, project: "Rainbow Meadow", tall: true },
  { src: artwork2, name: "Luca", age: 6, project: "Garden Cat", tall: false },
  { src: artwork3, name: "Sofia", age: 9, project: "Underwater World", tall: true },
  { src: artwork4, name: "Emil", age: 8, project: "My Happy Place", tall: false },
  { src: artwork5, name: "Ayla", age: 5, project: "Butterfly Garden", tall: true },
  { src: artwork6, name: "Leo", age: 10, project: "Sailing Away", tall: false },
];

const Gallery = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Student Gallery"
          subtitle="Every painting tells a story. I'm so proud of my students' creativity and courage — here are just a few of their masterpieces!"
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((art) => (
            <div
              key={art.name}
              className="break-inside-avoid bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="overflow-hidden">
                <img
                  src={art.src}
                  alt={`${art.project} by ${art.name}, age ${art.age}`}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-foreground">{art.project}</h3>
                <p className="text-sm text-muted-foreground">by {art.name}, age {art.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
