<script lang="ts">
	import CompetitionDetailModal from '$lib/components/CompetitionDetailModal.svelte';
	import CompetitionTable from '$lib/components/CompetitionTable.svelte';
	import type { Competition } from '$lib/components/competition';
	import type { Column, TableConfig } from '$lib/components/table';


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

	// Define all available columns
	const allColumns: Column[] = [
		{ id: 'name', label: '이름' },
		{ id: 'date', label: '날짜' },
		{ id: 'location', label: '장소' },
		{ id: 'status', label: '상태' }
	];

	/**
	 * Developer configuration for table columns
	 * Modify this object to control which columns are visible in the table
	 *
	 * DEVELOPER: Change this configuration to control which columns are displayed
	 */
	const tableConfig: TableConfig = {
		visibleColumns: ['name', 'status']
	};

	let showDetailModal = $state(false);
	let selectedCompetition: Competition | null = $state(null);
	let longPressTimer: number | null = null;

	function handleTouchStart(competition: Competition) {
		selectedCompetition = competition;

		longPressTimer = setTimeout(() => {
			showDetailModal = true;
		}, 500) as unknown as number; // 500ms for long press
	}

	function handleTouchEnd() {
		if (longPressTimer) {
			clearTimeout(longPressTimer);
			longPressTimer = null;
		}

		showDetailModal = false;
	}

</script>

<div class="space-y-6">
	<div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
		<h1 class="text-2xl font-bold mb-4 dark:text-white">대회 목록</h1>
		<p class="text-gray-600 dark:text-gray-300">
			전국 러닝 대회 정보와 링크를 제공합니다.
		</p>
		<p>
			이 페이지는 모든 사람에게 공개되어도 되지 않을까
		</p>
		<p>
			간단한 정보와 신청 가능한 링크까지만 제공하는 게 좋을 것 같아요.
		</p>
	</div>

	<div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
		<h2 class="text-xl font-semibold mb-4 dark:text-white">국내 마라톤</h2>

		<div class="md:hidden mb-3 text-sm text-gray-500 dark:text-gray-400 flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 fill-current" viewBox="0 0 20 20">

			<path fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
							clip-rule="evenodd" />
			</svg>
			길게 눌러서 자세한 정보 보기
		</div>

		<CompetitionTable
			competitions={competitions}
			allColumns={allColumns}
			tableConfig={tableConfig}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		/>

		<!-- Mobile Detail Modal -->
		<CompetitionDetailModal competition={selectedCompetition} show={showDetailModal} />
	</div>
</div>