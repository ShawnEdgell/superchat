<script>
    import { messages } from '../utils/store';
    import Message from './Message.svelte'; // Make sure this path is correct
    import { tick } from 'svelte';

    let messageListElement;

    // This function will scroll to the last message if there are messages
    const scrollToBottom = () => {
        tick().then(() => {
            if (messageListElement && messageListElement.lastElementChild) {
                messageListElement.lastElementChild.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    // Call scrollToBottom whenever the messages update
    $: $messages, scrollToBottom();
</script>

<style>
    .message-list {
        height: 100%; /* Adjust this if needed */
        overflow-y: auto; /* Enables scrolling */
    }
</style>

<div class="message-list" bind:this={messageListElement}>
    {#each $messages as message (message.id)}
        <Message {message} usernameColor={message.usernameColor} />
    {/each}
</div>
