# Admin Role Management

This document explains how the admin role system works and how to add admin users to the system.

## Overview

The application now includes an admin role system that allows certain users to have additional privileges. Currently, admin users can see an "Add Member" button on the member list page.

## How It Works

1. Admin users are identified by their email addresses stored in a hardcoded list in the `firebase.ts` file.
2. When a user logs in with Google, the system checks if their email is in the hardcoded admin list.
3. If the email is found in the list, the user is granted admin privileges.
4. The admin status is stored in a Svelte store called `isAdmin` which can be used throughout the application.

## Adding Admin Users

To add a new admin user to the system, you need to add their email to the `adminEmails` array in the `firebase.ts` file:

```typescript
// Hardcoded list of admin emails
const adminEmails = [
  'admin@example.com',
  'admin2@example.com',
  // Add new admin emails here
  'new-admin@example.com'
];
```

After adding a new admin email, you'll need to rebuild and redeploy the application for the changes to take effect.

### Advantages of Hardcoded Admin List

Using a hardcoded list of admin emails has several advantages:
1. Simplicity - No need to set up and manage a Firestore collection
2. Performance - No database queries required to check admin status
3. Security - Admin list is compiled into the application and not exposed via API

### Disadvantages

The main disadvantage is that adding new admins requires code changes and redeployment, rather than just updating a database entry.

## Using Admin Status in Components

To check if a user is an admin in your Svelte components, import the `isAdmin` store:

```svelte
<script>
  import { isAdmin } from '$lib/stores/auth';
</script>

{#if $isAdmin}
  <!-- Admin-only content here -->
{/if}
```

## Security Considerations

Even with a hardcoded admin list, remember that client-side admin checks should only be used for UI purposes. Any sensitive operations should still be protected by server-side security rules in your backend services.

Since the admin list is now part of the client-side code:
1. The list is visible to anyone who inspects your application bundle
2. The admin check is performed entirely in the browser and could be bypassed

For truly secure admin-only operations, implement proper authentication and authorization checks on your backend services or API endpoints.