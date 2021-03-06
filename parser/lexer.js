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


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:;
break;
case 1:
break;
case 2: this.begin('PP'); return 9; 
break;
case 3: this.begin('PP'); return 22; 
break;
case 4:
	
	/* Eat characters until the first digit is
	 * encountered
	 */
	
	var ptr = 0;
	while (yy_.yytext.slice(0, 1) < '0' || yy_.yytext.slice(0, 1) > '9') {
		ptr++;
	}

	/* Subtract one from the line number because
	 * yy_.yylineno is zero-based instead of
	 * one-based.
	 */
	yy_.yylineno = parseInt(yy_.yytext.slice(0, 1), 10) - 1;
	yy_.yylloc.source = parseInt(yy_.yytext.slice(0), 10);

break;
case 5:
				   /* Eat characters until the first digit is
				    * encountered
				    */
					var ptr = 0;
					while (yy_.yytext.slice(0, 1) < '0' || yy_.yytext.slice(0, 1) > '9')
						ptr++;

				   /* Subtract one from the line number because
				    * yy_.yylineno is zero-based instead of
				    * one-based.
				    */
				   yy_.yylineno = parseInt(yy_.yytext.slice(0, 1), 10) - 1;
				
break;
case 6:
				  this.begin('PP');
				  return 13;
				
break;
case 7:
				  this.begin('PP');
				  return 14;
				
break;
case 8:
				  this.begin('PP');
				  return 15;
				
break;
case 9:
				  this.begin('PP');
				  return 16;
				
break;
case 10:
				  this.begin('PP');
				  return 17;
				
break;
case 11: this.begin('PRAGMA'); 
break;
case 12: this.begin('INITIAL'); yy_.yylineno++; yycolumn = 0; 
break;
case 13: 
break;
case 14: 
break;
case 15: 
break;
case 16:return ":";
break;
case 17:
				   yylval.identifier = strdup(yy_.yytext);
				   return 25;
				
break;
case 18:
				    yylval.n = parseInt(yy_.yytext);
				    return 10;
				
break;
case 19: this.begin('INITIAL'); yy_.yylineno++; yycolumn = 0; return 11; 
break;
case 20: /*yy_.yylineno++; yycolumn = 0;*/ 
break;
case 21:return 137;
break;
case 22:return 135;
break;
case 23:return 147;
break;
case 24:return 144;
break;
case 25:return 146;
break;
case 26:return 203;
break;
case 27:return 202;
break;
case 28:return 197;
break;
case 29:return 196;
break;
case 30:return 191;
break;
case 31:return 198;
break;
case 32:return 189;
break;
case 33:return 205;
break;
case 34:return 204;
break;
case 35:return 151;
break;
case 36:return 152;
break;
case 37:return 153;
break;
case 38:return 154;
break;
case 39:return 155;
break;
case 40:return 156;
break;
case 41:return 148;
break;
case 42:return 149;
break;
case 43:return 150;
break;
case 44:return 157;
break;
case 45:return 158;
break;
case 46:return 159;
break;
case 47:return 120;
break;
case 48:return 121;
break;
case 49:return 122;
break;
case 50:return 140;
break;
case 51:return 138;
break;
case 52:return 125;
break;
case 53:return 133;
break;
case 54:return 132;
break;
case 55:return 160;
break;
case 56:return 161;
break;
case 57:return 162;
break;
case 58:return 163;
break;
case 59:return 164;
break;
case 60:return 165;
break;
case 61:return 169;
break;
case 62:return 47;
break;
case 63:/*copy manually*/
break;
case 64:return 39;
break;
case 65:return 40;
break;
case 66:return 72;
break;
case 67:return 73;
break;
case 68:return 75;
break;
case 69:return 76;
break;
case 70:return 84;
break;
case 71:return 88;
break;
case 72:return 86;
break;
case 73:return 67;
break;
case 74:return 68;
break;
case 75:return 93;
break;
case 76:return 94;
break;
case 77:return 96;
break;
case 78:return 95;
break;
case 79:return 98;
break;
case 80:return 99;
break;
case 81:return 100;
break;
case 82:return 101;
break;
case 83:return 102;
break;
case 84:return 97;
break;
case 85:
			    this.yylval = parseFloat(yy_.yytext);
			    return 28;
			
break;
case 86:
				this.yylval = parseFloat(yy_.yytext);
				return 28;
			
break;
case 87:
			    this.yylval = parseFloat(yy_.yytext);
			    return 28;
			
break;
case 88:
			    this.yylval = parseFloat(yy_.yytext);
			    return 28;
			
break;
case 89:
			    this.yylval = parseFloat(yy_.yytext);
			    return 28;
			
break;
case 90:
			    this.yylval = parseInt(yy_.yytext + 2, 16);
			    return 10;
			
break;
case 91:
			    this.yylval = parseInt(yy_.yytext, 8);
			    return 10;
			
break;
case 92:
				this.yylval = parseInt(yy_.yytext);
				return 10;
			
break;
case 93:
			    this.yylval = 1;
			    return 29;
			
break;
case 94:
			    this.yylval = 0;
			    return 29;
			
break;
case 95:return 'ASM'
break;
case 96:return 'CLASS'
break;
case 97:return 'UNION'
break;
case 98:return 'ENUM'
break;
case 99:return 'TYPEDEF'
break;
case 100:return 'TEMPLATE'
break;
case 101:return 'THIS'
break;
case 102:return 'PACKED'
break;
case 103:return 'GOTO'
break;
case 104:return 193
break;
case 105:return 195
break;
case 106:return 'INLINE'
break;
case 107:return 'NOINLINE'
break;
case 108:return 'VOLATILE'
break;
case 109:return 'PUBLIC'
break;
case 110:return 'STATIC'
break;
case 111:return 'EXTERN'
break;
case 112:return 'EXTERNAL'
break;
case 113:return 'INTERFACE'
break;
case 114:return 'LONG'
break;
case 115:return 'SHORT'
break;
case 116:return 145
break;
case 117:return 'HALF'
break;
case 118:return 'FIXED'
break;
case 119:return 'UNSIGNED'
break;
case 120:return 'INPUT'
break;
case 121:return 'OUTPUT'
break;
case 122:return 'HVEC2'
break;
case 123:return 'HVEC3'
break;
case 124:return 'HVEC4'
break;
case 125:return 'DVEC2'
break;
case 126:return 'DVEC3'
break;
case 127:return 'DVEC4'
break;
case 128:return 'FVEC2'
break;
case 129:return 'FVEC3'
break;
case 130:return 'FVEC4'
break;
case 131:return 'SAMPLER2DRECT';
break;
case 132:return 'SAMPLER3DRECT';
break;
case 133:return 'SAMPLER2DRECTSHADOW';
break;
case 134:return 'SIZEOF';
break;
case 135:return 'CAST';
break;
case 136:return 'NAMESPACE';
break;
case 137:return 'USING';
break;
case 138:return 168;
break;
case 139:return 167;
break;
case 140:return 166;
break;
case 141:return 108;
break;
case 142:
	yy.yylval = yy_.yytext;
	return yy.state.classify_identifier(yy.state, yy_.yytext);

break;
case 143:return yy_.yytext;
break;
case 144:return 5;
break;
}
},
rules: [/^(?:[ \r\t]+)/,/^(?:[ \t]*#[ \t]*$)/,/^(?:[ \t]*#[ \t]*version\b)/,/^(?:[ \t]*#[ \t]*extension\b)/,/^(?:(^([ \t]*)([ \t]*))line([ \t]+)((([1-9][0-9]*)|([xX][0-9a-fA-F]+)|([0-7]*)))([ \t]+)((([1-9][0-9]*)|([xX][0-9a-fA-F]+)|([0-7]*)))([ \t]*)$)/,/^(?:(^([ \t]*)([ \t]*))line([ \t]+)((([1-9][0-9]*)|([xX][0-9a-fA-F]+)|([0-7]*)))([ \t]*)$)/,/^(?:([ \t]*)#([ \t]*)pragma([ \t]+)debug([ \t]*)\(([ \t]*)on([ \t]*)\))/,/^(?:([ \t]*)#([ \t]*)pragma([ \t]+)debug([ \t]*)\(([ \t]*)off([ \t]*)\))/,/^(?:([ \t]*)#([ \t]*)pragma([ \t]+)optimize([ \t]*)\(([ \t]*)on([ \t]*)\))/,/^(?:([ \t]*)#([ \t]*)pragma([ \t]+)optimize([ \t]*)\(([ \t]*)off([ \t]*)\))/,/^(?:([ \t]*)#([ \t]*)pragma([ \t]+)STDGL([ \t]+)invariant([ \t]*)\(([ \t]*)all([ \t]*)\))/,/^(?:([ \t]*)#([ \t]*)pragma([ \t]+))/,/^(?:[\n])/,/^(?:.)/,/^(?:\/\/[^\n]*)/,/^(?:[ \t\r]*)/,/^(?::)/,/^(?:[_a-zA-Z][_a-zA-Z0-9]*)/,/^(?:[1-9][0-9]*)/,/^(?:[\n])/,/^(?:[\n])/,/^(?:attribute\b)/,/^(?:const\b)/,/^(?:bool\b)/,/^(?:float\b)/,/^(?:int\b)/,/^(?:break\b)/,/^(?:continue\b)/,/^(?:do\b)/,/^(?:while\b)/,/^(?:else\b)/,/^(?:for\b)/,/^(?:if\b)/,/^(?:discard\b)/,/^(?:return\b)/,/^(?:bvec2\b)/,/^(?:bvec3\b)/,/^(?:bvec4\b)/,/^(?:ivec2\b)/,/^(?:ivec3\b)/,/^(?:ivec4\b)/,/^(?:vec2\b)/,/^(?:vec3\b)/,/^(?:vec4\b)/,/^(?:mat2\b)/,/^(?:mat3\b)/,/^(?:mat4\b)/,/^(?:in\b)/,/^(?:out\b)/,/^(?:inout\b)/,/^(?:uniform\b)/,/^(?:varying\b)/,/^(?:invariant\b)/,/^(?:flat\b)/,/^(?:smooth\b)/,/^(?:sampler1D\b)/,/^(?:sampler2D\b)/,/^(?:sampler3D\b)/,/^(?:samplerCube\b)/,/^(?:sampler1DShadow\b)/,/^(?:sampler2DShadow\b)/,/^(?:struct\b)/,/^(?:void\b)/,/^(?:layout\b)/,/^(?:\+\+)/,/^(?:--)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:\^\^)/,/^(?:<<)/,/^(?:>>)/,/^(?:\*=)/,/^(?:\/=)/,/^(?:\+=)/,/^(?:%=)/,/^(?:<<=)/,/^(?:>>=)/,/^(?:&=)/,/^(?:\^=)/,/^(?:\|=)/,/^(?:-=)/,/^(?:[0-9]+\.[0-9]+([eE][+-]?[0-9]+)?[fF]?)/,/^(?:\.[0-9]+([eE][+-]?[0-9]+)?[fF]?)/,/^(?:[0-9]+\.([eE][+-]?[0-9]+)?[fF]?)/,/^(?:[0-9]+[eE][+-]?[0-9]+[fF]?)/,/^(?:[0-9]+[fF])/,/^(?:0[xX][0-9a-fA-F]+)/,/^(?:0[0-7]*)/,/^(?:[1-9][0-9]*)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:asm\b)/,/^(?:class\b)/,/^(?:union\b)/,/^(?:enum\b)/,/^(?:typedef\b)/,/^(?:template\b)/,/^(?:this\b)/,/^(?:packed\b)/,/^(?:goto\b)/,/^(?:switch\b)/,/^(?:default\b)/,/^(?:inline\b)/,/^(?:noinline\b)/,/^(?:volatile\b)/,/^(?:public\b)/,/^(?:static\b)/,/^(?:extern\b)/,/^(?:external\b)/,/^(?:interface\b)/,/^(?:long\b)/,/^(?:short\b)/,/^(?:double\b)/,/^(?:half\b)/,/^(?:fixed\b)/,/^(?:unsigned\b)/,/^(?:input\b)/,/^(?:output\b)/,/^(?:hvec2\b)/,/^(?:hvec3\b)/,/^(?:hvec4\b)/,/^(?:dvec2\b)/,/^(?:dvec3\b)/,/^(?:dvec4\b)/,/^(?:fvec2\b)/,/^(?:fvec3\b)/,/^(?:fvec4\b)/,/^(?:sampler2DRect\b)/,/^(?:sampler3DRect\b)/,/^(?:sampler2DRectShadow\b)/,/^(?:sizeof\b)/,/^(?:cast\b)/,/^(?:namespace\b)/,/^(?:using\b)/,/^(?:lowp\b)/,/^(?:mediump\b)/,/^(?:highp\b)/,/^(?:precision\b)/,/^(?:[_a-zA-Z][_a-zA-Z0-9]*)/,/^(?:.)/,/^(?:$)/],
conditions: {"PRAGMA":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144],"inclusive":true},"PP":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144],"inclusive":true},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;

