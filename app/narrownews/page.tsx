import Link from "next/link";

export default function NarrowNewsPage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-200 px-8 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mt-16">
        <h1 className="text-7xl latofont text-white tracking-tight">Narrow News</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-3xl">
          Narrow News is a network of projects related to <span className="font-bold">Narrow One</span>. It includes news coverage, data tracking, 
          awards, player rankings, and various community-driven initiatives. 
          Policies and structure are outlined in the{" "}<Link href="https://docs.google.com/document/d/1sqF1-twAN0hlUzCBolCaJp3rvd6WwOpGqK3rqZLD7O4/edit?tab=t.0#heading=h.knvxjrbqe7b1" target="_blank" className="text-blue-400 hover:underline">
            Narrow News Policies.</Link>
          {" "}Alongside these various projects, the Narrow News team also provides daily updates and recaps on everything that happens in the Pelican Party Discord server in <Link href=" https://discord.com/channels/519477170964267008/1235569529409769554" className="text-blue-400 hover:underline">this thread</Link>. Join the server <Link href="https://discord.com/invite/pelican-party-519477170964267008" className="text-blue-400 hover:underline">here</Link>.
        </p>
      </div>

      {/* Narrow News Projects */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Narrow News Projects
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Narrow News includes multiple projects, each contributing to different aspects of the community.
        </p>

        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li><span className="font-bold">Narrow News Collection:</span> Tactics, shop spreadsheet, version history, and player values.</li>
          <li><span className="font-bold">Narrow One Player Wiki:</span> A database of players in the community.</li>
          <li><span className="font-bold">Narrow One Hall of Fame:</span> Recognizing key players and contributors.</li>
          <li><span className="font-bold">Narrow One Records:</span> A list of significant records in the game.</li>
          <li><span className="font-bold">1v1 Tracker:</span> A spreadsheet tracking competitive 1v1 matches.</li>
          <li><span className="font-bold">Narrow One Awards:</span> Annual recognition of top players, clans, and updates.</li>
        </ul>
      </div>

      {/* Narrow News Wiki */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Narrow News Wiki
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          The Narrow News Wiki is being recreated as part of this site. Check back soon for updates!
        </p>
        <Link
          href="/narrownews/wiki"
          className="mt-4 inline-block text-blue-400 hover:underline text-lg"
        >
          Visit the Narrow News Wiki →
        </Link>
      </div>

      {/* Hall of Fame */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Narrow News Hall of Fame
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Recognizing legendary players and community members.
        </p>
        <Link
          href="https://docs.google.com/document/d/1MNKvif5sAYDwxzWmeTGvSem6rJpqidlG8PneYsx1Q90/edit?tab=t.0"
          target="_blank"
          className="mt-4 inline-block text-blue-400 hover:underline text-lg"
        >
          View the Hall of Fame →
        </Link>
      </div>

      {/* Narrow News League */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Narrow News League
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          A structured <span className="font-bold">tournament system</span> designed to create a competitive scene in Narrow One. 
          Players compete in three skill-based divisions: 
        </p>
        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li><span className="font-bold">Archers Division:</span> Top-tier players.</li>
          <li><span className="font-bold">Marksmen Division:</span> Mid-tier players.</li>
          <li><span className="font-bold">Recruit Division:</span> Entry-level players proving their skills.</li>
        </ul>
        <Link
          href="https://docs.google.com/document/d/1bsUkqRWB7L7ZXV51HAIxxv11V4Odah1TBAOutZh2948/edit?tab=t.0"
          target="_blank"
          className="mt-4 inline-block text-blue-400 hover:underline text-lg"
        >
          View Tournament Details →
        </Link>
      </div>

      {/* Narrow News Staff */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Narrow News Team
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          The Narrow News team consists of various contributors across different roles.
        </p>

        <ul className="list-disc text-gray-400 ml-6 mt-4 space-y-2">
          <li><span className="font-bold">Owner:</span> Lolopano</li>
          <li><span className="font-bold">Journalists:</span> Grim Reaper, Hotdogman, Infurness, Liya, Lolopano</li>
          <li><span className="font-bold">Video Journalists:</span> Hotdogman, Lolopano</li>
          <li><span className="font-bold">Other Associate:</span> Farlands</li>
          <li><span className="font-bold text-red-400">Blacklisted:</span> Sleeky</li>
        </ul>
      </div>

      {/* Esports Performance Rankings */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Esports Performance Rankings
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Tracking top-performing players in Narrow One tournaments.
        </p>
        <Link
          href="https://docs.google.com/spreadsheets/d/1vKja-8CZyjtDbcGuXl5RdtczQ-h_ihdKzMv5ttmgpNA/edit?gid=0#gid=0"
          target="_blank"
          className="mt-4 inline-block text-blue-400 hover:underline text-lg"
        >
          View Rankings →
        </Link>
      </div>

      {/* Narrow One Shop */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Narrow One Shop Data
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          A comprehensive list of all shop items and their coin costs.
        </p>
        <Link
          href="https://docs.google.com/spreadsheets/d/10ULdoi4O4la_1ZMU14o3Pc_r0ontvfEPRGfbLbplD-4/edit?gid=0#gid=0"
          target="_blank"
          className="mt-4 inline-block text-blue-400 hover:underline text-lg"
        >
          View Shop Data →
        </Link>
      </div>

      {/* Player Skins Repository */}
      <div className="mt-12 w-full max-w-3xl mb-16">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Player Skins Repository
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          A collection of Narrow One player skins curated by Lolopano.
        </p>
        <Link
          href="https://lolopano.github.io/"
          target="_blank"
          className="mt-4 inline-block text-blue-400 hover:underline text-lg"
        >
          Browse Skins →
        </Link>
      </div>

      {/* Credits */}
      <div className="mt-5 w-full max-w-3xl mb-16 text-center">
        <p className="text-lg text-gray-400 mt-4">
          Credits to the <span className="font-bold">Narrow News Team</span> for compiling and maintaining all of this information. 
          Their efforts keep the community informed and engaged!
        </p>
      </div>

    </main>
  );
}
