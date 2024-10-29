const PortfolioSection = () => {
  const images = [
    '/Final-Logo.jpg',
    '/NCA-Logo-practice.jpg',
    '/NEON-LOGO.jpg',
    '/task-4.jpg',
    '/Professional-Business-card.jpg',
    '/Task-4-Business-card.jpg',
  ];

  return (
    <section id="portfolio-section" className="section bg-[#262525]">
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-blue-400">My Portfolio</h3>
            <h1 className="text-3xl font-bold text-blue-300">Recent Works</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((imageSrc, index) => (
              <div key={index} className="portfolio-card bg-gray-100 p-4 rounded-md shadow-md">
                <img
                  src={imageSrc}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                
            
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
