<script lang="ts">
  import { signInWithGoogle } from '$lib/stores/auth';
  import { googleLoginButtonText, onErrorGoogleLogin, onSuccessGoogleLogin } from '$lib/components/googleLogin';

  let loading = $state(false);
  let error = $state<string | null>(null);

  async function handleLogin() {
    loading = true;
    error = null;
    
    try {
      const result = await signInWithGoogle();
      
      if (result.success) {
        onSuccessGoogleLogin();
      } else {
        error = 'Failed to sign in with Google';
        onErrorGoogleLogin(result.error);
      }
    } catch (err) {
      error = 'An unexpected error occurred';
      onErrorGoogleLogin(err);
    } finally {
      loading = false;
    }
  }
</script>

<button
  onclick={handleLogin}
  disabled={loading}
  class="flex items-center justify-center gap-2 bg-white text-gray-700 font-medium rounded-md px-4 py-2 border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed w-full"
>
  {#if loading}
    <svg class="animate-spin h-5 w-5 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  {:else}
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  {/if}
  <span>{loading ? 'Signing in...' : googleLoginButtonText}</span>
</button>

{#if error}
  <p class="text-red-500 text-sm mt-2">{error}</p>
{/if}