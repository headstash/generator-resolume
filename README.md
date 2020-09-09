# generator-resolume

> [Yeoman](http://yeoman.io) generator for [Resolume 7](https://resolume.com/) (FFGL 2.1) plugins.

## Getting Started

This generator currently only works for Windows and Resolume 7.2+. Before using this generator you need to have installed [Visual Studio](https://visualstudio.microsoft.com/vs/) and the [resolume/ffgl](https://github.com/resolume/ffgl) 
repo by following all steps at [resolume/ffgl - Installation](https://github.com/resolume/ffgl/wiki/1.--Installation). 
Your local copy of the [resolume/ffgl](https://github.com/resolume/ffgl) repository will serve as the root of your project and should look something like this:

```bash
.
├── build
│   ├── osx
│   └── windows
├── source
│   ├── lib
│   └── plugins
│       ├── Add
│       ├── AddSubtract
│       ├── CustomThumbnail
│       ├── Gradients
│       └── Particles
├──.gitignore
└── README.md
```

### Installation

Install Yeoman and generator-resolume:

```bash
npm install -g yo generator-resolume
```

Open a terminal and navigate to the root of your local copy of [resolume/ffgl](https://github.com/resolume/ffgl). 
Run the following command to initialize Yeoman and set the current directory as your project root.
```
yo resolume
```

### Running the Generators

```bash
yo resolume:effect
```

You will be prompted to name your new plugin. This will generate the following file structure from the 
root of your project using `MyPlugin` as an example:

```bash
.
├── build
│   └── windows
│       ├── MyPlugin.vcxproj
│       ├── MyPlugin.vcxproj.filters
│       └── MyPlugin.vcxproj.user
└── source
    └── plugins
        └── MyPlugin
            ├── MyPlugin.cpp
            └── MyPlugin.h
```

## Resources

* [resolume/ffgl - Installation](https://github.com/resolume/ffgl/wiki/1.--Installation)
* [resolume/ffgl - Get to know the framework better](https://github.com/resolume/ffgl/wiki/3.-Get-to-know-the-framework-better)
