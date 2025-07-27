<script lang="ts">
	import CompetitionDetailModal from '$lib/components/CompetitionDetailModal.svelte';
	import type { LightningMeeting } from '$lib/components/lightning-meeting';
	import type { Column, TableConfig } from '$lib/components/table';
	import LightningMeetingTable from '$lib/components/LightningMeetingTable.svelte';


	// Sample lightning meeting data
	const meetings: LightningMeeting[] = [
		{
			name: '한강 야간 달리기',
			date: 'Aug 10, 2025',
			location: '한강공원 여의도',
			status: '모집중',
			statusClass: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
		},
		{
			name: '북한산 트레일 러닝',
			date: 'Aug 20, 2025',
			location: '북한산국립공원',
			status: '모집 예정',
			statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
		},
		{
			name: '올림픽공원 아침 조깅',
			date: 'Sep 5, 2025',
			location: '올림픽공원',
			status: '모집중',
			statusClass: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
		},
		{
			name: '남산 야간 러닝',
			date: 'Sep 15, 2025',
			location: '남산공원',
			status: '계획중',
			statusClass: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
		}
	];

	// Define all available columns
	const allColumns: Column[] = [
		{ id: 'name', label: '모임명' },
		{ id: 'date', label: '날짜' },
		{ id: 'location', label: '장소' },
		{ id: 'status', label: '상태' }
	];

	/**
	 * Developer configuration for table columns
	 * Modify this object to control which columns are visible in the table
	 */
	const tableConfig: TableConfig = {
		visibleColumns: ['name', 'status']
	};

	let showDetailModal = $state(false);
	let selectedMeeting: LightningMeeting | null = $state(null);
	let longPressTimer: number | null = null;

	function handleTouchStart(meeting: LightningMeeting) {
		selectedMeeting = meeting;

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
		<h1 class="text-2xl font-bold mb-4 dark:text-white">번개 모임</h1>
		<p class="text-gray-600 dark:text-gray-300">
			번개 모임 페이지에 오신 것을 환영합니다. 여기서 다가오는 러닝 모임에 대한 정보를 확인할 수 있습니다.
		</p>
	</div>

	<div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
		<h2 class="text-xl font-semibold mb-4 dark:text-white">모임 목록</h2>

		<div class="md:hidden mb-3 text-sm text-gray-500 dark:text-gray-400 flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 fill-current" viewBox="0 0 20 20">
				<path fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
							clip-rule="evenodd" />
			</svg>
			길게 눌러서 자세한 정보 보기
		</div>

		<LightningMeetingTable
			meetings={meetings}
			allColumns={allColumns}
			tableConfig={tableConfig}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		/>

		<!-- Mobile Detail Modal -->
		<CompetitionDetailModal competition={selectedMeeting} show={showDetailModal} />
	</div>
</div>