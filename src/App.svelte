<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style  global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');
</style>

<Router {routes} />