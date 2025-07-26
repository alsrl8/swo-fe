<script lang="ts">
	// Competition List page component
	import CompetitionDetailModal from '$lib/components/CompetitionDetailModal.svelte';
	
	// Interface for competition data
	interface Competition {
		name: string;
		date: string;
		location: string;
		status: string;
		statusClass: string;
	}
	
	// Sample competition data
	const competitions: Competition[] = [
		{
			name: '2025 Summer Coding Challenge',
			date: 'Aug 15, 2025',
			location: 'Seoul',
			status: 'Registration Open',
			statusClass: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
		},
		{
			name: '2025 AI Hackathon',
			date: 'Sep 5, 2025',
			location: 'Busan',
			status: 'Coming Soon',
			statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
		},
		{
			name: '2025 Web Development Contest',
			date: 'Oct 20, 2025',
			location: 'Daejeon',
			status: 'Planning',
			statusClass: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
		},
		{
			name: '2025 Data Science Competition',
			date: 'Nov 10, 2025',
			location: 'Incheon',
			status: 'Planning',
			statusClass: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
		}
	];
	
	// State for detail modal
	let showDetailModal = $state(false);
	let selectedCompetition: Competition | null = $state(null);
	let longPressTimer: number | null = null;
	
	// Function to handle long press
	function handleTouchStart(competition: Competition) {
		// Set the selected competition immediately so it's ready when the modal shows
		selectedCompetition = competition;
		
		longPressTimer = setTimeout(() => {
			// Show the modal while finger is still on screen
			showDetailModal = true;
		}, 500) as unknown as number; // 500ms for long press
	}
	
	function handleTouchEnd() {
		if (longPressTimer) {
			// If timer hasn't completed yet, clear it
			clearTimeout(longPressTimer);
			longPressTimer = null;
		}
		
		// Always close the modal when finger is lifted
		showDetailModal = false;
	}
	
</script>

<div class="space-y-6">
	<div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
		<h1 class="text-2xl font-bold mb-4 dark:text-white">대회 목록</h1>
		<p class="text-gray-600 dark:text-gray-300">
			Welcome to the competition list page. Here you can find information about upcoming and past competitions.
		</p>
	</div>

	<div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
		<h2 class="text-xl font-semibold mb-4 dark:text-white">Competitions</h2>
		
		<div class="md:hidden mb-3 text-sm text-gray-500 dark:text-gray-400 flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
			</svg>
			길게 눌러서 자세한 정보 보기
		</div>
		
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
				<thead class="bg-gray-50 dark:bg-gray-700">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
						<th scope="col" class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Location</th>
						<th scope="col" class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
					</tr>
				</thead>
				<tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
					{#each competitions as competition (competition.name)}
						<tr 
							class="md:hover:bg-gray-50 md:dark:hover:bg-gray-700 transition-colors cursor-pointer relative"
							ontouchstart={() => handleTouchStart(competition)}
							ontouchend={handleTouchEnd}
							ontouchcancel={handleTouchEnd}
						>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{competition.name}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{competition.date}</td>
							<td class="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{competition.location}</td>
							<td class="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
								<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {competition.statusClass}">
									{competition.status}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		
		<!-- Mobile Detail Modal -->
		<CompetitionDetailModal competition={selectedCompetition} show={showDetailModal} />
	</div>
</div>