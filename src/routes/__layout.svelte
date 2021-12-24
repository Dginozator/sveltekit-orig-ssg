<script>
  import "../app.css";
  import { mode } from '$app/env';
</script>

{#if mode != 'production'}
  <p>hrom</p>
  <script src="https://cdn.tailwindcss.com"></script>
{/if}
<slot />
<p>{mode}</p>