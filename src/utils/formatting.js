export const formatPrice = (price, currency = 'FCFA') => {
  return `${price.toLocaleString('fr-FR')} ${currency}`;
};

export const formatSurface = (surface) => {
  return `${surface} m²`;
};

export const formatCapacity = (capacity) => {
  return capacity === 1 ? '1 personne' : `${capacity} personnes`;
};

export const formatRooms = (rooms, type = 'chambre') => {
  if (rooms === 1) return `1 ${type}`;
  return `${rooms} ${type}s`;
};

export const formatQuarter = (quarter) => {
  const quarterNames = {
    'Bonapriso': 'Bonapriso',
    'Bonanjo': 'Bonanjo', 
    'Akwa': 'Akwa',
    'Bali': 'Bali'
  };
  return quarterNames[quarter] || quarter;
};

export const formatApartmentType = (type) => {
  const typeNames = {
    'Studio': 'Studio',
    'T2': 'Appartement 2 pièces',
    'T3': 'Appartement 3 pièces',
    'T4': 'Appartement 4 pièces',
    'T5': 'Appartement 5 pièces'
  };
  return typeNames[type] || type;
};

export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};