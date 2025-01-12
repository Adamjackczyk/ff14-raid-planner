export default function Welcome() {
  return (
    <div className="bg-gradient-to-br from-blue-900/50 to-black/50 rounded-lg border border-blue-700/30 p-8 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-8">
        {/* Text content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-blue-50">
            Welcome to FF14 Raid Planner
          </h2>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Plan your raids, track your static's availability, and manage loot
            distribution all in one place. Streamline your raid planning process
            and focus on what matters most - clearing content with your team.
          </p>
        </div>

        {/* Moogle image */}
        <div className="w-48 h-48 flex-shrink-0">
          <img
            src="/moogle.png"
            alt="Happy Moogle"
            className="w-full h-full object-contain opacity-90"
          />
        </div>
      </div>
    </div>
  );
}
