# JSON Tree Text Generator

A Node.js library that provides a function to generate text-based tree representations of JSON objects.

## Installation

```bash
npm install json-tree-text-generator
```

## Usage

```JavaScript
const jsonTreeTextGenerator = require('json-tree-text-generator');

const sample = {
    Assets: {
        thirdParty: {
            CompanyName: {
                PackageName: {
                    Version: null,
                    PackageName: null
                }
            }
        },
        Art: {
            Animation: {
                AnimationClips: null,
                Animators: null
            },
            Audio: {
                AudioClips: null,
                AudioMixers: null
            }
        },
        Documentation: null,
        Settings: null
    }
};

const treeText = jsonTreeTextGenerator.generateTreeText(sample);

console.log(treeText);
```

Output:

```
└── Assets
    ├── thirdParty
    │   └── CompanyName
    │       └── PackageName
    │           ├── Version
    │           └── PackageName
    ├── Art
    │   ├── Animation
    │   │   ├── AnimationClips
    │   │   └── Animators
    │   └── Audio
    │       ├── AudioClips
    │       └── AudioMixers
    ├── Documentation
    └── Settings
```

## Features

- Supports nested JSON objects
- Configurable indentation
- Configurable output format
