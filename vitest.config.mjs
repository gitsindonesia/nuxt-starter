import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    dir: 'tests',
    coverage: {
      provider: "c8",
      reportsDirectory: 'coverage',
      reporter: ["text", "html", "lcov", "json"],
    },
    globals: true,
    environment: "happy-dom",
    // setupFiles: "./test/unit/setup-test.ts",
    reporters: ["json", "vitest-sonar-reporter"],
    outputFile: {
      json: "coverage/test-report.json",
      "vitest-sonar-reporter": "coverage/test-report.xml",
    },
  },
})