// src/main.js
import './global.css'; // This imports global styles
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
