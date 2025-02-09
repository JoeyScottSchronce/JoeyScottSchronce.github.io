import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/, // Only process .js and .jsx files in the src directory
    exclude: /node_modules/, // Exclude node_modules
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});

