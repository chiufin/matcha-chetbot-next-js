"use client";

import { Coffee } from 'lucide-react';
import Link from "next/link";
import { areas } from '@/config/areas';

const currentYear = new Date().getFullYear();
const Explore = [{
  name: 'All Cafes', href: '/'
}, {
  name: 'Favorites', href: '/favorites'
}];

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 mt-auto backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-foreground">Matcha Spots</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Explore, find, and savor London’s best matcha cafés.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Explore</h3>
            <ul className="flex flex-wrap gap-4">
              {Explore.slice(0, 5).map((item) => (
                <li key={item.name} className="text-sm text-muted-foreground">
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Popular Areas</h3>
            <ul className="flex flex-wrap gap-4">
              {areas.map((area) => (
                <li key={area} className="text-sm text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Stacccy — Crafted with calm energy and matcha.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
