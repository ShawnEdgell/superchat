<script>
    export let message;
    export let usernameColor;
  </script>
  
  <div class="flex items-center space-x-2 p-2 my-1 bg-white rounded-lg shadow">
    <span class="text-xs text-gray-500">
      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
    <span class="text-sm font-semibold" style="color: {usernameColor || 'currentColor'}">{message.sender}</span>
    <p class="text-gray-800 break-words flex-1">{message.text}</p>
  </div>
  