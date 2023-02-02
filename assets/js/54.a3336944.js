(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{481:function(t,e,s){"use strict";s.r(e);var a=s(65),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bug分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bug分支"}},[t._v("#")]),t._v(" Bug分支")]),t._v(" "),s("p",[t._v("软件开发中，bug就像家常便饭一样。有了bug就需要修复，在Git中，由于分支是如此的强大，所以，每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。")]),t._v(" "),s("p",[t._v("当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支issue-101来修复它，但是，等等，当前正在dev上进行的工作还没有提交：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ git status\nOn branch dev\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n\tnew file:   hello.py\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n\tmodified:   readme.txt\n')])])]),s("p",[t._v("并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？")]),t._v(" "),s("p",[t._v("幸好，Git还提供了一个stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git stash\nSaved working directory and index state WIP on dev: f52c633 add merge\n")])])]),s("p",[t._v("现在，用git status查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。")]),t._v(" "),s("p",[t._v("首先确定要在哪个分支上修复bug，假定需要在master分支上修复，就从master创建临时分支：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git checkout master\nSwitched to branch 'master'\nYour branch is ahead of 'origin/master' by 6 commits.\n  (use \"git push\" to publish your local commits)\n\n$ git checkout -b issue-101\nSwitched to a new branch 'issue-101'\n")])])]),s("p",[t._v("现在修复bug，需要把“Git is free software ...”改为“Git is a free software ...”，然后提交：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ git add readme.txt \n$ git commit -m "fix bug 101"\n[issue-101 4c805e2] fix bug 101\n 1 file changed, 1 insertion(+), 1 deletion(-)\n')])])]),s("p",[t._v("修复完成后，切换到master分支，并完成合并，最后删除issue-101分支：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$git switch master\nSwitched to branch 'master'\nYour branch is ahead of 'origin/master' by 6 commits.\n  (use \"git push\" to publish your local commits)\n$ git merge --no-ff -m \"merged bug fix 101\" issue-101\nMerge made by the 'recursive' strategy.\n readme.txt | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)\n")])])]),s("p",[t._v("太棒了，原计划两个小时的bug修复只花了5分钟！现在，是时候接着回到dev分支干活了！")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git switch dev\nSwitched to branch 'dev'\n\n$ git status\nOn branch dev\nnothing to commit, working tree clean\n")])])]),s("p",[t._v("工作区是干净的，刚才的工作现场存到哪去了？用git stash list命令看看：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git stash list\nstash@{0}: WIP on dev: f52c633 add merge\n")])])]),s("p",[t._v("工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：\n一是用git stash apply恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除；\n另一种方式是用git stash pop，恢复的同时把stash内容也删了：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ git stash pop\nOn branch dev\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n\tnew file:   hello.py\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n\tmodified:   readme.txt\n\nDropped refs/stash@{0} (5d677e2ee266f39ea296182fb2354265b91b3b2a)\n')])])]),s("p",[t._v("再用git stash list查看，就看不到任何stash内容了：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git stash list\n")])])]),s("p",[t._v("你可以多次stash，恢复的时候，先用git stash list查看，然后恢复指定的stash，用命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git stash apply stash@{0}\n")])])]),s("p",[t._v("在master分支上修复了bug后，我们要想一想，dev分支是早期从master分支分出来的，所以，这个bug其实在当前dev分支上也存在。")]),t._v(" "),s("p",[t._v("那怎么在dev分支上修复同样的bug？重复操作一次，提交不就行了？")]),t._v(" "),s("p",[t._v("有木有更简单的方法？")]),t._v(" "),s("p",[t._v("有！")]),t._v(" "),s("p",[t._v("同样的bug，要在dev上修复，我们只需要把4c805e2 fix bug 101这个提交所做的修改“复制”到dev分支。注意：我们只想复制4c805e2 fix bug 101这个提交所做的修改，并不是把整个master分支merge过来。")]),t._v(" "),s("p",[t._v("为了方便操作，Git专门提供了一个cherry-pick命令，让我们能复制一个特定的提交到当前分支：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git branch\n* dev\n  master\n$ git cherry-pick 4c805e2\n[master 1d4b803] fix bug 101\n 1 file changed, 1 insertion(+), 1 deletion(-)\n")])])]),s("p",[t._v("Git自动给dev分支做了一次提交，注意这次提交的commit是1d4b803，它并不同于master的4c805e2，因为这两个commit只是改动相同，但确实是两个不同的commit。用"),s("code",[t._v("git cherry-pick")]),t._v("，我们就不需要在dev分支上手动再把修bug的过程重复一遍。")]),t._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；")]),t._v(" "),s("p",[t._v("当手头工作没有完成时，先把工作现场"),s("code",[t._v("git stash")]),t._v("一下，然后去修复bug，修复后，再"),s("code",[t._v("git stash pop")]),t._v("，回到工作现场；")]),t._v(" "),s("p",[t._v("在master分支上修复的bug，想要合并到当前dev分支，可以用"),s("code",[t._v("git cherry-pick <commit>")]),t._v("命令，把bug提交的修改“复制”到当前分支，避免重复劳动。")]),t._v(" "),s("p",[t._v("下一节"),s("RouterLink",{attrs:{to:"/pages/git/test17.html"}},[t._v("Feature分支")])],1)])}),[],!1,null,null,null);e.default=i.exports}}]);