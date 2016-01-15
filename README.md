GenieVerbalExpressions
=======================

## Installation
```bash
valac -c verbalexpressions.gs
```
## Usage
```genie
init
    var replace_me = "Replace bird with a duck"
    var v = new VerEx
    print v.find("bird").replace(replace_me, "duck")

    var result = (new VerEx).find("red").replace("We have a red house", "blue")
    print result
```

## Acknowledgements
This is a port of the python version by [inutvmi](https://github.com/VerbalExpressions/PythonVerbalExpressions). Also, I am thankful for Zee`s answer at [StackOverflow](http://stackoverflow.com/questions/34805281/classes-in-genie). [Genie](https://wiki.gnome.org/Projects/Genie) is a cool language that has a syntax similar to Python, but that is translated directly into C, adding OOP capabilities.

This is still a beta version, needs testing. Please contribute with comments or bug reports here at github.

You can view all implementations on [VerbalExpressions.github.io](http://VerbalExpressions.github.io)
