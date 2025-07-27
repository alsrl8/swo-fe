<script lang="ts">
	import type { LightningMeeting } from '$lib/components/lightning-meeting';
	import type { Column, TableConfig } from '$lib/components/table';
	import CommonTable from './CommonTable.svelte';

	export let meetings: LightningMeeting[] = [];
	export let allColumns: Column[] = [];
	export let tableConfig: TableConfig;
	export let onTouchStart: (meeting: LightningMeeting) => void;
	export let onTouchEnd: () => void;

	// LightningMeeting implements TableItem interface, so we can pass it directly to CommonTable
</script>

<CommonTable 
	items={meetings}
	allColumns={allColumns}
	tableConfig={tableConfig}
	onTouchStart={onTouchStart}
	onTouchEnd={onTouchEnd}
/>