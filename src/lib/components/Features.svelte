<script lang="ts">
  export let features: string[] = [
    "Responsive design for both mobile and desktop",
    "Toggleable sidebar with smooth transitions",
    "Clean, modern, and center-aligned UI",
    "Built with Svelte and Tailwind CSS"
  ];
</script>

<h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Features</h2>
<ul class="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-300">
  {#each features as feature, index (index)}
    <li>{feature}</li>
  {/each}
</ul>