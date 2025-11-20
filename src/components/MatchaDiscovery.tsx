import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import Image from 'next/image';
// import cafe1 from "/vercel.svg";
// import cafe2 from "/vercel.svg";
// import cafe3 from "/vercel.svg";

const cafes = [
  {
    id: 1,
    name: "Tombo Matcha",
    location: "Soho, Central London",
    rating: 4.8,
    // image: cafe1,
    description: "Authentic Japanese matcha bar with ceremonial-grade tea",
  },
  {
    id: 2,
    name: "Farm Girl Café",
    location: "Notting Hill",
    rating: 4.6,
    // image: cafe2,
    description: "Instagrammable café with creative matcha lattes",
  },
  {
    id: 3,
    name: "Yumchaa",
    location: "Covent Garden",
    rating: 4.7,
    // image: cafe3,
    description: "Cozy tea house specializing in premium matcha blends",
  },
];

const MatchaDiscovery = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Matcha Discovery</h2>
        <p className="text-sm text-muted-foreground">
          Featured London matcha cafés you'll love
        </p>
      </div>

      <div className="space-y-4">
        {cafes.map((cafe, index) => (
          <motion.div
            key={cafe.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-border hover:shadow-elevated transition-shadow duration-300 cursor-pointer group">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=800&q=80"
                  alt={cafe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={140}
                  height={140}
                />
               
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{cafe.name}</h3>
                  <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-xs font-medium text-primary">{cafe.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{cafe.location}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cafe.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Powered by <span className="font-semibold text-foreground">OpenAI Agent Kit</span>
        </p>
      </div>
    </div>
  );
};

export default MatchaDiscovery;
