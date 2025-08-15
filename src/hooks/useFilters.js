import { useState, useMemo } from 'react';

export const useFilters = (apartments) => {
  const [filters, setFilters] = useState({
    type: '',
    quarter: '',
    minPrice: '',
    maxPrice: '',
    capacity: '',
    rooms: '',
    amenities: []
  });

  const filteredApartments = useMemo(() => {
    return apartments.filter(apartment => {
      if (filters.type && apartment.type !== filters.type) return false;
      if (filters.quarter && apartment.location.quarter !== filters.quarter) return false;
      if (filters.minPrice && apartment.pricing.daily < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && apartment.pricing.daily > parseInt(filters.maxPrice)) return false;
      if (filters.capacity && apartment.capacity < parseInt(filters.capacity)) return false;
      if (filters.rooms && apartment.rooms !== parseInt(filters.rooms)) return false;
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity => 
          apartment.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }
      return true;
    });
  }, [apartments, filters]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      quarter: '',
      minPrice: '',
      maxPrice: '',
      capacity: '',
      rooms: '',
      amenities: []
    });
  };

  const getFilterOptions = () => {
    const types = [...new Set(apartments.map(apt => apt.type))];
    const quarters = [...new Set(apartments.map(apt => apt.location.quarter))];
    const amenities = [...new Set(apartments.flatMap(apt => apt.amenities))];
    
    return {
      types,
      quarters,
      amenities: amenities.sort(),
      priceRange: {
        min: Math.min(...apartments.map(apt => apt.pricing.daily)),
        max: Math.max(...apartments.map(apt => apt.pricing.daily))
      }
    };
  };

  return {
    filters,
    filteredApartments,
    updateFilter,
    clearFilters,
    getFilterOptions,
    hasActiveFilters: Object.values(filters).some(value => 
      Array.isArray(value) ? value.length > 0 : value !== ''
    )
  };
};