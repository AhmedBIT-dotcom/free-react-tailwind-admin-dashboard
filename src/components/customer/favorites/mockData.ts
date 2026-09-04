import { useState, useEffect } from 'react';

export interface FavoriteItem {
  identity: string; // e.g. "search:1" or "services:1"
  source: 'search' | 'services';
  originalId: string;
  
  // Common UI presentation fields needed to render either card
  titleAr: string;
  titleEn: string;
  providerNameAr: string;
  providerNameEn: string;
  categoryAr: string;
  categoryEn: string;
  dailyPrice: number;
  rating: number;
  reviewCount: number;
  serviceAreaAr: string;
  serviceAreaEn: string;
  image: string;
  
  // Specific fields
  isProviderVerified?: boolean;
  descriptionAr?: string;
  descriptionEn?: string;
  providerAvatar?: string;
}

class FavoriteStore {
  private favorites: FavoriteItem[] = [];
  private listeners: Set<() => void> = new Set();

  getFavorites() {
    return this.favorites;
  }

  toggleFavorite(item: FavoriteItem) {
    const exists = this.favorites.some(f => f.identity === item.identity);
    if (exists) {
      this.favorites = this.favorites.filter(f => f.identity !== item.identity);
    } else {
      this.favorites = [item, ...this.favorites];
    }
    this.notify();
  }
  
  removeFavorite(identity: string) {
    this.favorites = this.favorites.filter(f => f.identity !== identity);
    this.notify();
  }

  isFavorited(identity: string) {
    return this.favorites.some(f => f.identity === identity);
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }
}

export const favoriteStore = new FavoriteStore();

export function useCustomerFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(favoriteStore.getFavorites());

  useEffect(() => {
    const unsubscribe = favoriteStore.subscribe(() => {
      setFavorites(favoriteStore.getFavorites());
    });
    return unsubscribe;
  }, []);

  return {
    favorites,
    toggleFavorite: (item: FavoriteItem) => favoriteStore.toggleFavorite(item),
    removeFavorite: (identity: string) => favoriteStore.removeFavorite(identity),
    isFavorited: (identity: string) => favoriteStore.isFavorited(identity)
  };
}
