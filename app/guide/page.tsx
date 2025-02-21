import Link from "next/link";

export default function GuidePage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-200 px-8 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mt-16">
        <h1 className="text-7xl latofont text-white tracking-tight">What is NarrowOne?</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-2xl">
          NarrowOne is a fast-paced <span className="font-bold">first-person shooter</span> where players use the <span className="font-bold">bow and arrow</span>. 
          Developed by <span className="font-bold">Jesper van den Ende & Jurgen Hoogeboom</span> of 
          <Link href="/pelicanparty" className="text-blue-400 hover:underline">
            {" "}Pelican Party Studios
          </Link>, the game combines archery-based combat with team-based objectives.
        </p>
      </div>

      {/* Game Overview */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Gameplay Overview
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          NarrowOne features <span className="font-bold">six bow types</span>, each designed for different playstyles:
        </p>
        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li><span className="font-bold">Bow 1 (Scout):</span> Light and fast, ideal for quick movement.</li>
          <li><span className="font-bold">Bow 2 (Assault):</span> A balanced choice for offense.</li>
          <li><span className="font-bold">Bow 3 (Sharpshooter):</span> Long-range precision with higher damage.</li>
          <li><span className="font-bold">Bow 4 (Runner):</span> Prioritizes speed over damage.</li>
          <li><span className="font-bold">Bow 5 (Support):</span> Useful for team-based play.</li>
          <li><span className="font-bold">Bow 6 (Defender):</span> Tanky with defensive capabilities.</li>
        </ul>

        <p className="text-lg text-gray-400 mt-4">
          The game also features many melee weapons. Switch to melee mode with the keybind &apos;Q&apos;.
        </p>
      </div>

      {/* How to Play */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          How to Play?
        </h2>
        <h3 className="text-2xl text-white mt-6">Capture the Flag (CTF)</h3>
        <p className="text-lg text-gray-400 mt-2">
          The default mode is <span className="font-bold">Capture the Flag (CTF)</span>. Two teams, <span className="font-bold">Red & Blue</span>, compete to capture three enemy flags before the other team.
        </p>
        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li>Your <span className="font-bold">teammates’ positions</span> are indicated by small white carats.</li>
          <li>The <span className="font-bold">enemy and allied flag</span> positions are marked with red & blue icons.</li>
        </ul>

        {/* Scoring System */}
        <h3 className="text-2xl text-white mt-6">Scoring System</h3>
        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li><span className="font-bold">Kill:</span> 10 pts</li>
          <li><span className="font-bold">Headshot:</span> +2 pts</li>
          <li><span className="font-bold">Long Range Kill:</span> +2 pts</li>
          <li><span className="font-bold">Assist:</span> +2 pts</li>
          <li><span className="font-bold">Flag Capture:</span> 100 pts</li>
          <li><span className="font-bold">Flag Grab:</span> 30 pts</li>
          <li><span className="font-bold">Flag Return:</span> 10 pts</li>
          <li><span className="font-bold">Carrier Kill:</span> 30 pts</li>
        </ul>
      </div>

      {/* Weekly Gamemodes */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Weekly Gamemodes
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          NarrowOne has rotating <span className="font-bold">weekly gamemodes</span> in addition to CTF. Some past modes include <span className="font-bold">Team Elimination</span> 
          and <span className="font-bold">Free For All (FFA)</span>. 
        </p>

        {/* King of the Hill */}
        <h3 className="text-2xl text-white mt-6">King of the Hill (KOTH) (Current Mode)</h3>
        <p className="text-lg text-gray-400 mt-2">
          <span className="font-bold">King of the Hill (KOTH)</span> has a <span className="font-bold">yellow bubble</span> in the center of the map where teams must hold position:
        </p>
        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li>Every <span className="font-bold">second inside the hill</span> gives <span className="font-bold">+1 point</span> for your team and personal score.</li>
          <li>The <span className="font-bold">first team to 250 points wins</span>.</li>
          <li>Standard scoring applies, except for flag-related points.</li>
        </ul>
      </div>

      {/* Earning Coins & Shop */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Coins & The Shop
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          After each match, you earn <span className="font-bold">coins</span> based on your total score. Coins can be used to buy:
        </p>
        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li><span className="font-bold">Cosmetics:</span> Customize your character’s appearance.</li>
          <li><span className="font-bold">Gear:</span> Unlock new bows and melee weapons with different stats.</li>
        </ul>
        <p className="text-lg text-gray-400 mt-4">
          For a full list of available items, check out the <span className="font-bold">Shop</span> in-game.
        </p>
      </div>

      {/* Keybinds Section */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Keybinds
        </h2>

        {/* PC Keybinds */}
        <h3 className="text-2xl text-white mt-6">PC Users</h3>
        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li><span className="font-bold">Q:</span> Switch weapon type (Bow ↔ Melee)</li>
          <li><span className="font-bold">WASD:</span> Movement keys (W - Forward, A - Left, S - Backward, D - Right)</li>
          <li><span className="font-bold">Tab:</span> View all players & their scores</li>
          <li><span className="font-bold">Esc:</span> Unlock cursor</li>
        </ul>

        {/* Mobile Users */}
        <h3 className="text-2xl text-white mt-6">Mobile Users</h3>
        <p className="text-lg text-gray-400 mt-2">
          Controls are icon-based and displayed on-screen.
        </p>
      </div>

      {/* Squads */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Squads & Private Matches
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Players can <span className="font-bold">join squads</span> to team up with others in public and private matches.
        </p>
        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li><span className="font-bold">M8M6 Squad:</span> A popular and active squad where the community gathers.</li>
          <li><span className="font-bold">Squad Chat:</span> Talk with teammates in the squad chat.</li>
          <li><span className="font-bold">Private Matches:</span> Play <span className="font-bold">1v1s</span> or team battles in custom lobbies.</li>
          <li><span className="font-bold">Spectator Mode:</span> Watch matches without playing.</li>
        </ul>
      </div>

      {/* Maps Guide */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Learn the Maps
        </h2>
        <Link
          href="https://docs.google.com/presentation/d/1YMrORqauBzO-XYvDiYlS1Vl6sQPFY7CsCXXDyMfj4cI/edit"
          target="_blank"
          className="mt-4 inline-block text-blue-400 hover:underline text-lg"
        >
          View the Maps Guide →
        </Link>
      </div>
      <br></br><br></br><br></br>
    </main>
  );
}
