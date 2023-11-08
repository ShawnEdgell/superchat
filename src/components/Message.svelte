<script>
    export let message;
    export let usernameColor; // This will be the color for the username text
</script>

<div class="flex items-baseline space-x-2 p-2">
    <span class="text-sm ms-2 text-gray-500"> <!-- Updated text size -->
      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
    <span class="text-md font-semibold" style="color: {usernameColor || 'currentColor'}"> <!-- Updated text size -->
      {message.sender}
    </span>
    <p class="flex-1 text-md text-gray-800 break-words"> <!-- Updated text size -->
      {message.text}
    </p>
</div>
