import React from 'react';
import { OutletCard } from './OutletCard';


interface Restaurant {
  id: string;
  name: string;
  address: string;
  tags: string[];
  imageUrl: string;
}

interface ResultsListProps {
  restaurants: Restaurant[];
  onEditRestaurant: (id: string) => void;
}

export const ResultsList: React.FC<ResultsListProps> = ({ restaurants, onEditRestaurant }) => {
  return (
    <div className="w-full max-w-[430px] mt-4">
      {restaurants.map((restaurant, index) => (
        <OutletCard          
          key={restaurant.id}
          name={restaurant.name}
          address={restaurant.address}
          tags={restaurant.tags}
          imageUrl={restaurant.imageUrl}
          onEdit={() => onEditRestaurant(restaurant.id)}
          isCompact={index === 2}
        />
      ))}
    </div>
  );
};
