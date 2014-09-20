/*
Copyright (c) 2014 Cimaron Shanahan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Preprocessor Class
 */
function Preprocessor() {
	this.error = [];
}

Preprocessor.modules = {};

var proto = Preprocessor.prototype;

proto.process = function(src) {
	var m;

	this.error = null;

	for (m in Preprocessor.modules) {
		
		try {
			result = Preprocessor.modules[m].process(src);
		} catch (e) {
			this.error.push(util.format("compiler error: %s at line %s, column %s", e.message, e.lineNumber, e.columnNumber));
			return false;
		}

		if (!result) {
			this.error.push(Preprocessor.modules[m].error);
			return false;
		}
	}

	return result;
};

glsl.preprocessor = new Preprocessor();
