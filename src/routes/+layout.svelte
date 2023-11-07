<!-- src/routes/+layout.svelte -->
<script>
    import "../app.css";
  </script>
  
  <nav class="text-gray-800 p-4">
    <ul class="flex space-x-4 justify-center">
      <li><a href="/" class="hover:text-gray-500">Home</a></li>
      <li><a href="/about" class="hover:text-gray-500">About</a></li>
      <li><a href="/chat" class="hover:text-gray-500">Chat</a></li>
    </ul>
  </nav>
  
  <main class="p-8">
    <slot></slot>
  </main>
  
  <footer class="text-gray-800 text-center p-4">
    &copy; 2023 SuperChat
  </footer>
  