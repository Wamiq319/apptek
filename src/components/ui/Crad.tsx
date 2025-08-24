// components/ServiceCard.js
const SCard = ({ icon: Icon, title, description, backgroundImage }) => {
  return (
    <div className="group relative h-64 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Static Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

      <div className="relative z-10 flex h-full flex-col p-4 text-white">
        {/* Icon at top left */}
        <div className="flex justify-start">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Title and description at bottom */}
        <div className="mt-auto opacity-100 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
