<script lang="ts">
  import { user, signOut } from '$lib/stores/auth';
  
  let isMenuOpen = $state(false);
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  async function handleLogout() {
    try {
      await signOut();
      isMenuOpen = false;
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
</script>

{#if $user}
  <div class="relative">
    <button 
      on:click={toggleMenu}
      class="flex items-center space-x-2 focus:outline-none"
      aria-expanded={isMenuOpen}
      aria-haspopup="true"
    >
      <img 
        src={$user.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent($user.displayName || 'User')} 
        alt="Profile" 
        class="w-8 h-8 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
      />
      <span class="hidden md:inline text-sm font-medium dark:text-white">{$user.displayName || 'User'}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20 fill-current">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
    
    {#if isMenuOpen}
      <div 
        class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <div class="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700">
          <div class="font-medium">{$user.displayName || 'User'}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 truncate">{$user.email}</div>
        </div>
        <a href="/profile" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">Your Profile</a>
        <a href="/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">Settings</a>
        <button 
          on:click={handleLogout}
          class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" 
          role="menuitem"
        >
          Sign out
        </button>
      </div>
    {/if}
  </div>
{:else}
  <a href="/login" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
    Sign in
  </a>
{/if}