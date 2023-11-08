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
        placeholder="Say something..."
        class="flex-1 p-4 text-lg border border-gray-300 rounded-lg text-gray-700"
        style="height: 3.5rem;"
    />
    <!-- Removed the button as the form will be submitted with the Enter key -->
</form>
