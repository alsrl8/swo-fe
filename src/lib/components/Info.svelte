<script lang="ts">
  import InfoCard from './InfoCard.svelte';
  export let title: string = "Welcome to SWO Frontend";
</script>

<h1 class="text-3xl font-bold dark:text-gray-100 text-gray-800 mb-4">{title}</h1>
<p class="text-gray-600 mb-4 dark:text-gray-400">
  This is a modern, responsive application with a clean design and a toggleable sidebar.
</p>
<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
  <p class="text-blue-700">
    <strong>Responsive Design:</strong> This app has different layouts for mobile and desktop viewports.
  </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  <InfoCard 
    title="Mobile View" 
    content="On smaller screens, the sidebar is hidden by default to maximize content space." 
  />
  <InfoCard 
    title="Desktop View" 
    content="On larger screens, the sidebar is visible by default for easy navigation." 
  />
</div>