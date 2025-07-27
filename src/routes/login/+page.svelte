<script lang="ts">
  import { goto } from '$app/navigation';
  import GoogleLoginButton from '$lib/components/GoogleLoginButton.svelte';
  import { user } from '$lib/stores/auth';
  import { onMount } from 'svelte';

  // Redirect to home if already logged in
  onMount(() => {
    const unsubscribe = user.subscribe((currentUser) => {
      if (currentUser) {
        goto('/');
      }
    });

    return unsubscribe;
  });

  function handleLoginSuccess() {
    goto('/');
  }

  function handleLoginError(error: unknown) {
    console.error('Login error:', error);
  }
</script>

<div class="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        Welcome to SWO App
      </p>
    </div>
    
    <div class="mt-8 space-y-6">
      <div class="rounded-md shadow-sm space-y-4">
        <GoogleLoginButton 
          buttonText="Sign in with Google" 
          onSuccess={handleLoginSuccess} 
          onError={handleLoginError} 
        />
      </div>

      <div class="text-sm text-center">
        <p class="text-gray-500 dark:text-gray-400">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  </div>
</div>