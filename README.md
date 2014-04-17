# nvalt-prime

A smart nvAlt Preview Theme.

## Features

- Github theme
- Github markdown support
- simple checkbox support ([] and [/])
- User Story detection (As a user, I expect ...)

## Installation

In a terminal:

    cd ~/Application Support/nvALT/
    git clone git@github.com:bawigga/nvalt-prime.git

No need to restart nvALT. The changes will be picked up the next time you preview a new note.

### Reverting

You can always restore the default just by deleting the files in `~/Library/Application Support/nvALT/`.

## Usage

### Checkboxes

There are two types of checkboxes you can use:

    [] - unchecked
    [/] - checked

### Github Markdown Theme

    strikethrough: wrap text with ~~
    
### User Story Detection

By writing your user stories in a particular format, nvALT will parse and display them.

    "As a user, I expect" to be able to do something.
