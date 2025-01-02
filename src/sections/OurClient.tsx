import { data } from "../data/data";
const { ourClient } = data;

const OurClient = () => {
  const duplicatedImages = [
    ...ourClient.images,
    ...ourClient.images,
    ...ourClient.images,
  ];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scroll-content {
          animation: scroll 30s linear infinite;
        }
        
        @media (max-width: 768px) {
          .scroll-content {
            animation-duration: 20s;
          }
        }
      `}</style>

      <div className="scroll-container w-full">
        <div className="scroll-content flex">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <div className="bg-white">
                <img
                  src={image.image}
                  alt={image.name}
                  className="w-full h-auto object-contain max-h-24"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

export default OurClient;
