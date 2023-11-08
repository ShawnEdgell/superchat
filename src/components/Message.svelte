<script>
    export let message;
    export let usernameColor; // This will be the color for the username text
</script>

<div class="flex items-baseline space-x-2 p-2">
    <span class="text-sm ms-2 text-gray-500">
      {new Date(message.timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
    </span>
    <span class="text-md font-semibold" style="color: {usernameColor || 'currentColor'}">
      {message.sender}
    </span>
    <p class="flex-1 text-md text-gray-800 break-words">
      {message.text}
    </p>
</div>
