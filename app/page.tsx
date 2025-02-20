import ReadMore from "./components/ReadMore";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600">
          NarrowOne Hub
        </h1>
        <p className="text-center text-gray-600 mt-2">
          A collection of the most important links and resources for NarrowOne.
        </p>

        {/* Sections */}
        <div className="mt-8 space-y-8">
          {/* What is NarrowOne? */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-500">What is NarrowOne?</h2>
            <p className="text-gray-700 mt-2">
              NarrowOne is an online multiplayer archery game by Pelican Party Studios,
              featuring skill-based combat and competitive gameplay.
            </p>
          </div>

          {/* PelicanParty */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-500">PelicanParty</h2>
            <p className="text-gray-700 mt-2">
              Pelican Party Studios is the developer behind NarrowOne and other
              popular web-based games.
            </p>
            <ReadMore href="/pelicanparty" />
          </div>

          {/* Clans */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-500">Clans</h2>
            <p className="text-gray-700 mt-2">
              A collection of known NarrowOne clans and their resources.
            </p>
            <ReadMore href="/clans" />
          </div>

          {/* NarrowNews Projects */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-500">NarrowNews Projects</h2>
            <p className="text-gray-700 mt-2">
              NarrowNews covers community events, leagues, and records in NarrowOne.
            </p>
            <ReadMore href="/narrownews" />
          </div>

          {/* Mods */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-500">Mods</h2>
            <p className="text-gray-700 mt-2">
              A collection of NarrowOne community mods and repositories.
            </p>
            <ReadMore href="/mods" />
          </div>

          {/* Other Notable Documents & Links */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-500">Other Notable Documents & Links</h2>
            <p className="text-gray-700 mt-2">
              Additional resources, leaderboards, and guides for NarrowOne.
            </p>
            <ReadMore href="/notable-links" />
          </div>
        </div>
      </div>
    </main>
  );
}
