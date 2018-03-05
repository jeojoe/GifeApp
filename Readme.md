# GifeApp

## Code style consensus

1. Module folder start with capital letter, global folder start with _
    - encapsulation of logic
1. index.js only for Module folder
    - act as interface (api)
1. Always put state in redux
1. Global reducers -> code it directly in configureStore
1. (Relative path imports) imports should be in alphabetical order of folder module eg.
    - import .. from '../**_assets**'
    - import .. from '../**_hoc**' (_a before _h)
    - import .. from '../**Auth**' (_ before A)
1. Always import from _endpoint_, not directly from filename.

## How to run

1. clone ofc + make sure you followed this [guide](https://facebook.github.io/react-native/docs/getting-started.html) (set up with native code)
1. run `yarn`
1. run `make dev-ios` or `make dev-android`
1. lol