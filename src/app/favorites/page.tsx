"use client";


import { Navigation } from '@/components/Navigation';
import { CafeCard } from '@/components/CafeCard';
import { Heart } from 'lucide-react';
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useEffect } from 'react';

// Define the Cafe type (if not already defined elsewhere)
interface Cafe {
  id: string;
  name: string;
  address: string;
  area: string;
  rating: number;
  images: string[];
  description: string;
  category: string[];
  isFavorite: boolean;
}

// Define the query response type
interface FavCafesData {
  cafes: Cafe[];
}

const GET_FAV_CAFES = gql`
  query GetCafes {
    cafes(isFavorite: true) {
      id
      name
      address
      area
      rating
      images
      description
      category
      isFavorite
    }
  }
`

const Favorites = () => {
  const { data, refetch } = useQuery<FavCafesData>(GET_FAV_CAFES);
  const { cafes } = data || { cafes: [] }; 

  useEffect(() => {
    refetch();
  }, [refetch, data]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Favorites
            </h1>
          </div>
          <p className="text-muted-foreground">
            All your favorite matcha cafes in one place
          </p>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cafes.map((cafe) => (
            <CafeCard key={cafe.id} cafe={cafe} />
          ))}
        </div>

        {/* Empty State */}
        {cafes.length === 0 && (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No favorites yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Start exploring and save your favorite cafes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
