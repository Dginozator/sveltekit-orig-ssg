<script>
  import "../app.css";
  import { mode } from '$app/env';
</script>

{#if mode != 'production'}
  <script src="https://cdn.tailwindcss.com"></script>
{/if}
<slot />