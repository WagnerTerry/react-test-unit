# Teste

## Criando o projeto

- npm create vite@latest
  ✔ Project name: … react-unit-testing
  ✔ Select a framework: › react
  ✔ Select a variant: › react-ts

* para rodar

- npm run dev

* testes

- npm test

## Dependencias

- npm i jest -D
- npx jest --init
- npm i ts-node -D
- npm i @types/jest -D
- npm i @swc/core @swc/jest -D // tem o mesmo papel do babel, converter um codigo num formato para outro entendivel como browser ou jest
- npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event -D

- alterar no arquivo jest o transform para:
  transform: {
  "^.+\\.(t|j)sx?$": [
  "@swc/jest",
  {
  jsc: {
  parser: {
  syntax: 'typescript',
  tsx: false,
  decorators: true,
  },
  keepClassNames: true,
  transform: {
  legacyDecorator: true,
  decoratorMetadata: true,
  },
  },
  module: {
  type: 'es6',
  noInterop: false,
  },
  },
  ],
  },

  setupFilesAfterEnv: [
  '<rootDir>/src/test/setup.ts'
  ],

  - package.json {
    "test": "jest --watchAll"
    }
