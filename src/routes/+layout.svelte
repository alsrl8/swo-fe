<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

 let { children } = $props();
 let sidebarOpen = $state(false);

 // Function to toggle sidebar
 function toggleSidebar() {
 	sidebarOpen = !sidebarOpen;
 }

 // Initialize sidebar state on mount
 onMount(() => {
 	// Keep the sidebar collapsed by default
 	sidebarOpen = false;
 });
</script>

<div class="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors">
	<!-- Main content -->
	<div class="flex-1 flex flex-col overflow-hidden">
		<!-- Sidebar (moved to right side) -->
  <div class={`bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0'} overflow-hidden absolute right-0 top-[5rem] h-[calc(100%-5rem)] z-10`}>
			<div class="p-4">
				<h2 class="text-xl font-bold mb-4 dark:text-white">SWO App</h2>
				<nav>
					<ul class="space-y-2">
						<li><a href="/" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">Home</a></li>
      <li><a href="/dashboard" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">Dashboard</a></li>
						<li><button type="button" class="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">Settings</button></li>
						<li><button type="button" class="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">Profile</button></li>
					</ul>
				</nav>
			</div>
		</div>
		<!-- Header -->
		<header class="bg-white dark:bg-gray-800 shadow-sm transition-colors">
			<div class="flex items-center justify-between p-4">
				<h1 class="text-xl font-semibold dark:text-white">SWO Frontend</h1>
				<div class="flex items-center space-x-2">
					<ThemeToggle />
     <button 
						onclick={toggleSidebar}
						class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors"
						aria-label="Toggle sidebar"
					>
						<!-- Hamburger icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:text-white"  viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</header>

		<!-- Page content -->
		<main class="flex-1 overflow-auto p-4 md:p-6 text-black dark:text-gray-200 transition-colors">
			<div class="max-w-4xl mx-auto">
				{@render children()}
			</div>
		</main>
	</div>
</div>

<style>
</style>
