<script>
    import { messages } from '../utils/store';
  
    let text = '';
  
    function sendMessage() {
      if (text.trim().length === 0) return;
      messages.update(currentMessages => {
        return [...currentMessages, {
          id: Date.now(),
          text,
          sender: localStorage.getItem('username') || 'anon', // Default to 'anon' if no username is set
          timestamp: Date.now(),
          usernameColor: localStorage.getItem('usernameColor') || '#0000ff' // Default to blue color if no color is set
        }];
      });
      text = ''; // Clear the input field after sending
    }
  </script>
  
  <form class="flex p-4" on:submit|preventDefault={sendMessage}>
    <input
      type="text"
      bind:value={text}
      placeholder="Type a message..."
      class="flex-1 p-2 border border-gray-300 rounded-l"
      autofocus
    />
    <button
      type="submit"
      class="bg-blue-500 text-white px-4 rounded-r"
    >
      Send
    </button>
  </form>
  