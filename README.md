# nvalt-prime

A smart [nvalt](http://brettterpstra.com/projects/nvalt/) Preview Theme.

### Features

- Github theme
- Github markdown support
- Font Awesome icons [fa-github]
- simple checkbox support ([] and [/])
- code highlighting
- User Story detection (As a user, I expect ...)

![screenshot](https://cloud.githubusercontent.com/assets/7358/2734135/1856cee4-c650-11e3-85ca-198179647c8e.png "Screenshot")

### Requirements

[nvalt](http://brettterpstra.com/projects/nvalt/) - nvALT is a fork of the original Notational Velocity with some additional features and some interface modifications.

## Installation

In a terminal:

    cd ~/Library/Application\ Support/
    rm -rfi nvALT/
    git clone git@github.com:bawigga/nvalt-prime.git nvALT

No need to restart nvALT. The changes will be picked up the next time you switch notes.

#### Reverting

You can always restore the default just by deleting the files in `~/Library/Application Support/nvALT/`.

	rm -rf ~/Library/Application\ Support/nvALT

#### Hacking

Just point `~/Library/Application Support/nvALT` to your local git repository.

	cd [your project path]
	git clone git@github.com:bawigga/nvalt-prime.git
    rm -rfi ~/Library/Application\ Support/nvALT
	ln -s /path/to/nvalt-prime/ ~/Library/Application\ Support/nvALT
	
Switching between notes will reload your changes.

## Usage

### Checkboxes

There are two types of checkboxes you can use:

    [] - unchecked
    [/] - checked
    [] - checked @done

### Code Highlighting

    class SomeClass
        def someMethod
        end
    end

### Font Awesome Icons

    [fa-github]

### Github Markdown Theme

    strikethrough: wrap text with ~~
    
### User Story Detection

By writing your user stories in a particular format, nvALT will parse and display them.

    "As a user, I expect" to be able to do something.
