/* eslint-disable @typescript-eslint/no-empty-function */
const sonarqubeScanner = require('sonarqube-scanner')

sonarqubeScanner(
    {
        serverUrl: 'http://localhost:9000',
        token: '7f7e6f8f629bd68d478985f0df8360002c8b3b20',
        options: {
            'sonar.sources': './src',
            'sonar.exclusions': '**/__tests__/**,**/*.spec.*,**/__mocks__/**',
            'sonar.tests': './src/__tests__',
            'sonar.test.inclusions':
                './src/__tests__/**/*.test.tsx,./src/__tests__/**/*.test.ts,**/*.spec.ts',
            'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': 'reports/test-report.xml',
        },
    },
    () => {}
)
