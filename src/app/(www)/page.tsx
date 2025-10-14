import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
     <>
      <Banner />
      <div className="text-center py-10">
        <h2 className="text-3xl font-semibold mb-4">Come funziona</h2>
        <p className="max-w-xl mx-auto">
          Scegli il tuo modello di papiro, aggiungi testi divertenti, immagini e meme,
          poi scaricalo in alta qualità per stamparlo o condividerlo!
        </p>
      </div>
    </>
  );
}
