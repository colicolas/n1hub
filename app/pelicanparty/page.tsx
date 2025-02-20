import Link from "next/link";

export default function PelicanPartyPage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-200 px-8 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mt-16">
        <h1 className="text-7xl font-bold text-white tracking-tight">Pelican Party</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-2xl">
          Pelican Party Studios is an independent game development team founded by 
          Jesper van den Ende and Jurgen Hoogeboom. They specialize in accessible, 
          fun web-based games, with a focus on creativity and community engagement.
          <span className="text-fuchsia-200"> NOTE: this website is in no way affiliated with Pelican Party Studios and was made independently, for fun. </span>
        </p>
      </div>

      {/* Games Section */}
      <div className="mt-12">
        <h2 className="text-3xl text-center font-semibold text-white">Games by Pelican Party</h2>
        <div className="mt-4 flex max-w-4xl flex-wrap justify-center gap-4">
          {[
            { title: "Narrow.One", link: "https://narrow.one" },
            { title: "Floaty Flatmates", link: "https://floatyflatmates.com" },
            { title: "Raccoon Retail", link: "https://raccoonretail.com" },
            { title: "Ducklings.io", link: "https://ducklings.io" },
            { title: "Nugget Royale", link: "https://nuggetroyale.io" },
            { title: "Double Dodgers", link: "https://doubledodgers.com" },
          ].map(({ title, link }, idx) => (
            <Link
              key={idx}
              href={link}
              target="_blank"
              className="px-6 py-3 text-lg font-semibold text-gray-300 hover:text-white hover:bg-gray-800 transition rounded-md border border-gray-700"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      {/* External Links Section */}
      <div className="mt-12">
        <h2 className="text-3xl text-center font-semibold text-white">Additional Links</h2>
        <div className="mt-4 max-w-4xl flex flex-wrap justify-center gap-4">
          {[
            { title: "Official Website", link: "https://pelicanparty.co" },
            { title: "Pelican Party Games", link: "https://pelicanparty.games" },
            { title: "Discord Server", link: "https://discord.gg/pelican-party-519477170964267008" },
            { title: "Narrow.One Itch Page", link: "https://pelicanparty.itch.io/narrow-one" },
            { title: "Patreon", link: "https://www.patreon.com/c/pelicanpartystudios/home" },
            { title: "Interview with Poki", link: "https://medium.com/poki/pelican-party-d63fc69bb0f3" },
          ].map(({ title, link }, idx) => (
            <Link
              key={idx}
              href={link}
              target="_blank"
              className="px-6 py-3 text-lg font-semibold text-gray-300 hover:text-white hover:bg-gray-800 transition rounded-md border border-gray-700"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      {/* Interview Section */}
      <div className="mt-12 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-white">Interview with Poki</h2>
        <p className="text-gray-300 leading-relaxed mt-3">
          In a 2022 interview, Pelican Party discussed their origins, game development 
          philosophy, and collaboration with Poki. They shared insights into their creative 
          process, unique sound design methods (such as recording in trash cans), and their 
          decision to focus on browser-based games for accessibility.  
        </p>
        <Link
          href="https://medium.com/poki/pelican-party-d63fc69bb0f3"
          target="_blank"
          className="mt-3 text-blue-400 hover:underline"
        >
          Read the full interview →
        </Link>
      </div>

      {/* Contact */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-white">Contact</h2>
        <p className="text-gray-400 mt-2">For business inquiries, reach out to:</p>
        <p className="text-blue-400 mt-1 hover:underline">
          <a href="mailto:business@pelicanparty.co">business@pelicanparty.co</a>
        </p>
      </div>
      <br></br><br></br>
    </main>
  );
}
