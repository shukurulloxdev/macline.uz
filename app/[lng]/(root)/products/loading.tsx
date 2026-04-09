export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl py-6">
      <div className="flex gap-4">
        <aside className="w-72">
          <div className="sticky top-36 space-y-6">
            <div className="h-[520px] animate-pulse rounded-3xl bg-neutral-100" />
          </div>
        </aside>

        <div className="flex-1">
          <div className="mb-6 h-10 w-72 animate-pulse rounded-2xl bg-neutral-100" />

          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-neutral-100 bg-white"
              >
                <div className="h-[220px] animate-pulse bg-neutral-100" />
                <div className="space-y-3 p-4">
                  <div className="h-4 w-3/4 animate-pulse rounded-lg bg-neutral-100" />
                  <div className="h-4 w-1/2 animate-pulse rounded-lg bg-neutral-100" />
                  <div className="h-8 w-1/3 animate-pulse rounded-lg bg-neutral-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
