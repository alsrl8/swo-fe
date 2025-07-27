<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();
	let sidebarOpen = $state(false);
	type MenuKey = 'learning';  // 향후 다른 메뉴가 추가될 경우 여기에 추가

	let expandedMenus = $state<Record<MenuKey, boolean>>({
		learning: false
	});

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	function toggleSubmenu(menuKey: MenuKey) {
		expandedMenus[menuKey] = !expandedMenus[menuKey];
	}

	onMount(() => {
		sidebarOpen = false;
	});
</script>

<div class="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors">
	<!-- Main content -->
	<div class="flex-1 flex flex-col overflow-hidden">
		<!-- Sidebar (moved to right side) -->
		<div
			class={`bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0'} overflow-hidden absolute right-0 top-[5rem] h-[calc(100%-5rem)] z-10`}>
			<div class="p-4">
				<h2 class="text-xl font-bold mb-4 dark:text-white">SWO App</h2>
				<nav>
					<ul class="space-y-2">
						<li><a href="/"
									 class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">Home</a>
						</li>
<!--						<li><a href="/dashboard"-->
<!--									 class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">Dashboard</a>-->
<!--						</li>-->

						<!-- Learning menu with submenu -->
						<li>
							<button
								type="button"
								class="flex items-center justify-between w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors"
								onclick={() => toggleSubmenu('learning')}
							>
								<span>러닝</span>
								<svg
									class={`w-5 h-5 transition-transform duration-300 ${expandedMenus.learning ? 'transform rotate-180' : ''} fill-current`}
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 9L12 15L18 9"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="transition-all duration-300"
									/>
								</svg>
							</button>

							{#if expandedMenus.learning}
								<ul
									class="pl-4 mt-1 space-y-1"
									transition:slide={{ duration: 300, easing: quintOut }}
								>
									<li>
										<a href="/competition-list"
											 class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">
											대회 목록
										</a>
									</li>
								</ul>
							{/if}
						</li>

						<li><a href="/restaurant-recommendation"
									 class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">맛집
							추천</a></li>
<!--						<li>-->
<!--							<button type="button"-->
<!--											class="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">-->
<!--								Settings-->
<!--							</button>-->
<!--						</li>-->
<!--						<li>-->
<!--							<button type="button"-->
<!--											class="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 rounded transition-colors">-->
<!--								Profile-->
<!--							</button>-->
<!--						</li>-->
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
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:text-white" viewBox="0 0 24 24"
								 stroke="currentColor">
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
