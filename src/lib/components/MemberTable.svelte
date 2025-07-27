<script lang="ts">
	import type { Member } from '$lib/components/member';
	import type { Column, TableConfig } from '$lib/components/table';
	import CommonTable from './CommonTable.svelte';

	export let members: Member[] = [];
	export let allColumns: Column[] = [];
	export let tableConfig: TableConfig;
	export let onTouchStart: (member: Member) => void;
	export let onTouchEnd: () => void;

	// Member implements TableItem interface, so we can pass it directly to CommonTable
</script>

<CommonTable 
	items={members}
	allColumns={allColumns}
	tableConfig={tableConfig}
	onTouchStart={onTouchStart}
	onTouchEnd={onTouchEnd}
/>