import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900">
          GrupoRybert
        </h1>

        <p className="mt-2 text-slate-600">
          Sistema base de administración GrupoRybert.
        </p>

        <div className="mt-6">
          <Link
            href="/personas"
            className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Ir al módulo Personas
          </Link>
        </div>
      </div>
    </main>
  )
}