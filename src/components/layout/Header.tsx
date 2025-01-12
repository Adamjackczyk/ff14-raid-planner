import { UserCircle } from "lucide-react";

export default function Header() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-400 to-blue-100/90 border-b border-blue-700/50 shadow-lg shadow-inner [box-shadow:inset_-1px_0_15px_rgba(0,0,0,0.2),inset_1px_0_5px_rgba(0,0,0,0.8)]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-t from-black to-black/0 text-transparent bg-clip-text relative">
            FF14 Raid Planner
          </h1>
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-black/40 to-transparent mx-6 opacity-50"></div>
        </div>

        <button className="px-6 py-1 text-black/70 hover:text-black group flex items-center gap-2 transition-all duration-200">
          <UserCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 ease-out" />
          <span className="relative font-bold z-10">Log in</span>
        </button>
      </div>
    </nav>
  );
}
