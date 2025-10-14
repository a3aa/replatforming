export default function Banner() {
  return (
    <div className="hero min-h-[70vh]" style={{
      backgroundImage: "url('/banner-laurea.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Crea il tuo papiro di laurea!</h1>
          <p className="mb-5">
            Personalizza immagini, testi e colori per celebrare la tua laurea con stile 🎉
          </p>
          <a href="/crea-papiro-di-laurea" className="btn btn-primary">Inizia ora</a>
        </div>
      </div>
    </div>
  );
}