<template>
  <div class="flex min-h-screen items-center justify-center bg-slate-900 text-slate-100">
    <div class="max-w-4xl px-6 py-10">

      <h1 class="text-4xl font-bold mb-6">
        Francesco – Ingegnere Informatico
      </h1>

      <!-- FOTO + PARAGRAFI -->
      <div class="flex items-start space-x-6 mb-6">
        <!-- FOTO -->
        <img
          src="/francesco.jpg"
          alt="Foto di Francesco"
          class="w-40 h-auto rounded-lg shadow-lg object-cover"
        />

        <!-- TESTO -->
        <div class="space-y-4">
          <p class="text-lg">
            Sono un ingegnere informatico con oltre 20 anni di esperienza nel mondo IT,
            specializzato nello sviluppo software e nella progettazione di soluzioni robuste
            e scalabili.
          </p>

          <p class="text-lg">
            Ho realizzato questa applicazione web per documentare in modo strutturato le attività,
            le sfide tecniche e i percorsi di apprendimento che affronto.
             Un raccogliere di idee, approfondimenti, soluzioni e riflessioni professionali e non solo.  
            
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-semibold mt-6 mb-3">Esperienza professionale</h2>
      <p class="mb-3">
        Nel corso della mia carriera ho lavorato su progetti enterprise, sistemi gestionali
        e applicazioni web complesse, collaborando con team multidisciplinari e seguendo
        l’intero ciclo di vita del software: dall’analisi dei requisiti alla messa in
        produzione.
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">Competenze tecniche</h2>
      <ul class="list-disc list-inside space-y-1 mb-4">
        <li><span class="font-semibold">Java:</span> sviluppo backend, servizi REST, applicazioni enterprise.</li>
        <li><span class="font-semibold">PL/SQL:</span> logica lato database, ottimizzazione query, procedure e funzioni.</li>
        <li><span class="font-semibold">Vue.js:</span> interfacce moderne, componenti riutilizzabili, SPA.</li>
        <li><span class="font-semibold">Angular:</span> applicazioni web strutturate, architetture modulari.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6 mb-3">Approccio al lavoro</h2>
      <p class="mb-3">
        Mi piace unire rigore ingegneristico e pragmatismo: codice pulito, attenzione
        alle performance e cura per l’esperienza utente. Valuto le tecnologie in base
        al contesto, puntando sempre a soluzioni mantenibili nel tempo.
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">Cosa mi motiva</h2>
      <p>
        Mi motivano le sfide tecniche, i progetti in cui posso lasciare un impatto concreto
        e la possibilità di far crescere le persone con cui lavoro, condividendo conoscenza
        e buone pratiche di sviluppo.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
