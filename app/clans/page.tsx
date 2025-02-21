import Link from "next/link";
import Image from "next/image";

export default function ClansPage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-200 px-8 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mt-16">
        <h1 className="text-7xl text-white latofont tracking-tight">NarrowOne Clans</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-2xl">
          Clans in NarrowOne are groups of players who share similar interests, playstyles, 
          and goals. Clan members participate in competitive matches, tournaments, and community 
          events. All clan activity is primarily managed through the 
          <Link href="https://discord.com/invite/b8UkXPhm5m" target="_blank" className="text-blue-400 hover:underline">
            {" "}NarrowOne Esports Discord
          </Link>.
        </p>
      </div>

      {/* Clan Sections */}
      <div className="mt-12 w-full max-w-3xl space-y-12">
        
        {/* 2 Shots (2S) */}
        <ClanSection
          name="2 Shots (2S)"
          description="Players who are unsatisfied with the invincibility system because it only favors players other than themselves. Some situations we experience it feels like dying to only 2 shots from enemies, while enemies take 2-3 extra arrows to die, resulting in you also dying unfairly. Founded by kurokur0kurO, 2S membership offers benefits, like participating in organized Clan games, chance to appear on 2 Shots YouTube channel, organized trolling and gets you prioritized for 1v1 other clan members. Clan members use a shared account, “two es”, to play together with all gear unlocked."
          joinMethod={[
            "Leave all other clans before joining.",
            "Join the 2S Discord and get manually verified.",
            "Engage in clan games and be active in the community."
          ]}
          links={[
            { title: "Official Website", url: "https://2sclan.glitch.me/" },
            { title: "Discord", url: "https://discord.gg/8dSzPTD5EM" },
            { title: "YouTube", url: "https://www.youtube.com/@2Shots.N1" }
          ]}
          logo="/clans/2s.png"
        />

        {/* Royal Kingdom (RK) */}
        <ClanSection
          name="Royal Kingdom (RK)"
          description="Founded by Narrow Lord, later taken over by Choco [2023-10-27]. The Royal kingdom values ideals of sportsmanship, respect, honor, and moral virtue, and values it far more than it values skills with games. The clan highly regard the values of resilience, humility, bravery, compassion, wisdom, and fairness. Royal Kingdom Members are expected to be honorable and respectful in all matters representing and regarding the clan."
          joinMethod={[
            "Most up-to-date join requirements are listed on their Discord.",
          ]}
          links={[
            { title: "Official Website", url: "https://royal-kingdom-narrow-one.glitch.me/" },
            { title: "Discord", url: "https://discord.gg/WCUFKW2qpE" }
          ]}
          logo="/clans/rk.png"
        />

        {/* Talent7 (T7) */}
        <ClanSection
          name="Talent7 (T7)"
          description="T7 hereby officially recognizes and places significant value on the mastery of seven essential talents in Narrow One: Accuracy, Speed, Parkour, Bow Versatility, PvP IQ, Sportsmanship, and Adaptability. Our conviction is that a player attains the status of a 'pro' by demonstrating proficiency in all seven talents. Established by KAIJIN, T7 is a clan dedicated to cultivating a community where members can refine their skills and excel in the various aspects of Narrow One. We remain steadfast in our commitment to promoting excellence, sportsmanship, and camaraderie within our clan."
          links={[
            { title: "Discord", url: "https://discord.gg/AWfAQywMYW" }
          ]}
          logo="/clans/t7.png"
        />

        {/* Under Dogs (UD) */}
        <ClanSection
          name="Under Dogs (UD)"
          description="In a world where precision, skill, and tactics reign supreme, the Underdogs have proven time and time again that they are not to be underestimated. With every arrow they release, they defy expectations, showing that it's not the size of the clan that matters, but the size of the heart and the sharpness of the aim. They may not always have the most powerful bows or the largest numbers, but what they lack in resources, they make up for with grit, teamwork, and a fearless desire to challenge the best. So, as we gather new members, remember one thing: the Underdogs may be underestimated, but they are never defeated. May their arrows fly true, and may their legend grow even stronger with each victory."
          joinMethod={[
            "Join the Discord and follow the provided guidelines."
          ]}
          links={[
            { title: "Discord", url: "https://discord.gg/vZZEU93A7C" },
            { title: "YouTube", url: "https://www.youtube.com/@N1goats" }
          ]}
          logo="/clans/ud.png"
        />

        {/* 69 */}
        <ClanSection
          name="69"
          description="We like sex."
          links={[
            { title: "Discord", url: "https://discord.gg/TDC4jNCcxR" }
          ]}
          logo="/clans/69.png"
        />

        {/* X */}
        <ClanSection
          name="X"
          description="X welcomes players of varying skill levels and does not require you to make it your primary clan; it can be a secondary or even tertiary affiliation. We emphasize rekindling the competitive spirit through structured practices that challenge and excite our members. Our sole rule is that the best always win in the end. As you compete and strive for a spot among the 10 Prodigies, you will embody the values of excellence, dedication, and continuous improvement. Join us to prove your skills in a clan where only the best thrive and where every member's journey is fueled by the pursuit of greatness."
          joinMethod={[
            "Pass a 1v1 or classic match challenge.",
            "Show consistent high performance.",
            "Demonstrate sportsmanship and a competitive spirit."
          ]}
          links={[
            { title: "Discord", url: "https://discord.com/invite/j5QtyqAmeF" }
          ]}
          logo="/clans/x.png"
        />
      </div>

      {/* Outdated Clans Doc */}
      <div className="mt-16 text-center">
        <p className="text-gray-400">
          For an outdated list of NarrowOne clans, check out the original document:
        </p>
        <Link
          href="https://docs.google.com/document/d/1jpBQZz6LiVQmxPFkC_6yS0KhsfC5WzeHVJlJNJu5u-w/edit?tab=t.0"
          target="_blank"
          className="text-blue-400 hover:underline mt-2 inline-block"
        >
          View Outdated Clan List →
        </Link>
        <br></br><br></br><br></br>
      </div>
    </main>
  );
}

function ClanSection({ name, description, joinMethod, links, logo }: {
  name: string;
  description: string;
  joinMethod?: string[];
  links?: { title: string; url: string }[];
  logo: string;
}) {
  return (
    <div className="border-b border-gray-700 pb-8">
      <div className="flex items-center gap-4">
        <Image src={logo} alt={`${name} Logo`} width={80} height={80} className="rounded-lg" />
        <h2 className="text-3xl font-semibold text-white">{name}</h2>
      </div>
      <p className="text-gray-300 mt-3">{description}</p>
      {joinMethod && (
        <div className="mt-3">
          <h3 className="text-xl text-blue-400">How to Join:</h3>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            {joinMethod.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      )}
      {links && (
        <div className="mt-3 flex flex-wrap gap-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              target="_blank"
              className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition rounded-md border border-gray-700"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
