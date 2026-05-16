export function LogoStrip() {
  return (
    <section className="bg-secondary py-8">
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-center gap-12 flex-wrap">
        {/* Client logos — replace with real images from public/clients */}
        {["Client A", "Client B", "Client C", "Client D", "Client E"].map((name) => (
          <span key={name} className="text-muted-foreground text-sm font-medium">
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
