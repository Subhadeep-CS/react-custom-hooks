# React Custom Hooks Collection
![npm](https://img.shields.io/npm/v/react-custom-hooks-collection)
![downloads](https://img.shields.io/npm/dt/react-custom-hooks-collection)
![license](https://img.shields.io/npm/l/react-custom-hooks-collection)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript)

A collection of reusable, type-safe React custom hooks for building modern web apps faster.

---

## 🚀 Features

- TypeScript support for type safety
- Lightweight and easy to use
- Works with React 18+
- Extendable — add your own hooks easily

---

## 💿 Installation

```bash
npm install react-custom-hooks-collection

yarn add react-custom-hooks-collection

## Usage

```tsx
import { useWindowSize } from 'react-custom-hooks-collection';

function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
}


## Available Hooks

- `useWindowSize` – Track window width and height
- `useLocalStorage` – Save and retrieve data from localStorage (future)
- `useDebounce` – Debounce values or functions (future)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT

