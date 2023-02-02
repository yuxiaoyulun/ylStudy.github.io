(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{501:function(t,e,s){"use strict";s.r(e);var a=s(65),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[t._v("#")]),t._v(" 删除文件")]),t._v(" "),s("p",[t._v("在Git中，删除也是一个修改操作，我们实战一下，先添加一个新文件test.txt到Git并且提交：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ git add test.txt\n\n$ git commit -m "add test.txt"\n[master b84166e] add test.txt\n 1 file changed, 1 insertion(+)\n create mode 100644 test.txt\n')])])]),s("p",[t._v("一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用rm命令删了："),s("code",[t._v("$ rm test.txt")]),t._v("\n这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，git status命令会立刻告诉你哪些文件被删除了：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ git status\nOn branch master\nChanges not staged for commit:\n  (use "git add/rm <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n\tdeleted:    test.txt\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')])])]),s("p",[t._v("现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令git rm删掉，并且git commit：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git rm test.txt\nrm 'test.txt'\n\n$ git commit -m \"remove test.txt\"\n[master d46f35e] remove test.txt\n 1 file changed, 1 deletion(-)\n delete mode 100644 test.txt\n")])])]),s("p",[t._v("另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本："),s("code",[t._v("$ git checkout -- test.txt")]),s("br"),t._v(" "),s("code",[t._v("git checkout")]),t._v("其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。"),s("br"),t._v(" "),s("strong",[t._v("注意：从来没有被添加到版本库就被删除的文件，是无法恢复的！")])]),t._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("命令git rm用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。")]),t._v(" "),s("p",[t._v("下一节"),s("RouterLink",{attrs:{to:"/pages/git/test9.html"}},[t._v("远程仓库")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);