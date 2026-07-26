import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl font-bold text-ruby-light">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to the
        casinos.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/casinos" className="btn-outline">
          View top casinos
        </Link>
      </div>
    </section>
  );
}
