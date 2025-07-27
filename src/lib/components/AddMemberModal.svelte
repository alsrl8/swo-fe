<script lang="ts">
	// Add Member Modal Component
	
	// Define props
	let { show, onClose } = $props<{
		show: boolean;
		onClose: () => void;
	}>();

	// Form state
	let name = $state('');
	let date = $state(new Date().toISOString().split('T')[0]); // Today's date as default
	let location = $state('');
	let status = $state('활동중'); // Default status

	// Handle form submission
	function handleSubmit() {
		// Here you would typically add logic to save the new member
		// For now, we'll just close the modal
		resetForm();
		onClose();
	}

	// Reset form fields
	function resetForm() {
		name = '';
		date = new Date().toISOString().split('T')[0];
		location = '';
		status = '활동중';
	}
</script>

{#if show}
	<!-- Modal backdrop with semi-transparent background -->
	<div class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
		<!-- Modal container -->
		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full overflow-hidden animate-fade-in">
			<!-- Modal header -->
			<div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">회원 추가</h3>
				<button 
					class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none" 
					on:click={onClose}
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			
			<!-- Modal body -->
			<div class="p-6">
				<form on:submit|preventDefault={handleSubmit} class="space-y-4">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">이름</label>
						<input 
							type="text" 
							id="name" 
							bind:value={name} 
							required
							class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
						/>
					</div>
					
					<div>
						<label for="date" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">가입일</label>
						<input 
							type="date" 
							id="date" 
							bind:value={date} 
							required
							class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
						/>
					</div>
					
					<div>
						<label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">지역</label>
						<input 
							type="text" 
							id="location" 
							bind:value={location} 
							required
							class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
						/>
					</div>
					
					<div>
						<label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">상태</label>
						<select 
							id="status" 
							bind:value={status} 
							class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
						>
							<option value="활동중">활동중</option>
							<option value="휴식중">휴식중</option>
							<option value="비활동">비활동</option>
						</select>
					</div>
					
					<div class="flex justify-end space-x-3 mt-6">
						<button 
							type="button" 
							on:click={onClose}
							class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							취소
						</button>
						<button 
							type="submit"
							class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							추가
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}

<style>
	.animate-fade-in {
		animation: fadeIn 0.2s ease-out;
	}
	
	@keyframes fadeIn {
		from { opacity: 0; transform: scale(0.95); }
		to { opacity: 1; transform: scale(1); }
	}
</style>