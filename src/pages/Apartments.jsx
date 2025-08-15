import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  X, 
  MapPin, 
  Users, 
  Bed, 
  Star, 
  MessageCircle, 
  SlidersHorizontal,
  GridIcon,
  List
} from 'lucide-react';
import { apartments } from '../data/apartments';
import { useFilters } from '../hooks/useFilters';
import { formatPrice, formatCapacity } from '../utils/formatting';
import { generateWhatsAppURL } from '../utils/whatsapp';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Apartments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(true);

  const {
    filters,
    filteredApartments,
    updateFilter,
    clearFilters,
    getFilterOptions,
    hasActiveFilters
  } = useFilters(apartments);

  const filterOptions = getFilterOptions();

  useEffect(() => {
    // Initialize filters from URL params
    const type = searchParams.get('type');
    const quarter = searchParams.get('quarter');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    if (type) updateFilter('type', type);
    if (quarter) updateFilter('quarter', quarter);
    if (minPrice) updateFilter('minPrice', minPrice);
    if (maxPrice) updateFilter('maxPrice', maxPrice);

    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, [searchParams]);

  const sortedApartments = [...filteredApartments].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricing.daily - b.pricing.daily;
      case 'price-high':
        return b.pricing.daily - a.pricing.daily;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'featured':
      default:
        return b.featured - a.featured || a.pricing.daily - b.pricing.daily;
    }
  });

  const handleFilterChange = (key, value) => {
    updateFilter(key, value);
    
    // Update URL params
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    clearFilters();
    setSearchParams({});
  };

  if (isLoading) {
    return (
      <div className="pt-20">
        <LoadingSpinner size="lg" text="Chargement des appartements..." />
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Appartements à Douala
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez notre collection d'appartements meublés dans les meilleurs quartiers de Douala. 
            {filteredApartments.length} appartement{filteredApartments.length > 1 ? 's' : ''} disponible{filteredApartments.length > 1 ? 's' : ''}.
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  Filtres
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Effacer tout
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Type d'appartement
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Tous les types</option>
                    {filterOptions.types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Quarter Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Quartier
                  </label>
                  <select
                    value={filters.quarter}
                    onChange={(e) => handleFilterChange('quarter', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Tous les quartiers</option>
                    {filterOptions.quarters.map(quarter => (
                      <option key={quarter} value={quarter}>{quarter}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Prix par nuit (FCFA)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                {/* Capacity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Nombre de personnes
                  </label>
                  <select
                    value={filters.capacity}
                    onChange={(e) => handleFilterChange('capacity', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Toutes capacités</option>
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="6">6+ personnes</option>
                  </select>
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Nombre de chambres
                  </label>
                  <select
                    value={filters.rooms}
                    onChange={(e) => handleFilterChange('rooms', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Toutes</option>
                    <option value="1">1 chambre</option>
                    <option value="2">2 chambres</option>
                    <option value="3">3 chambres</option>
                    <option value="4">4+ chambres</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden btn-outline"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filtres
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <GridIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="featured">Recommandés</option>
                    <option value="price-low">Prix croissant</option>
                    <option value="price-high">Prix décroissant</option>
                    <option value="name">Nom A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Apartments Grid/List */}
            {sortedApartments.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                  Aucun appartement trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche pour voir plus de résultats.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary"
                >
                  Effacer les filtres
                </button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {sortedApartments.map((apartment) => (
                  <div 
                    key={apartment.id} 
                    className={`card group hover:shadow-custom transition-all duration-300 ${
                      viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                    }`}
                  >
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'md:w-80 h-64 md:h-auto' : 'h-64'
                    }`}>
                      <img
                        src={apartment.images[0]}
                        alt={apartment.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                          {apartment.type}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                          {formatPrice(apartment.pricing.daily)}/nuit
                        </span>
                      </div>
                      {apartment.featured && (
                        <div className="absolute bottom-4 left-4">
                          <span className="px-2 py-1 bg-secondary-500 text-white text-xs font-medium rounded-full">
                            Recommandé
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display text-xl font-semibold text-gray-900">
                          {apartment.title}
                        </h3>
                        <div className="flex items-center text-secondary-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">4.9</span>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{apartment.location.quarter}, Douala</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{formatCapacity(apartment.capacity)}</span>
                        </div>
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{apartment.rooms} chambre{apartment.rooms > 1 ? 's' : ''}</span>
                        </div>
                        <div className="text-sm">
                          {apartment.surface} m²
                        </div>
                      </div>

                      {viewMode === 'list' && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {apartment.description}
                        </p>
                      )}

                      <div className="flex space-x-3">
                        <Link
                          to={`/appartements/${apartment.id}`}
                          className="flex-1 btn-outline"
                        >
                          Voir détails
                        </Link>
                        <button
                          onClick={() => window.open(generateWhatsAppURL(apartment), '_blank')}
                          className="flex-1 btn-primary"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Réserver
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;