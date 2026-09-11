<template>
  <footer class=" bg-black text-slate-300">
   
      

      <!-- Parte inferiore -->
      <div
        class="mt-2 flex flex-col items-center justify-between gap-2 border-t border-slate-700 pt-6 text-sm text-slate-400 md:flex-row"
      >
        <p>© {{ currentYear }} fviscomi@gmail.com </p>

        <p>Fatto con Vue &amp; Tailwind CSS</p>
      </div>
    <!-- </div> -->
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>