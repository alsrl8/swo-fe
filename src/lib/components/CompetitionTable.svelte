<script lang="ts">
	import type { Competition } from '$lib/components/competition';
	import type { Column, TableConfig } from '$lib/components/table';
	import CommonTable from './CommonTable.svelte';

	export let competitions: Competition[] = [];
	export let allColumns: Column[] = [];
	export let tableConfig: TableConfig;
	export let onTouchStart: (competition: Competition) => void;
	export let onTouchEnd: () => void;

	// Competition implements TableItem interface, so we can pass it directly to CommonTable
</script>

<CommonTable 
	items={competitions}
	allColumns={allColumns}
	tableConfig={tableConfig}
	onTouchStart={onTouchStart}
	onTouchEnd={onTouchEnd}
/>