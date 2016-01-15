/*
 * verbalexpressions.gs
 *
 * Copyright 2016 lc_addicted <>
 *
 * This is an implementation for Verbal Expressions as suggested at
 * https://github.com/VerbalExpressions/implementation/wiki/List-of-methods-to-implement
 * This particular implementation is an adaptation from the python version.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 *
 *
 */

[indent=4]
class VerEx
    s: GenericArray of string

    construct ()
        s = new GenericArray of string

    def add (v: string): VerEx
        s.add (v)
        return self

    def anything() : VerEx
        return self.add("(.*)")

    def anything_but(v:string) : VerEx
        var vmod = "([^" + v + "]*)"
        return self.add(vmod)

    def end_of_line() : VerEx
        return self.add("$")

    def maybe(v:string) : VerEx
        var vmod = "(" + v + ")?"
        return self.add(vmod)

    def start_of_line() : VerEx
        return self.add("^")

    def find (v: string): VerEx
        return self.add ("(%s)".printf (v))

    def any(v:string) : VerEx
        var vmod = "([" + v + "])"
        return self.add(vmod)

    def line_break() : VerEx
        return self.add("(\n|(\r\n))")

    def tab() : VerEx
        return self.add("\t")

    def word() : VerEx
         return self.add("\\w+")

    def OR(value:string) : VerEx
        self.find(value)
        return add("|")

    def replace(old: string, repl: string): string
        // new Regex: unhandle RegexError HERE!!
        var r = new Regex (@"$(self)")
        // r.replace: unhandle RegexError HERE!!
        return r.replace(old, old.length, 0, repl)

    def to_string (): string
        return string.joinv ("", s.data)

/*
init
    var replace_me = "Replace bird with a duck"
    var v = new VerEx
    print v.find("bird").replace(replace_me, "duck")

    var result = (new VerEx).find("red").replace("We have a red house", "blue")
    print result


//// leftover from the python version
    def range(*args)
 *       from_tos = [args[i:i+2] for i in range(0, len(args), 2)]
 *       return add("([%s])" % "".join(["-".join(i) for i in from_tos]))
*/

