"use client";

import { useState } from "react";
import { Coffee } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { FilterBar } from '@/components/FilterBar';
import { CafeCard } from '@/components/CafeCard';
import { SkeletonCard } from '@/components/SkeletonCard';
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

// Define the Cafe type
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
interface CafesData {
  cafes: Cafe[];
}


const GET_CAFES = gql`
  query GetCafes($search: String, $area: String) {
    cafes(search: $search, area: $area) {
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

export default function MainContent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedArea, setSelectedArea] = useState('All Areas');

    // const { data, loading, error } = useQuery(GET_CAFES, {
    const { data, loading } = useQuery<CafesData>(GET_CAFES, {
      variables: { search: searchQuery, area: selectedArea },
    });

    // if (loading) return <p>loading</p>;
    // if (error) return <p>錯誤：{error.message}</p>;
    const { cafes } = data || { cafes: [] };

    return (
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filters */}
          <div className="space-y-4 mb-8">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterBar selectedArea={selectedArea} onAreaChange={setSelectedArea} />
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {cafes.length} {cafes.length === 1 ? 'cafe' : 'cafes'} found
            </p>
          </div>
          
          {/* Cafe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            )): cafes.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>

          {/* Empty State */}
          {cafes.length === 0 && (
            <div className="text-center py-16">
              <Coffee className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No cafes found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
          </div>
    )
}