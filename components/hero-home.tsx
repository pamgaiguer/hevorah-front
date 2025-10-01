export function HeroHome() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundColor: '#000'}}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
          <img className="h-4/5 object-cover" src="../logos/hevorah-main-logo.png" alt="" />
        </h1>
        <h6 className='text-xl text-chart-5 font-thin space tracking-widest'>
          <em>Soon...</em>
        </h6>
      </div>
    </section>
  )
}
