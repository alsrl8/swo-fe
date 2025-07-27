/**
 * Common interface for all table items
 * This interface defines the common structure for all data types used in tables
 */
export interface TableItem {
	name: string;
	date: string;
	location: string;
	status: string;
	statusClass: string;
}

export interface Column {
	id: string;
	label: string;
}

/**
 * Table configuration interface for developers
 * This interface allows developers to configure which columns are visible in the table
 *
 * NOTE: The visibleColumns configuration is only applied on small screens (mobile).
 * On medium and larger screens (tablets, desktops), all columns will be shown regardless
 * of this configuration.
 *
 * Available column IDs:
 * - 'name': Competition name
 * - 'date': Competition date
 * - 'location': Competition location
 * - 'status': Competition status
 */
export interface TableConfig {
	visibleColumns: string[];
}
