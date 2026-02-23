const NotFound = () => {
  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-xl text-gray-600">Page Not Found</p>
      <button
        onClick={handleGoHome}
        className="inline-flex items-center justify-center font-semibold rounded-xl text-sm px-6 py-2.5 bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-md"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
