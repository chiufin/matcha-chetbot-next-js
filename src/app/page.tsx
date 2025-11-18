"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, MapPin, MessageSquare } from "lucide-react";
// import heroImage from "@/assets/hero-matcha.jpg";

const Landing = () => {
  const features = [
    {
      icon: Leaf,
      title: "Learn Matcha Culture",
      description: "Discover the rich history and traditions of Japanese matcha tea ceremonies.",
    },
    {
      icon: MapPin,
      title: "Find Nearby Cafés",
      description: "Explore hidden gems and popular matcha spots across London.",
    },
    {
      icon: MessageSquare,
      title: "Ask Anything",
      description: "Chat with our AI expert powered by LangChain for personalized recommendations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-beige">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-2xl font-semibold"
          >
            <span className="text-3xl">🍵</span>
            <span className="text-foreground">Matcha Knowledge</span>
          </motion.div>
          <Link href="/chat">
            <Button variant="outline" className="rounded-full">
              Start Chatting
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover London's Matcha Scene{" "}
              <span className="text-primary">with AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Chat with our LangChain-powered Matcha expert and explore hidden gems around the city.
            </p>
            <Link href="/chat">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Chatting
              </Button>
            </Link>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="opacity-60">Powered by</span>
              <span className="font-semibold text-foreground">LangChain</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Matcha tea ceremony"
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  🍵
                </div>
                <div>
                  <div className="font-semibold text-foreground">10+ Cafés</div>
                  <div className="text-sm text-muted-foreground">Across London</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Know About Matcha
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore, learn, and discover with our intelligent chatbot assistant
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:shadow-elevated transition-shadow duration-300 bg-card">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 lg:p-16 text-center"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Explore?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey into London's vibrant matcha scene today
          </p>
          <Link to="/chat">
            <Button
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Launch Chat
            </Button>
          </Link>
        </motion.div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              {/* <span className="text-2xl">🍵</span> */}
              <span className="font-medium">© 2025 Stacccy — Crafted with calm energy and matcha.</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="https://github.com" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="mailto:contact@matchaknowledge.com" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
