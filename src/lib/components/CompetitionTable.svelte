<script lang="ts">
	import type { Competition } from '$lib/components/competition';
	import type { Column, TableConfig } from '$lib/components/table';

	export let competitions: Competition[] = [];
	export let allColumns: Column[] = [];
	export let tableConfig: TableConfig;
	export let onTouchStart: (competition: Competition) => void;
	export let onTouchEnd: () => void;
</script>

<div class="overflow-x-auto">
	<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
		<thead class="bg-gray-50 dark:bg-gray-700">
			<tr>
				{#each allColumns as column (column.id)}
					<!-- On medium and larger screens, show all columns -->
					<!-- On small screens, only show columns specified in visibleColumns -->
					<th scope="col" class="{tableConfig.visibleColumns.includes(column.id) ? '' : 'hidden md:table-cell'} px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{column.label}</th>
				{/each}
			</tr>
		</thead>
		<tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
			{#each competitions as competition (competition.name)}
				<tr 
					class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer relative"
					ontouchstart={() => onTouchStart(competition)}
					ontouchend={onTouchEnd}
					ontouchcancel={onTouchEnd}
				>
					<!-- Name column - conditionally visible -->
					<td class="{tableConfig.visibleColumns.includes('name') ? '' : 'hidden md:table-cell'} px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{competition.name}</td>
					
					<!-- Date column - conditionally visible -->
					<td class="{tableConfig.visibleColumns.includes('date') ? '' : 'hidden md:table-cell'} px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{competition.date}</td>
					
					<!-- Location column - conditionally visible -->
					<td class="{tableConfig.visibleColumns.includes('location') ? '' : 'hidden md:table-cell'} px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{competition.location}</td>
					
					<!-- Status column - conditionally visible -->
					<td class="{tableConfig.visibleColumns.includes('status') ? '' : 'hidden md:table-cell'} px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
						<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {competition.statusClass}">
							{competition.status}
						</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>