import globals from 'globals'
import expectExpect from './rules/expect-expect.js'
import maxExpects from './rules/max-expects.js'
import maxNestedDescribe from './rules/max-nested-describe.js'
import missingPlaywrightAwait from './rules/missing-playwright-await.js'
import noCommentedOutTests from './rules/no-commented-out-tests.js'
import noConditionalExpect from './rules/no-conditional-expect.js'
import noConditionalInTest from './rules/no-conditional-in-test.js'
import noDuplicateHooks from './rules/no-duplicate-hooks.js'
import noElementHandle from './rules/no-element-handle.js'
import noEval from './rules/no-eval.js'
import noFocusedTest from './rules/no-focused-test.js'
import noForceOption from './rules/no-force-option.js'
import noGetByTitle from './rules/no-get-by-title.js'
import noHooks from './rules/no-hooks.js'
import noNestedStep from './rules/no-nested-step.js'
import noNetworkidle from './rules/no-networkidle.js'
import noNthMethods from './rules/no-nth-methods.js'
import noPagePause from './rules/no-page-pause.js'
import noRawLocators from './rules/no-raw-locators.js'
import noRestrictedMatchers from './rules/no-restricted-matchers.js'
import noSkippedTest from './rules/no-skipped-test.js'
import noSlowedTest from './rules/no-slowed-test.js'
import noStandaloneExpect from './rules/no-standalone-expect.js'
import noUnsafeReferences from './rules/no-unsafe-references.js'
import noUselessAwait from './rules/no-useless-await.js'
import noUselessNot from './rules/no-useless-not.js'
import noWaitForSelector from './rules/no-wait-for-selector.js'
import noWaitForTimeout from './rules/no-wait-for-timeout.js'
import preferComparisonMatcher from './rules/prefer-comparison-matcher.js'
import preferEqualityMatcher from './rules/prefer-equality-matcher.js'
import preferHooksInOrder from './rules/prefer-hooks-in-order.js'
import preferHooksOnTop from './rules/prefer-hooks-on-top.js'
import preferLocator from './rules/prefer-locator.js'
import preferLowercaseTitle from './rules/prefer-lowercase-title.js'
import preferNativeLocators from './rules/prefer-native-locators.js'
import preferStrictEqual from './rules/prefer-strict-equal.js'
import preferToBe from './rules/prefer-to-be.js'
import preferToContain from './rules/prefer-to-contain.js'
import preferToHaveCount from './rules/prefer-to-have-count.js'
import preferToHaveLength from './rules/prefer-to-have-length.js'
import preferWebFirstAssertions from './rules/prefer-web-first-assertions.js'
import requireHook from './rules/require-hook.js'
import requireSoftAssertions from './rules/require-soft-assertions.js'
import requireToPassTimeout from './rules/require-to-pass-timeout.js'
import requireToThrowMessage from './rules/require-to-throw-message.js'
import requireTopLevelDescribe from './rules/require-top-level-describe.js'
import validDescribeCallback from './rules/valid-describe-callback.js'
import validExpect from './rules/valid-expect.js'
import validExpectInPromise from './rules/valid-expect-in-promise.js'
import validTitle from './rules/valid-title.js'

const index = {
  configs: {},
  rules: {
    'expect-expect': expectExpect,
    'max-expects': maxExpects,
    'max-nested-describe': maxNestedDescribe,
    'missing-playwright-await': missingPlaywrightAwait,
    'no-commented-out-tests': noCommentedOutTests,
    'no-conditional-expect': noConditionalExpect,
    'no-conditional-in-test': noConditionalInTest,
    'no-duplicate-hooks': noDuplicateHooks,
    'no-element-handle': noElementHandle,
    'no-eval': noEval,
    'no-focused-test': noFocusedTest,
    'no-force-option': noForceOption,
    'no-get-by-title': noGetByTitle,
    'no-hooks': noHooks,
    'no-nested-step': noNestedStep,
    'no-networkidle': noNetworkidle,
    'no-nth-methods': noNthMethods,
    'no-page-pause': noPagePause,
    'no-raw-locators': noRawLocators,
    'no-restricted-matchers': noRestrictedMatchers,
    'no-skipped-test': noSkippedTest,
    'no-slowed-test': noSlowedTest,
    'no-standalone-expect': noStandaloneExpect,
    'no-unsafe-references': noUnsafeReferences,
    'no-useless-await': noUselessAwait,
    'no-useless-not': noUselessNot,
    'no-wait-for-selector': noWaitForSelector,
    'no-wait-for-timeout': noWaitForTimeout,
    'prefer-comparison-matcher': preferComparisonMatcher,
    'prefer-equality-matcher': preferEqualityMatcher,
    'prefer-hooks-in-order': preferHooksInOrder,
    'prefer-hooks-on-top': preferHooksOnTop,
    'prefer-locator': preferLocator,
    'prefer-lowercase-title': preferLowercaseTitle,
    'prefer-native-locators': preferNativeLocators,
    'prefer-strict-equal': preferStrictEqual,
    'prefer-to-be': preferToBe,
    'prefer-to-contain': preferToContain,
    'prefer-to-have-count': preferToHaveCount,
    'prefer-to-have-length': preferToHaveLength,
    'prefer-web-first-assertions': preferWebFirstAssertions,
    'require-hook': requireHook,
    'require-soft-assertions': requireSoftAssertions,
    'require-to-pass-timeout': requireToPassTimeout,
    'require-to-throw-message': requireToThrowMessage,
    'require-top-level-describe': requireTopLevelDescribe,
    'valid-describe-callback': validDescribeCallback,
    'valid-expect': validExpect,
    'valid-expect-in-promise': validExpectInPromise,
    'valid-title': validTitle,
  },
}

const sharedConfig = {
  rules: {
    'no-empty-pattern': 'off',
    'playwright/expect-expect': 'warn',
    'playwright/max-nested-describe': 'warn',
    'playwright/missing-playwright-await': 'error',
    'playwright/no-conditional-expect': 'warn',
    'playwright/no-conditional-in-test': 'warn',
    'playwright/no-element-handle': 'warn',
    'playwright/no-eval': 'warn',
    'playwright/no-focused-test': 'error',
    'playwright/no-force-option': 'warn',
    'playwright/no-nested-step': 'warn',
    'playwright/no-networkidle': 'error',
    'playwright/no-page-pause': 'warn',
    'playwright/no-skipped-test': 'warn',
    'playwright/no-standalone-expect': 'error',
    'playwright/no-unsafe-references': 'error',
    'playwright/no-useless-await': 'warn',
    'playwright/no-useless-not': 'warn',
    'playwright/no-wait-for-selector': 'warn',
    'playwright/no-wait-for-timeout': 'warn',
    'playwright/prefer-web-first-assertions': 'error',
    'playwright/valid-describe-callback': 'error',
    'playwright/valid-expect': 'error',
    'playwright/valid-expect-in-promise': 'error',
    'playwright/valid-title': 'error',
  },
} as const

const legacyConfig = {
  ...sharedConfig,
  env: {
    'shared-node-browser': true,
  },
  plugins: ['playwright'],
}

const flatConfig = {
  ...sharedConfig,
  languageOptions: {
    globals: globals['shared-node-browser'],
  },
  plugins: {
    playwright: index,
  },
}

// @ts-expect-error We author this plugin in ESM, but export as CJS for
// compatibility with ESLint<9. Long term, this will be changed to `export default`.
export = {
  ...index,
  configs: {
    'flat/recommended': flatConfig,
    'playwright-test': legacyConfig,
    recommended: legacyConfig,
  },
}
