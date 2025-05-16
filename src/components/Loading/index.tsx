export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="relative">
        {/* Logo ou inicial animada */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse flex items-center justify-center">
          <span className="text-2xl font-bold text-white">M</span>
        </div>
        
        {/* Círculos animados */}
        <div className="absolute -top-2 -left-2 w-20 h-20 border-4 border-purple-600 rounded-full animate-spin-slow opacity-50"></div>
        <div className="absolute -bottom-2 -right-2 w-20 h-20 border-4 border-blue-500 rounded-full animate-spin-slow-reverse opacity-50"></div>
      </div>
      
      {/* Texto de loading */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Carregando...
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Preparando sua experiência
        </p>
      </div>
    </div>
  );
} 