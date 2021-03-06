<p align="center">
    <h1 align="center">
        <img width="40" src="https://raw.githubusercontent.com/movigo/core/master/resources/icon.png">
        Movigo List Plugin
    </h1>
    <p align="center">Movigo plugin to create list animations.</p>
</p>
    
<p align="center">
    <a href="https://github.com/movigo/list/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/movigo/list.svg?style=flat-square">
    </a>
    <a href="https://david-dm.org/movigo/list" target="_blank">
        <img src="https://img.shields.io/david/movigo/list.svg?style=flat-square">
    </a>
    <a href="https://david-dm.org/movigo/list?type=dev" target="_blank">
        <img src="https://img.shields.io/david/dev/movigo/list.svg?style=flat-square">
    </a>
</p>

________________________________

## :paperclip: Table of Contents
- :hammer: [Install](#hammer-install)
- :video_game: [Usage](#video_game-usage)
- :chart_with_upwards_trend: [Development](#chart_with_upwards_trend-development)
  - :scroll: [Rules](#scroll-rules)
    - [Commits](#commits)
    - [Branches](#branches)
- :page_facing_up: [License](#page_facing_up-license)
- :telephone_receiver: [Contacts](#telephone_receiver-contacts)
  - :boy: [Developers](#boy-developers)

## Install

### NPM

You can install Movigo list plugin with NPM:

```bash
npm install @movigo/list --save
```
    
### CDN

You can also load it with CDNs:
    
```html
  <script src="https://unpkg.com/@movigo/core"></script> <!-- Required dependency -->
  <script src="https://unpkg.com/@movigo/list"></script>
```

## Usage

List plugin function creates an animation for lists of elements with slide-in and fadein effects. In particular, it create an animation for each element of the list using the same keyframe and adequately defining `transform` and `opacity` CSS properties, and start each element with a delay defined according to the duration of the animation (1/3 of the duration).

It is possible to define the initial coordinates, the duration and the easing function for each element. Default coordinates and duration are defined assuming a large transition area, while the default easing function simulates a fast start and a constant decelaration of the elements.

```js
  const elements = document.querySelectorAll('li')

  await movigo.target(elements).list({
    x: 200, // Initial relative x coordinate (default: 0)
    y: 200, // Initial relative y coordinate (default: 100)
    duration: .5, // Animation duration (default: .3)
    easing: 'linear' // Easing function (default: 'cubic-bezier(0.0, 0.0, 0.2, 1)')
  }).animate()
```

## :chart_with_upwards_trend: Development

### :scroll: Rules

#### Commits

* Use this commit message format (angular style):  

    `[<type>] <subject>`
    `<BLANK LINE>`
    `<body>`

    where `type` must be one of the following:

    - feat: A new feature
    - fix: A bug fix
    - docs: Documentation only changes
    - style: Changes that do not affect the meaning of the code
    - refactor: A code change that neither fixes a bug nor adds a feature
    - test: Adding missing or correcting existing tests
    - chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
    - update: Update of the library version or of the dependencies

and `body` must be should include the motivation for the change and contrast this with previous behavior (do not add body if the commit is trivial). 

* Use the imperative, present tense: "change" not "changed" nor "changes".
* Don't capitalize first letter.
* No dot (.) at the end.

#### Branches

* There is a master branch, used only for release.
* There is a dev branch, used to merge all sub dev branch.
* Avoid long descriptive names for long-lived branches.
* No CamelCase.
* Use grouping tokens (words) at the beginning of your branch names (in a similar way to the `type` of commit).
* Define and use short lead tokens to differentiate branches in a way that is meaningful to your workflow.
* Use slashes to separate parts of your branch names.
* Remove branch after merge if it is not important.

Examples:
    
    git branch -b docs/README
    git branch -b test/one-function
    git branch -b feat/side-bar
    git branch -b style/header

## :page_facing_up: License
* See [LICENSE](https://github.com/movigo/list/blob/master/LICENSE) file.

## :telephone_receiver: Contacts
### :boy: Developers

#### Cedoor
* E-mail : me@cedoor.dev
* Github : [@cedoor](https://github.com/cedoor)
* Website : https://cedoor.dev
