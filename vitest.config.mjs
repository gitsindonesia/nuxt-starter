import { defineVitestConfig } from 'nuxt-vitest/config'
import vuePlugin from '@vitejs/plugin-vue'

export default defineVitestConfig({
  plugins: [vuePlugin()],
  test: {
    dir: 'tests',
    coverage: {
      provider: 'c8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'html', 'lcov', 'json'],
    },
    globals: true,
    reporters: ['verbose', 'json', 'vitest-sonar-reporter'],
    outputFile: {
      'json': 'coverage/test-report.json',
      'vitest-sonar-reporter': 'coverage/test-report.xml',
    },
  },
})
