# React Forms

**react-form-builder-renderer** - React form builder and renderer components

## Getting Started

### 1. Clone the repo.

If you are using SSH use

```
git clone git@github.com:BillFugina/react-form-builder-renderer.git
```

If you are using HTTPS use

```
git clone https://github.com/BillFugina/react-form-builder-renderer.git
```

### 2. Change into the project directory

```
cd react-form-builder-renderer
```

### 3. Download dependencies

```
yarn install
```

_note: you could use just plain `yarn`_

## Building

Run yarn build

```
yarn build
```

## Running Tests

To run all code formatting tests (lint/prettier) and unit tests:

```
yarn test
```

To run just unit tests:

```
yarn test:unit
```

## Developing and Debugging

### Starting the Dev Server

Run yarn dev to start a webpack development server to which you can attach a debugger.

```
yarn dev
```
## Versioning and Deploying

Before starting, close any editors, file explorers, or anything else that might have some files locked.

#### 1. Be sure all changes are committed to the repo.

```
git commit -m "commit message"
```

#### 2. Run deploy script

```
yarn deploy:npm
```

## Updating to the latest patch version in your project
```
yarn upgrade react-form-builder-renderer
```

## Publishing a pre-release version

If you want to publish a "pre-release" version you can give it a version of something like `"version": "1.0.11-yourname.1"` in the package.json.

```
{
	"name": "react-form-builder-renderer",
	"version": "1.0.11-yourname.1",
	"description": "React form builder and renderer components",
  ...
}
```

When you publish, give the version a tag:

```
yarn publish --tag yourname
```

Then if you want to use your pre-release version in another project, you can specify the version with that tag.

```
yarn add react-form-builder-renderer@yourname
```

This will installed the latest version tagged with your tag.

## Deploying the Demo

To deploy the github pages demo with the code on your _current branch_:

```
yarn deploy:demo
```

This will run the tests and webpack the code in your current branch to a `build` folder. It will then push the build up to a `gh-pages` branch on github. The demo is
_immediately_ available on https://billfugina.github.io/react-form-builder-renderer. Usually there is a very short delay (under a minute) for the new demo to be available.
