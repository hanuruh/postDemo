module.exports = {
    roots: ['<rootDir>/__test__'],
    modulePaths: ['<rootDir>/src'],
    "testEnvironment": "jsdom",
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
