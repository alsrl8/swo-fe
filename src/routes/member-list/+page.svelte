<script lang="ts">
	import CompetitionDetailModal from '$lib/components/CompetitionDetailModal.svelte';
	import AddMemberModal from '$lib/components/AddMemberModal.svelte';
	import MemberTable from '$lib/components/MemberTable.svelte';
	import type { Member } from '$lib/components/member';
	import type { Column, TableConfig } from '$lib/components/table';
	import { isAdmin } from '$lib/stores/auth';


	// Sample member data
	const members: Member[] = [
		{
			name: '김지훈',
			date: '2023-01-15',
			location: '서울',
			status: '활동중',
			statusClass: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
		},
		{
			name: '이미나',
			date: '2023-03-22',
			location: '부산',
			status: '활동중',
			statusClass: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
		},
		{
			name: '박준호',
			date: '2023-05-10',
			location: '대전',
			status: '휴식중',
			statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
		},
		{
			name: '최수진',
			date: '2023-07-05',
			location: '인천',
			status: '비활동',
			statusClass: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
		}
	];

	// Define all available columns
	const allColumns: Column[] = [
		{ id: 'name', label: '이름' },
		{ id: 'date', label: '가입일' },
		{ id: 'location', label: '지역' },
		{ id: 'status', label: '상태' }
	];

	/**
	 * Developer configuration for table columns
	 * Modify this object to control which columns are visible in the table
	 */
	const tableConfig: TableConfig = {
		visibleColumns: ['name', 'status']
	};

	// Detail modal state
	let showDetailModal = $state(false);
	let selectedMember: Member | null = $state(null);
	let longPressTimer: number | null = null;

	// Add member modal state
	let showAddMemberModal = $state(false);

	function handleTouchStart(member: Member) {
		selectedMember = member;

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

	function openAddMemberModal() {
		showAddMemberModal = true;
	}

	function closeAddMemberModal() {
		showAddMemberModal = false;
	}

</script>

<div class="space-y-6">
	<div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
		<h1 class="text-2xl font-bold mb-4 dark:text-white">회원 목록</h1>
		<p class="text-gray-600 dark:text-gray-300">
			러닝 동호회 회원들에 대한 정보를 확인할 수 있습니다.
		</p>
	</div>

	<div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
		<div class="flex justify-between items-center mb-4">
			<h2 class="text-xl font-semibold dark:text-white">회원 목록</h2>
			
			{#if $isAdmin}
				<button 
					class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-200 flex items-center"
					on:click={openAddMemberModal}
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
					</svg>
					회원 추가
				</button>
			{/if}
		</div>

		<div class="md:hidden mb-3 text-sm text-gray-500 dark:text-gray-400 flex items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 fill-current" viewBox="0 0 20 20">
			<path fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
						clip-rule="evenodd" />
			</svg>
			길게 눌러서 자세한 정보 보기
		</div>

		<MemberTable
			members={members}
			allColumns={allColumns}
			tableConfig={tableConfig}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		/>

		<!-- Mobile Detail Modal -->
		<CompetitionDetailModal competition={selectedMember} show={showDetailModal} />
		
		<!-- Add Member Modal -->
		<AddMemberModal show={showAddMemberModal} onClose={closeAddMemberModal} />
	</div>
</div>