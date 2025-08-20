const LoadingSpinner = ({ size = 'md', text = 'Chargement...' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <img 
          src="/icons/app-logo.svg" 
          alt="Fresh Residence" 
          className={`${sizeClasses[size]} animate-pulse`}
        />
        <div className={`${sizeClasses[size]} absolute inset-0 animate-spin border-2 border-transparent border-t-blue-600 rounded-full`}></div>
      </div>
      {text && (
        <p className="mt-4 text-gray-600 font-medium">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;