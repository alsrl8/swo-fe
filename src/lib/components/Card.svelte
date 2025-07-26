<script lang="ts">
  export let title: string | undefined = undefined;
</script>

<div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
  {#if title}
    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{title}</h2>
  {/if}
  <slot />
</div>