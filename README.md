# ember-vscode-templatelint-issue

reproduce linting bug in vscode workspaces

### Step#1 - Confirm linting works for Ember App

⋅⋅\* Open App1 folder in VSCode
eg.
`$ code ember-vscode-templatelint-issue/app1/`

⋅⋅\* Open app1/templates/application.hbs from within VScode

⋅⋅\* Line 12 `<img />` will be underlined with a red squiggle line indicating a lint error. If you mouse over it it should say "img tags must have an alt attribute ember-template-lint
Self-closing a void element is redundant ember-template-lint"

### Step#2 - Close VSCode.

### Step#3 - Open a workspace/folder for both Apps.

⋅⋅\* Open the folder for the git repo in VSCode
`$ code ember-vscode-templatelint-issue`

⋅⋅\* Open app/templates/application.hbs from within VScode

⋅⋅\* Line 12 `<img />` will not have any indication of lint error.
