import SocialCards from "@/components/ui/card-fan-carousel";

const DEMO_CARDS = [
  { imgUrl: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=800&q=80", alt: "Precision mowing" },
  { imgUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", alt: "Natural stone hardscaping" },
  { imgUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80", alt: "Core aeration" },
  { imgUrl: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80", alt: "Smart irrigation" },
  { imgUrl: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80", alt: "Hedge and shrub trimming" },
  { imgUrl: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=800&q=80", alt: "Seasonal cleanups" },
  { imgUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80", alt: "Perennial garden design" },
  { imgUrl: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80", alt: "Estate front walkway" },
  { imgUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80", alt: "Living canopy" },
  { imgUrl: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=800&q=80", alt: "Outdoor sanctuary" }
];

export default function Demo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SocialCards cards={DEMO_CARDS} />
    </div>
  );
}
