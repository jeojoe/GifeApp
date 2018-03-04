# Code style consensus

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