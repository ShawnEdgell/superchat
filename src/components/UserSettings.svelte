<script>
    import { writable } from 'svelte/store';
  
    // Create a store to hold the username and color values
    export const usernameStore = writable(localStorage.getItem('username') || 'anon');
    export const usernameColorStore = writable(localStorage.getItem('usernameColor') || '#9CA3AF');
  
    export let closeSettings;
  
    // Subscribe to store changes to update localStorage
    usernameStore.subscribe(value => {
      localStorage.setItem('username', value);
    });
    usernameColorStore.subscribe(value => {
      localStorage.setItem('usernameColor', value);
    });
  
    // Initialize the username and color with values from localStorage
    let username = $usernameStore;
    let usernameColor = $usernameColorStore;
  
    const saveSettings = () => {
      if (username.trim() === '') {
        username = 'anon'; // Default to 'anon' if no username is set
      }
      usernameStore.set(username);
      usernameColorStore.set(usernameColor);
      closeSettings();
    };
  </script>
  
  <div class="bg-white rounded-lg p-5 shadow-lg w-full max-w-md">
    <h2 class="text-lg font-semibold mb-4">User Settings</h2>
    <div class="mb-4">
      <label for="username" class="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input
        type="text"
        id="username"
        bind:value={username}
        placeholder="Enter your username"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  
    <div class="mb-6">
      <label for="usernameColor" class="block text-gray-700 text-sm font-bold mb-2">
        Username Color
      </label>
      <input
        type="color"
        id="usernameColor"
        bind:value={usernameColor}
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-16"
      />
    </div>
  
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        on:click={saveSettings}
      >
        Save
      </button>
  
      <button
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        on:click={closeSettings}
      >
        Cancel
      </button>
    </div>
  </div>
  