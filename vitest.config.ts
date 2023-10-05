import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    dir: 'tests',
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'html', 'lcov', 'json'],
    },
    globals: true,
    reporters: ['verbose', 'json', 'vitest-sonar-reporter'],
    outputFile: {
      'json': 'coverage/test-report.json',
      'vitest-sonar-reporter': 'coverage/test-report.xml',
    },
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('./', import.meta.url)),
        domEnvironment:
          (process.env.VITEST_DOM_ENV as 'happy-dom' | 'jsdom') ?? 'happy-dom',
      },
    },
    setupFiles: ['./tests/setup/mocks.ts'],
  },
})
