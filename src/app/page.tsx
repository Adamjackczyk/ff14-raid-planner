export default function Home() {
  return (
    <main className="min-h-screen bg-gray-500/40 text-gray-100">
      {/* Navigation bar with improved gradient transitions */}
      <nav className="bg-gradient-to-r from-blue-900 via-blue-400 to-blue-100/90 border-b border-blue-700/50 shadow-lg shadow-inner [box-shadow:inset_-1px_0_15px_rgba(0,0,0,0.2),inset_1px_0_5px_rgba(0,0,0,0.8)]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-t from-black to-black/0 text-transparent bg-clip-text relative">
              FF14 Raid Planner
            </h1>
            {/* The divider now creates a smoother transition to the empty space */}
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-black/40 to-transparent mx-6 opacity-50"></div>
          </div>
          {/* Empty div to maintain flex layout when we add right-side content later */}
          <div></div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto p-8">
        {/* Welcome section with styled container */}
        <div className="bg-gradient-to-br from-blue-900/50 to-black/50 rounded-lg border border-blue-700/30 p-8 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-8">
            {/* Text content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6 text-blue-50">
                Welcome to FF14 Raid Planner
              </h2>
              <p className="text-gray-300 max-w-2xl leading-relaxed">
                Plan your raids, track your static's availability, and manage
                loot distribution all in one place. Streamline your raid
                planning process and focus on what matters most - clearing
                content with your team.
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
      </div>

      {/*Footer*/}
      <footer className="mt-auto border-t border-white/40">
        <div className="w-full bg-black/30 border-b border-blue-700/50 px-6 py-2 text-sm text-gray-400">
          <p>FF14 Raid Planner - A tool for raiders</p>
        </div>
      </footer>
    </main>
  );
}
