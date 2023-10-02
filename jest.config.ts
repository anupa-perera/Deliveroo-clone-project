export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.d\\.ts$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/FooterCard/FooterCard.tsx',
    'src/components/FooterCard/IconCard.tsx',
    'src/components/Header/Header.tsx',
  ],
};
