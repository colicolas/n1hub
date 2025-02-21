import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-black text-gray-200 px-8 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mt-16">
        <h1 className="text-7xl latofont text-white tracking-tight">About This Website</h1>
      </div>

      {/* Content */}
      <div className="mt-8 max-w-2xl text-center">
        <p className="text-lg text-gray-400">
          Hi, I&apos;m colicola! I wanted to turn the original NarrowOne Hub document into a web app for fun 
          because I was bored. You can reach me on Discord; my username is <span className="font-bold">colicolas</span>.
        </p>
        <p className="text-lg text-gray-400 mt-4">
          Most of the information here comes from the amazing <span className="font-bold">NarrowNews</span> team.
          If you want to see the original document with all the details, check it out here:
        </p>

        {/* Link to Original Doc */}
        <Link
          href="https://docs.google.com/document/d/1G57ZIUMRuu7kkWGZ9EXNfATMKEIoJbFu78VkgUS-LE0/edit?tab=t.0"
          target="_blank"
          className="mt-4 inline-block text-blue-400 hover:underline text-lg"
        >
          View the Original NarrowOne Hub Document →
        </Link>
      </div>
    </main>
  );
}
