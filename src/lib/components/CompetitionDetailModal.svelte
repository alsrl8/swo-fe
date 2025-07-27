<script lang="ts">
	// Competition Detail Modal Component
	
	// Define props
	let { competition, show } = $props<{
		competition: {
			name: string;
			date: string;
			location: string;
			status: string;
			statusClass: string;
		} | null;
		show: boolean;
	}>();
</script>

{#if show && competition}
	<!-- Modal container - positioned absolutely without background overlay -->
	<div class="absolute inset-0 z-50 flex items-center justify-center p-4">
		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
			<div class="p-6">
				<h3 class="text-lg font-bold mb-4 dark:text-white">{competition.name}</h3>
				
				<div class="space-y-3">
					<div>
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400">Date</p>
						<p class="text-gray-900 dark:text-white">{competition.date}</p>
					</div>
					
					<div>
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
						<p class="text-gray-900 dark:text-white">{competition.location}</p>
					</div>
					
					<div>
						<p class="text-sm font-medium text-gray-500 dark:text-gray-400">Status</p>
						<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {competition.statusClass}">
							{competition.status}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}