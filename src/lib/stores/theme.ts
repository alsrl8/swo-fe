import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// Function to get the initial theme based on localStorage or system preference
function getInitialTheme(): Theme {
  if (!browser) {
    return 'light'; // Default to light on server
  }

  // Check localStorage first
  const storedTheme = localStorage.getItem('theme') as Theme | null;

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  const appDefaultTheme: Theme = 'dark';
  localStorage.setItem('theme', appDefaultTheme);

  return appDefaultTheme;
}

function createThemeStore() {
	const initialTheme = getInitialTheme();
  const { subscribe, set, update } = writable<Theme>(initialTheme);

  if (browser) {
    updateDocumentClass(initialTheme);
  }

  function updateDocumentClass(theme: Theme) {
    if (browser) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#1f2937' : '#ffffff');
      }
    }
  }

  return {
    subscribe,
    
    toggle: () => {
      update(currentTheme => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', newTheme);
          updateDocumentClass(newTheme);
        }
        return newTheme;
      });
    },
    
    setTheme: (theme: Theme) => {
      set(theme);
      if (browser) {
        localStorage.setItem('theme', theme);
        updateDocumentClass(theme);
      }
    }
  };
}

export const theme = createThemeStore();

export function toggleTheme() {
  theme.toggle();
}