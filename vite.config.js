import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Adjust the chunk size warning limit to 1000 kilobytes (1MB)
    chunkSizeWarningLimit: 2000,
    // Set the manualChunks option to create custom chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example: create a custom chunk for 'lodash' dependency
          if (id.includes('lodash')) {
            return 'lodash';
          }
        },
      },
    },
  },
});
