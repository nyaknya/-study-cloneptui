import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container max-w-7xl flex justify-between py-8 sm:px-6 lg:px-8 mx-auto">
      <div className="flex gap-14 items-center">
        <h1>
          <Link href="/">
            <Image src="/images/logo.svg" alt="" width={106} height={40} />
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-12 text-sm text-gray-600">
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Reviews</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">FAQs</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-sm">
        <button className="border hover:border-gray-400 transition-all py-2 px-3 text-gray-600  rounded-md">
          Log in
        </button>
        <button className="ml-8 text-white font-semibold bg-gray-800 hover:bg-gray-900 transition-all py-2 px-3 rounded-md">
          Download
        </button>
      </div>
    </header>
  );
}
