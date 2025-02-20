import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-black text-gray-200 items-center p-8">
      <div className="mt-20 mb-5 text-center">
        <h1 className="text-8xl mt-30 w-full latofont text-white">NarrowOne<br></br> Hub🏹</h1>
        <p className="text-lg text-gray-400 mt-3">
          A collection of the most important links and resources for NarrowOne.
        </p>
      </div>


      <div className="mt-16 w-full max-w-4xl flex flex-wrap justify-center gap-4">
        {[
          { title: "What is NarrowOne?", link: "/guide" },
          { title: "PelicanParty", link: "/pelicanparty" },
          { title: "Clans", link: "/clans" },
          { title: "NarrowNews Projects", link: "/narrownews" },
          { title: "Mods", link: "/mods" },
          { title: "Misc", link: "/misc" },
        ].map(({ title, link }, idx) => (
          <Link
            key={idx}
            href={link}
            className="px-6 py-3 text-lg font-semibold text-gray-300 hover:text-white hover:bg-gray-800 transition rounded-md border border-gray-700"
          >
            {title}
          </Link>
        ))}
      </div>
    </main>
  );
}
