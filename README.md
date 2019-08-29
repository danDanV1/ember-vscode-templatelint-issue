# ember-vscode-templatelint-issue

reproduce linting bug in vscode workspaces

### Step#1 - [SCENARIO A] Confirm linting works for Ember App

- Open App1 folder in VSCode
  eg.
  `$ code ember-vscode-templatelint-issue/app1/`

- Open the template file `app1/app/templates/application.hbs` from within VScode

- Line 12 `<img />` will be underlined with a red squiggle line indicating a lint error. If you mouse over it it should have two lint errors:

  - "img tags must have an alt attribute ember-template-lint"
  - "Self-closing a void element is redundant ember-template-lint"

- Open the component .js file `app1/app/components/foo-component.js`

- Line 11 `this.set("beta", false);` will be underlined with a red squiggle line indicating a lint error. If you mouse over it it should the lint error:
  - "Don't introduce side-effects in computed properties eslint(ember/no-side-effects)"

### Step#2 - Close VSCode.

### Step#3 - [SCENARIO B] Open a workspace/folder for both Apps.

- Open the folder for the git repo in VSCode
  `$ code ember-vscode-templatelint-issue`

- Open the template file `app1/templates/application.hbs` from within VScode

- Line 12 `<img />` will not have any indication of lint error.

- Open the component .js file `app1/app/components/foo-component.js`

- Line 11 `this.set("beta", false);` will be underlined with a red squiggle line indicating a lint error. If you mouse over it it should the lint error:
  - "Don't introduce side-effects in computed properties eslint(ember/no-side-effects)"

### TLDR;

Linting on JS files works in scenario A and B. However, Linting for templates does not work in scenario B.

It was my hypothesis that perhaps addition VSCode workspace settings were required for the VSCode ESlint extension, but I was unsuccessful with the following config to get template linting working in Scenario B.

```
"settings": {
    "eslint.autoFixOnSave": true,
    "eslint.workingDirectories": [
      {
        "directory": "/Users/Me/FrontEndApp",
        "changeProcessCWD": true
      },
            {
        "directory": "/Users/Me/BackEndApp",
        "changeProcessCWD": true
      }
    ],
    "eslint.lintTask.enable": true,
    "eslint.lintTask.options": "-c /Users/Me/FrontEndApp/.eslintrc.json --ignore-path /Users/Me/FrontEndApp/.eslintignore ."
  }
```
