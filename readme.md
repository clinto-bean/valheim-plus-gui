# Valheim Plus GUI

**Valheim Plus GUI** is an open-source, cross-platform desktop application designed for Valheim modders. It provides a graphical interface to easily view and modify the `valheim_plus.cfg` configuration file used by the Valheim Plus mod. This eliminates the need to manually search through over 1,000 lines of configuration, offering a more user-friendly and efficient way to customize gameplay.

---

## Features

- Visual editor for `valheim_plus.cfg`
- Automatically detects existing Valheim Plus configuration files
- One-click saving of changes to the config
- Search and filter settings by category or keyword
- Cross-platform support (Windows, macOS, Linux)
- Revert changes and reset to default configuration

---

## Technologies Used

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Electron](https://www.electronjs.org/) for building the cross-platform desktop experience

---

## Installation

**todo...**

## Contributing / Source Code

If you’d like to contribute or run the app from source:

```bash
# Clone the repository
git clone https://github.com/clinto-bean/valheim-plus-gui.git
cd valheim-plus-gui

# Install dependencies
npm install

# Run the app in development mode
npm run dev
```

## File Structure

```
.
├── src/                 # Main source code
├── src/resources/public/              # Static assets
├── valheim-config/      # Handling of valheim_plus.cfg file
├── dist/                # Compiled builds (auto-generated)
└── package.json         # Project metadata and scripts
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgements

- [Valheim Plus](https://www.nexusmods.com/valheim/mods/2323) originally created by [nXxyz](https://next.nexusmods.com/profile/nXxyz), forked and maintained by [Grantapher](https://next.nexusmods.com/profile/Grantapher)
