<script>
  import MainLayout from './layout/MainLayout.svelte';
  import MessageList from './components/MessageList.svelte';
  import MessageInput from './components/MessageInput.svelte';
  import UserSettings from './components/UserSettings.svelte';

  let showSettings = false;

  function toggleSettings() {
    showSettings = !showSettings;
  }

  function closeSettings() {
    showSettings = false;
  }
</script>

<MainLayout {showSettings} {toggleSettings}>
  <div class="flex flex-col h-full">
    <MessageList />
    <div class="mt-auto">
      <MessageInput />
    </div>
    {#if showSettings}
      <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <UserSettings {closeSettings} />
      </div>
    {/if}
  </div>
</MainLayout>

<style>
  /* Global styles */
  :global(html), :global(body) {
    height: 100%;
    margin: 0;
  }
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: #edf2f7; /* A light grey background */
  }
</style>

