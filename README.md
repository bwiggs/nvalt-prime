# nvalt-prime

[![Join the chat at https://gitter.im/bawigga/nvalt-prime](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bawigga/nvalt-prime?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
    git clone https://github.com/bawigga/nvalt-prime.git nvALT

> No need to restart nvALT. The changes will be picked up the next time you switch notes. You can also right click on the preview window and click refresh.



#### Reverting

You can always restore the default just by deleting the files in `~/Library/Application Support/nvALT/`.

	rm -rfi ~/Library/Application\ Support/nvALT

#### Updating

In a terminal:

    cd ~/Library/Application\ Support/nvALT/
    git pull

#### Hacking

Just point `~/Library/Application Support/nvALT` to your local git repository.

	cd [your project path]
	git clone git@github.com:bawigga/nvalt-prime.git
	rm -rfi ~/Library/Application\ Support/nvALT
	ln -s /path/to/nvalt-prime/ ~/Library/Application\ Support/nvALT

> No need to restart nvALT. The changes will be picked up the next time you switch notes. You can also right click on the preview window and click refresh.

## Usage

> Please share how/why you use nvALT! Submit a quick comment on [issue #14](https://github.com/bawigga/nvalt-prime/issues/14)

### Checkboxes

There are two types of checkboxes you can use:

    [ ] - unchecked
    [/] - checked
    [ ] - checked @done

### Code Highlighting

    class SomeClass
        def someMethod
        end
    end

### Font Awesome Icons

    [fa-github]

### Github Markdown Theme

    strikethrough: wrap text with ~~
