(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{184:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Table of Contents")]),t._v(" "),a("em",[t._v("generated with "),a("a",{attrs:{href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocToc"),a("OutboundLink")],1)])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Cross-site scripting")]),t._v("（Cross-site scripting in English, often abbreviated as XSS）is one kind of security vulnerabilities attack of web applications ， and is a kind of "),a("a",{attrs:{href:"https://www.wikiwand.com/zh-hans/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("code input"),a("OutboundLink")],1),t._v("It allows malicious users to input code into web pages, and other users are affected when they browse web pages. Such attacks often include HTML and consumer-side scripting languages.")])]),t._v(" "),a("p",[t._v("XSS is divided into three types: reflective type, storage type, and DOM-based type")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("XSS attacks websites by modifying HTML nodes or run JS code.")]),t._v(" "),a("p",[t._v("For example, get some parameters through the URL")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("The most common practice is to escape the input and output, escape the quotes, angle brackets, and slashes.")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),a("p",[t._v("For displaying rich text, all characters cannot be escaped by the above method, because this will filter out the required format. This kind of situation usually adopts the method of the white list to filter, certainly can also pass the black list to filter, but consider the too many labels and attribute that need to filter, it is more recommended to use the white list way.")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("The Content Security Policy ([CSP] (https://developer.mozilla.org/en-US/docs/Glossary/CSP)) is an additional layer of security that detects and undermines certain types of attacks, including Cross-site scripting ([XSS] (https://developer.mozilla.org/en-US/docs/Glossary/XSS)) and data injection attacks. Whether it's data theft, website content contamination or malware, these attacks are the primary means.")]),t._v(" "),a("p",[t._v("We can minimize XSS attacks with CSP. CSP is also essentially whitelisted, which stipulates that browsers can only execute code from a specific source.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("More attributes can be viewed at [here] (https://content-security-policy.com/)")]),t._v(" "),t._m(15),t._v(" "),a("blockquote",[a("p",[t._v("**Cross-site request forgery (English: Cross-site request forgery), also known as "),a("strong",[t._v("one-click attack")]),t._v(" or "),a("strong",[t._v("session riding")]),t._v(", usually abbreviated as "),a("strong",[t._v("CSRF")]),t._v(" or "),a("strong",[t._v("XSRF")]),t._v(" is an attack method that forces users to perform unintended operations on currently logged-in web applications. ["),a("a",{attrs:{href:"https://www.wikiwand.com/zh/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0#citenoteRistic1",target:"_blank",rel:"noopener noreferrer"}},[t._v("1]"),a("OutboundLink")],1),t._v("  Follow "),a("a",{attrs:{href:"https://www.wikiwand.com/zh/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("cross-site script"),a("OutboundLink")],1),t._v(" (XSS) Compared to "),a("strong",[t._v("XSS")]),t._v(", users trust the designated website and CSRF uses the website's trust in the user's web browser.")])]),t._v(" "),a("p",[t._v("To put it simply, CSRF uses the login state of the user to initiate a malicious request.")]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("Assume that there is an interface on the site that submits user comments through a Get request. The attacker can then add a picture to the phishing site. The address of the picture is the comment interface.")]),t._v(" "),t._m(17),a("p",[t._v("If the interface is submitted by the Post, it is relatively troublesome, you need to use the form to submit the interface.")]),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("There are several rules for defending against CSRF:")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("For requests that need protection against CSRF, we can verify the Referer to determine if the request was initiated by a third-party website.")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("The server sends a random Token (the algorithm cannot be complex). The Token is carried on each request, and the server verifies that the Token is valid.")]),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("Although password security is mostly a back-end thing, as a good front-end programmer, you need to be familiar with this knowledge.")]),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("For password storage, it must be stored in the database in the clear, otherwise, once the database is leaked, it will cause great losses to the user. And it is not recommended to encrypt the password only by the encryption algorithm because of the rainbow table relationship.")]),t._v(" "),a("p",[t._v("It is usually necessary to add salt to the password and then perform several encryptions with different encryption algorithms.")]),t._v(" "),a("p",[t._v("It is often necessary to add a salt to the password and then encrypt it several times with different encryption algorithms.")]),t._v(" "),t._m(27),a("p",[t._v("But adding salt does not prevent others from stealing accounts. It only ensures that even if the database is compromised, the user's real password will not be exposed. Once the attacker gets the user's account, the password can be cracked by brute force. In this case, a verification code is usually used to increase the delay or limit the number of attempts. And once the user enters the wrong password, the user cannot directly prompt the user to enter the wrong password, but should prompt the account or password to be incorrect.")])])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"#xss"}},[t._v("XSS")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#how-to-attack"}},[t._v("How to attack")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#how-to-defend"}},[t._v("How to defend")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#csp"}},[t._v("CSP")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#csrf"}},[t._v("CSRF")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#how-to-attack-1"}},[t._v("How to attack")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#how-to-defend-1"}},[t._v("How to defend")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#samesite"}},[t._v("SameSite")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#verify-referer"}},[t._v("Verify Referer")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#token"}},[t._v("Token")])])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#password-security"}},[t._v("Password security")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#add-salt"}},[t._v("Add salt")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss","aria-hidden":"true"}},[this._v("#")]),this._v(" XSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"how-to-attack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-attack","aria-hidden":"true"}},[this._v("#")]),this._v(" How to attack")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- http://www.domain.com?name=<script>alert(1)<\/script> --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{name}}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("                                                  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The URL input above may change the HTML into "),s("code",[this._v("<div><script>alert(1)<\/script></div>")]),this._v(" so that there is an extra executable script out of the page. This type of attack is a reflection attack, or DOM-based attack")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There is also another scenario. For example, if you write an article that contains the attack code "),s("code",[this._v("<script>alert(1)<\/script>")]),this._v(", then users who may be browsing the article will be attacked. This type of attack is a store attack, which can also be called a DOM-based attack.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"how-to-defend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-defend","aria-hidden":"true"}},[this._v("#")]),this._v(" How to defend")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("escape")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/&/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"&amp;"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/</g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"&lt;"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/>/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"&gt;"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v('/"/g')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"&quto;"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/'/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"&#39;"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/`/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"&#96;"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\//g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"&#x2F;"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The attack code "),s("code",[this._v("<script>alert(1)<\/script>")]),this._v(" can be changed by escaping")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// -> &lt;script&gt;alert(1)&lt;&#x2F;script&gt;")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("escape")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'<script>alert(1)<\/script>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xss "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"xss"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" html "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("xss")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('\'<h1 id="title">XSS Demo</h1><script>alert("xss");<\/script>\'')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;')]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The above example uses "),s("code",[this._v("js-xss")]),this._v(" to implement. You can see that the "),s("code",[this._v("h1")]),this._v(" tag is preserved in the output and the "),s("code",[this._v("script")]),this._v(" tag is filtered.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"csp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csp","aria-hidden":"true"}},[this._v("#")]),this._v(" CSP")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can usually enable the CSP with the "),s("code",[this._v("Content-Security-Policy")]),this._v(" in the HTTP Header.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("Only allow  loading of self-site resource")]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{attrs:{class:"token header-name keyword"}},[t._v("Content-Security-Policy:")]),t._v(" default-src ‘self’\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Only allow loading HTTPS protocol pictures")]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{attrs:{class:"token header-name keyword"}},[t._v("Content-Security-Policy:")]),t._v(" img-src https://*\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Allow loading of any source frame")]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{attrs:{class:"token header-name keyword"}},[t._v("Content-Security-Policy:")]),t._v(" child-src 'none'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf","aria-hidden":"true"}},[this._v("#")]),this._v(" CSRF")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"how-to-attack-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-attack-2","aria-hidden":"true"}},[this._v("#")]),this._v(" How to attack")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.domain.com/xxx?comment="),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("attack"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.domain.com/xxx"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("CSRF"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("comment"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("attack"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"how-to-defend-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-defend-2","aria-hidden":"true"}},[this._v("#")]),this._v(" How to defend")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Get request does not modify the data")]),this._v(" "),s("li",[this._v("Do not allow third-party websites to access user cookies")]),this._v(" "),s("li",[this._v("Block third-party website request interfaces")]),this._v(" "),s("li",[this._v("Request verification information, such as verification code or token")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"samesite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samesite","aria-hidden":"true"}},[this._v("#")]),this._v(" SameSite")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("SameSite")]),this._v(" attribute can be set on cookies. This attribute sets the cookie not to be sent along with cross-domain requests. This attribute can greatly reduce the CSRF attack, but this attribute is currently not compatible with all browsers.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"verify-referer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-referer","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify Referer")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token","aria-hidden":"true"}},[this._v("#")]),this._v(" Token")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"password-security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#password-security","aria-hidden":"true"}},[this._v("#")]),this._v(" Password security")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"add-salt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-salt","aria-hidden":"true"}},[this._v("#")]),this._v(" Add salt")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Adding salt means adding a string to the original password and increasing the length of the original password.")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("sha256")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("sha1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("md5")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salt "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" password "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" salt"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])}],!1,null,null,null);n.options.__file="README.md";s.default=n.exports}}]);