import Link from "next/link";

export default function MiscPage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-200 px-8 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mt-16">
        <h1 className="text-7xl latofont text-white tracking-tight">Miscellaneous</h1>
        <p className="text-lg text-gray-400 mt-3 max-w-2xl">
          A collection of additional NarrowOne documents, community reports, and useful guides.
        </p>
      </div>

      {/* Notable Documents */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Other Notable Documents
        </h2>
        <ul className="mt-4 space-y-4">
          <li>
            <LinkItem title="NarrowOne Esports Leaderboard" url="https://docs.google.com/spreadsheets/d/196w0d94oaSok0pxxYTJgsYsToE8TeAkx0vcNhyH8-uU/edit?gid=1401887602#gid=1401887602" />
          </li>
          <li>
            <LinkItem title="Kuro Document" url="https://docs.google.com/document/d/1djp5jTlOPEI8wybsrM9nHHKPZej01XcwSowbfJx35rI/edit?tab=t.0" description="A document by Kuro exposing community issues, including moderation concerns, favoritism, and offensive behavior." />
          </li>
          <li>
            <LinkItem title="Sleeky Document" url="https://docs.google.com/document/d/18haRgDpvZkX17ZZW9Yv9WlnIeTlIw8HYfgv4KXOGwzY/edit?tab=t.0" description="A report detailing allegations of deception and grooming within the community." />
          </li>
        </ul>
      </div>

      {/* Notable Links */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Other Notable Links
        </h2>
        <ul className="mt-4 space-y-4">
          <li>
            <LinkItem title="Maps Guide" url="https://docs.google.com/presentation/d/1YMrORqauBzO-XYvDiYlS1Vl6sQPFY7CsCXXDyMfj4cI/edit?usp=sharing" />
          </li>
        </ul>
      </div>
    </main>
  );
}

// Reusable Link Component
function LinkItem({ title, url, description }: { title: string; url: string; description?: string }) {
  return (
    <div>
      <Link href={url} target="_blank" className="text-blue-400 hover:underline text-lg">
        {title}
      </Link>
      {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
    </div>
  );
}
