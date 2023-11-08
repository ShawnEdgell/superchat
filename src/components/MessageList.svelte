<script>
    import { messages } from '../utils/store';
    import Message from './Message.svelte'; // Make sure this path is correct
  </script>
  
  <div class="message-list">
    {#each $messages as message (message.id)}
      <Message {message} usernameColor={message.usernameColor} />
    {/each}
  </div>
  