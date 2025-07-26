<script lang="ts">
  export let title: string;
  export let content: string;
  
  let isActive = false;
  
  function handleTouchStart() {
    isActive = true;
  }
  
  function handleTouchEnd() {
    isActive = false;
  }
</script>

<div 
  class="bg-gray-50 p-4 rounded-lg border border-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg dark:shadow-white dark:hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer {isActive ? 'bg-gray-100 dark:bg-gray-700 shadow-lg dark:shadow-md -translate-y-1' : ''}"
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
  on:touchcancel={handleTouchEnd}
>
  <h3 class="font-semibold text-lg mb-2">{title}</h3>
  <p>{content}</p>
</div>