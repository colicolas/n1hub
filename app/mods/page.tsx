import Link from "next/link";

export default function ModsPage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-200 px-8 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mt-16">
        <h1 className="text-7xl latofont text-white tracking-tight">NarrowOne Mods</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-2xl">
          Mods allow players to customize their NarrowOne experience, providing changes to 
          visuals, UI elements, and gameplay mechanics. However, modifying the game comes 
          with responsibility—<span className="text-fuchsia-200">hacks, cheats, or unfair advantages violate the game's 
          integrity and <span className="font-bold">will result in bans</span></span>. Always use mods ethically and ensure they 
          respect the intended game experience.
        </p>
      </div>

      {/* Mods List */}
      <div className="mt-12 w-full max-w-3xl space-y-6">
        <ModEntry name="CN Mod" link="https://github.com/N1CNmod/narrowone-mod" />
        <ModEntry name="T7 Mod" link="https://github.com/Talent7-source/GameMods.git" />
        <ModEntry name="Viola's Mod" link="https://github.com/TheGirlThatLived/NarrowOne_Customizations" />
      </div>
    </main>
  );
}

// Reusable Mod Entry Component
function ModEntry({ name, link }: { name: string; link: string }) {
  return (
    <div className="border-b border-gray-700 pb-4 flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-white">{name}</h2>
      <Link
        href={link}
        target="_blank"
        className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition rounded-md border border-gray-700"
      >
        View on GitHub →
      </Link>
    </div>
  );
}
