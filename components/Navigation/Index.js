import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="/">
        <button>Spotlight</button>
      </Link>
      <Link href="/artpieces">
        <button>Gallery</button>
      </Link>
    </div>
  );
}
