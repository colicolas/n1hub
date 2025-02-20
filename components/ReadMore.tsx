import Link from "next/link";

interface ReadMoreProps {
  href: string;
}

export default function ReadMore({ href }: ReadMoreProps) {
  return (
    <Link href={href} className="text-blue-600 hover:underline mt-2 inline-block">
      Read More →
    </Link>
  );
}
