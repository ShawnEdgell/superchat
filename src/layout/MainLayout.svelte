<script>
    export let showSettings;
    export let toggleSettings;
</script>

<div class="flex flex-col h-screen">
    <header class="bg-blue-600 text-white p-4 text-lg font-bold shadow-md sticky top-0 z-10 flex items-center">
      <img src="/logo-1.svg" alt="Logo" class="h-8 mr-2" /> <!-- Add this line -->
      SuperChat
      <button class="text-base bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow absolute top-3 right-4" on:click={toggleSettings}>
        {#if showSettings} Close {:else} Settings {/if}
      </button>
    </header>
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
</div>
