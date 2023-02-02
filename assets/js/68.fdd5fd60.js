(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{496:function(t,e,a){"use strict";a.r(e);var s=a(65),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"时光机穿梭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时光机穿梭"}},[t._v("#")]),t._v(" 时光机穿梭")]),t._v(" "),a("p",[t._v("我们已经成功地添加并提交了一个readme.txt文件，现在，是时候继续工作了，于是，我们继续修改readme.txt文件，改成如下内容")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Git is a distributed version control system.\nGit is free software.\n")])])]),a("p",[t._v("现在，运行git status命令看看结果：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git status\nOn branch master\nChanges not staged for commit:(更改未暂存)\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n    modified:   readme.txt\nno changes added to commit (use "git add" and/or "git commit -a")\n')])])]),a("p",[t._v("git status命令可以让我们时刻掌握仓库当前的状态，上面的命令输出告诉我们，readme.txt被修改过了，但还没有准备提交的修改。")]),t._v(" "),a("p",[t._v("虽然Git告诉我们readme.txt被修改了，但如果能看看具体修改了什么内容,所以，需要用git diff这个命令看看：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git diff readme.txt \ndiff --git a/readme.txt b/readme.txt\nindex 46d49bf..9247db6 100644\n--- a/readme.txt\n+++ b/readme.txt\n@@ -1,2 +1,2 @@\n-Git is a version control system.\n+Git is a distributed version control system.\n Git is free software.\n")])])]),a("p",[t._v("提交修改和提交新文件是一样的两步，第一步是git add：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git add readme.txt\n")])])]),a("p",[t._v("同样没有任何输出。在执行第二步git commit之前，我们再运行git status看看当前仓库的状态：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git status\nOn branch master\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n    modified:   readme.txt\n')])])]),a("p",[t._v("git status告诉我们，将要被提交的修改包括readme.txt，下一步，就可以放心地提交了：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git commit -m "add distributed"\n[master e475afc] add distributed\n 1 file changed, 1 insertion(+), 1 deletion(-)\n')])])]),a("p",[t._v("提交后，我们再用git status命令看看仓库的当前状态：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git status\nOn branch master\nnothing to commit, working tree clean\n")])])]),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ul",[a("li",[t._v("要随时掌握工作区的状态，使用git status命令。")]),t._v(" "),a("li",[t._v("如果git status告诉你有文件被修改过，用git diff可以查看修改内容。")])]),t._v(" "),a("p",[t._v("下一节"),a("RouterLink",{attrs:{to:"/pages/git/test4.html"}},[t._v("版本回退")])],1)])}),[],!1,null,null,null);e.default=i.exports}}]);