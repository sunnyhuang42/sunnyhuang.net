---
title: 卡片助力输出， MarkDown + GitHub + LOFTER 有轻功
categories:
- selfedu
- tool
description:
---


<blockquote class="blockquote-center">作品和作品的差别，源于卡片。<br>人和人的差异，垒于习惯。</blockquote>




最近复盘，发现这大半年如有神助，几乎每月发布一个作品或项目，拿下个人探索路上一个又一个[小里程碑](#jump)。



相较过往，这输出密集程度算是突飞猛进。不禁好奇为何如此。得益于一群良师益友，叫我见贤思齐？可之前他们就在呀。因为工作节奏没有前两年紧张？或许，但光多点时间肯定不够。

思来想去，发现主要区别源于去年 9 月——那会儿我已有良好读写习惯打底，又幸运习得一套新的输出习惯，难怪如虎添翼。

好东西我向来不独自掖着。加之最近卡片写作、卡片大法传播越广，南辕北辙的输出姿势越多，体胖（pan）如我都看不下去了，撸起袖子就想……

说干就干！

咳，优雅习惯推介会，现在开始~
<!-- more -->

## 升级输出习惯

如果看过我 [《卡片助力输入输出，工具我选 WorkFlowy 》](https://ishanshan.im/selfedu/HbOutputOwetoWorkFlowy.html) 这篇文章，你应该知道若想畅快输出作品，为何卡片层级重要，以及如何挑选卡片工具。甚至你已尝试我推荐的方法，借 WorkFlowy 优化工作生活。

过去几年那套方法的确令我受益匪浅。但去年夏天，我工作情感生活状况频出，仅靠原有输出习惯，越来越不能满足诉求：

脑海中闪过无数思绪、观察，无论是为了记住还是为了忘记，都想及时捕捉，从大脑工作记忆（[working memory](https://en.wikipedia.org/wiki/Working_memory)）内存切换到外部载体；线上与人交流，输入界面常不友好，我喜欢到 MarkDown 编辑器里写好再发出，每次思考写哪、存否、存哪、命名也挺麻烦；打出不错内容未来要调取复用，再去对话界面搜寻实在繁琐，想不起在哪儿发布、意外丢失聊天记录更是徒增烦恼……

贪心如我，还想有个地儿作「[一个人的微博](https://www.yangzhiping.com/psy/quiet.html)」，同我[「品味（savoring）」生活](https://www.yangzhiping.com/psy/savoring-10.html)，或分担难过失意等当下不宜为熟人知的时光。不仅积累个人故事，录下欣然成长的自己，还能倒逼写作练习——毕竟不是私人笔记，不由得照顾读者观感琢磨文字嘛。

于是，我开始摸索更舒畅的输出姿势。结合已有的「 WorkFlowy 酝酿 + MarkDown 书写/编辑 + GitHub 托管/发布 」工作流，优化后的理想情况当如此：


- **想写就写**。无论沟通发言、朋友圈状态、写作练手，还是观察反思、日记灵感，只要想写，打开即写，不必纠结存否、存哪、命名。
- **方便检索调取，及时取用**。
  - 时间维度：三年五年甚至十年后，依然可以调取；积累三年五年甚至十年后，搜索加载依然快。
  - 空间维度：在不同电脑切换，比如工作电脑和个人电脑上，都能随时调取和更新。在移动设备也能调取并更新更好，不行也无妨，毕竟多数时候我电脑随身。
- **可作「一个人的微博」，方便积累个人故事及练习写作**。这需要内容发布后可修改，才不阻断「慢改」；鲜有广告，也不会被强推内容，没啥噪音分散注意力；支持 MarkDown ，可平滑接入原有读写发布工作流；可设置自由设定访问权限，比如分享给特定朋友或公开访问。

需求列完，眼瞅这坑我心里特没底，灌了两桶酸奶仍不见底……

好在倒腾俩月，终把坑填——

## MarkDown + GitHub + LOFTER 有轻功

庞杂需求如上，只靠一款工具难以满足。摸索再三，这套组合拳最得我心：

- **有目录视图、支持文件管理的 MarkDown 编辑器**：MWeb
- **云端同步工具**：GitHub
- **一个人的微博**：LOFTER

工具不稀奇，关键在用法。领会要点，再依已有习惯自选趁手工具，更是妙哉。

### 以「周」为单位记忆外部化

**日常以「周」为单位新建 MarkDown 文档，这周任何想写的内容，都写在当周文档里**。文档命名也省心，`文档类别代号+年月+周数`即可，比如这是我养成这个习惯至今的记录：

	Mur1709w37.md Mur1711w45.md Mur1801w01.md Mur1802w09.md Mur1804w17.md Mur1806w25.md
	Mur1709w38.md Mur1711w46.md Mur1801w02.md Mur1803w10.md Mur1804w18.md Mur1806w26.md
	Mur1709w39.md Mur1711w47.md Mur1801w03.md Mur1803w11.md Mur1805w19.md Mur1807w27.md
	Mur1710w40.md Mur1711w48.md Mur1801w04.md Mur1803w12.md Mur1805w20.md Mur1807w28.md
	Mur1710w41.md Mur1712w49.md Mur1801w05.md Mur1803w13.md Mur1805w21.md Mur1807w29.md
	Mur1710w42.md Mur1712w50.md Mur1802w06.md Mur1804w14.md Mur1805w22.md
	Mur1710w43.md Mur1712w51.md Mur1802w07.md Mur1804w15.md Mur1806w23.md
	Mur1710w44.md Mur1712w52.md Mur1802w08.md Mur1804w16.md Mur1806w24.md

**文档里，按天划分组块**，时间是一级标题，正文概要作二级标题，**按时间倒序排列**。如此便可凭目录栏随心跳转，快速修改已有内容：

![mwebtoc3.png](http://ishanshan.zoomquiet.top/share/mwebtoc3.png)


为了区分内容类型以便查找复用，我还建了套标记规则，加在内容概要之前，一目了然各条状态：

- `0`：未发出
- `1`：已发出、已使用
- `-1`：已发布后又修改，但还未同步更新到发布界面（由于我习惯多次修改，改后不会马上更新到发布界面，而是等个一两天没什么还想改的再更新，所以需要这个标记提醒自己）
- `0-`：尚未发布，但有价值，适合继续修改以备未来使用

如此，写意来临，便可立马打出 `## 0` 而后开写，方便时再加标题。甚至一天忙完，该 commit 到 GitHub 私有库，才把当天各标题补上。
<br>

如果你像我一样懒，还可借这仨技巧能省则省：

1. 一级标题所需的「当天时间」，用输入法自带的当前时间。比如在搜狗拼音输入 `sj` ，候选项就会出现当前时间，选择即可输入。如此，不仅可作一级组块区分标记，还可记录当天遐思何时开始：

	![mwebtricks1.gif](http://ishanshan.zoomquiet.top/share/mwebtricks1.gif)

	对了，当天时间最好选全 ASCII 字符的表达方式，不带汉字，未来若想跑个脚本分析也省心。比如我习惯晨间日记，可借此分析某阶段早上何时进入状态。



2. `## 0` 等常用字符，使用 aText 这类工具设置缩写规则，比如 `;0 == ## 0` ，简化输入流程。当天遐思的同步到 GitHub 所用的 commit message，当然也设缩写，比如 `uft == update for today` ：

	![mwebtricks3.gif](http://ishanshan.zoomquiet.top/share/mwebtricks3.gif)

3. 其它 MarkDown 标记比如 `#` ，以及各视图切换等常用操作，用 [MWeb 快捷键](http://ishanshan.zoomquiet.top/share/mwebtricks7.png)简化输入流程。

	![mwebtricks4.gif](http://ishanshan.zoomquiet.top/share/mwebtricks4.gif)

这样下来，每周文档只含字符，图像影音托管给七牛云，单个文档即使万字，也就十来 k 。如此这般，该文档常开也不费劲儿，我想写的现在就写;-)

还有啥优势？**轻盈省心、数据在自己手里，若想保持此输出习惯，十年百年不在话下**。

### 用「一个人的微博」促进快写慢改


记忆外部化搞定，该填贪心挖的坑。


多方测试，我发现 LOFTER 最适合作「一个人的微博」。不信你瞅 [http://mur42.lofter.com/](http://mur42.lofter.com/) ？

![cardlofter3.gif](http://ishanshan.zoomquiet.top/share/cardlofter3.gif)

不仅版式优雅，需求还都满足：

- 内容发布后可修改：满足，且所有设置，比如署名权限、浏览权限都可更改。
- 鲜有广告，也不会被强推内容：有，但相较某博可以算是不存在，很少分散注意力。如果你没关注什么人，时间线里也不会出现乱七八糟的东西。
- 支持 MarkDown ：半支持—— chrome 浏览器搭配 MarkDown here 插件即可。美中不足，是无法自动和 GitHub 同步融入我的发布流程。不过无妨，就当发朋友圈吧。
	![lofter-setting2.png](http://ishanshan.zoomquiet.top/share/lofter-setting2.png?imageView2/2/w/700)
- 可设置自由设定访问权限：满足。一个账号可设多个子空间，子空间可选择密码访问，或设定不能被站内及搜索引擎搜索。亦可设置单条内容仅自己可见。
	![lofter-setting1.png](http://ishanshan.zoomquiet.top/share/lofter-setting1.png?imageView2/2/w/700)
- 其它优势：有手机 App ；各类配置傻瓜级别，无需技术背景。

或许还有更合适的，但**最优解可遇不可求，找到满意解，先跑起来再说**：）

跑了大半年，发现不但好使，还有意外收获：我总是发布后，才很快想到要修改哪里。如果说以周为单位想写就写的「记忆外部化」习惯利于「快写」，那发到「一个人的微博」这套习惯，无疑加速了我练习「慢改」。而**「快写慢改」，正是调和人类自主心智（[Autonomous Mind](http://www.keithstanovich.com/Site/Research_on_Reasoning_files/Stanovich_Two_MInds.pdf)）和算法心智（[Algorithmic Mind](http://www.keithstanovich.com/Site/Research_on_Reasoning_files/Stanovich_Two_MInds.pdf)）、创造动人作品的最佳范式**啊！

<br>

填坑完毕，还有几个心得同你分享：

1. 如果想练习写作，那就**尽量用对外口吻而非纯心理过程的日记口吻**。如此，未来更易用在正式作品中。

	什么意思？来份日记口吻你感受一下：


	> 今天新人赛看得我直跺脚，真后悔没早点学 swing 啊。照这么推算，那开始学 swing 的最佳时机就是年度盛典：类比美国职业棒球队选秀，新人赛上「舞龄」更长的选手，更可能在新人赛出线。而且无论舞会、比赛、还是大师课，都更易进入高级别团体。

	那对外口吻会如何表达？想象你在和朋友对话——表意清晰，并突出这事儿和对方的关系：

	> 新人赛看得我直跺脚，恨学龄太短，只 swing 3 月多点儿。
	>
	> 如果你要学 Swing ，现在就来吧！年度盛典后便是最好的时机——类比美国职业棒球队选秀，新人赛上「舞龄」更长的选手，更可能在新人赛上崭露头角。此外，无论舞会、比赛、还是大师课，你都更易进入高级别团体。

	未来稍加修改，就可用于文章。比如这段后来就用到了 [Swing 新人指南](https://github.com/ishanshan/EnjoySwingDancing/blob/master/HbSwingBeginner.md) 中。总之你**想怎么用，平常就怎么练**，不会错。


2. 如果想录下个人成长，那**难过失意一定要记**，不但有助排解，更令你舒缓理性，回看时还别有一番风味：P

3. 如有同系列内容，可在**发布时打上 tag**。Tag 最好用英文，这样未来若想分类查看，易凭网址直达。比如：

	- [http://mur42.lofter.com/tag/dance](http://mur42.lofter.com/tag/dance)
	- [http://mur42.lofter.com/tag/learning](http://mur42.lofter.com/tag/learning)
	- [http://mur42.lofter.com/tag/collaborate](http://mur42.lofter.com/tag/collaborate)

4. 如果你乐意被人偶遇，却不想被人有意找到，那就**使用子空间、设置不可被外部及站内搜索引擎检索**。此外，用空间里的内容形成作品后，及时隐藏痕迹——删掉或设为仅自己可见，不怕一万只怕万一嘛。



从此，我便沉浸在这样舒爽的输出习惯中自拔不能：当周 MarkDown 文档常开，随时记忆外部化。那些需要发布的，就贴到对应渠道发出。如果想到要修改，就在 MarkDown 编辑器里改好，再更新到对应渠道。每天 commit 同步到 GitHub 一次；若有值得保存的版本对比，则改动后立即 commit 一次留备后用。





## 友情提示

### 所用工具扫盲

机敏如你肯定已经发现，**增进作品质、量的关键，在以「周」为单位记忆外部化，并用「一个人的微博」促进快写慢改**。能实现这个效果的工具不少，我推荐 MWeb + GitHub + LOFTER ，是基于已有工作流（WorkFlowy 酝酿 + MarkDown 书写/编辑 + GitHub 托管/发布）。你完全可以根据已有习惯选择工具，能三年五年甚至十年五十年，持续使用促进输出，你满意就好：）

如果你未满意，并相信我的品位，还乐意走出舒适区，路在这里：

- [MWeb](https://www.mweb.im/)：我最常用的 MarkDown 编辑器，刚发布 3.x 版本。Mac 付费软件，从得到的心流体验来看个人觉得很值；费用也不高，100+ CNY，当少到外头聚次餐就好。[Typora — a markdown editor, markdown reader.](https://typora.io/) 也不错，Mac/Win 均支持，免费，带目录栏、支持加载本地文件夹、可自行设定 CSS 渲染样式。
- [GitHub](https://github.com/)：我最常用的文档托管平台。它可供性极强，且内置很多专家级的内隐模式，如果使用得当，能极大降低个人创作复杂度。如果你之前没接触过，别被不明觉厉的操作吓退，可看我梳理的这份 [给文字工作者的 GitHub 上手攻略](https://ishanshan.im/tool/HbGitHubPre)。实在难以学会也别勉强，可用下文云端同步的替代方案，甚至只保存在本地。
- [LOFTER](http://lofter.com/)：网易旗下的轻博客平台。 [http://mur42.lofter.com/](http://mur42.lofter.com/) 这个示例使用的主题模板是「悦」。
- [Markdown Here](https://markdown-here.com/) ：chrome 上的插件。能把 MarkDown 未渲染的内容粘贴到网页输入框后，一键渲染成定制的 MarkDown 样式。
- [WorkFlowy](https://workflowy.com/) ：我用了快 5 年的卡片层级工具。真爱一生推，玩转指引见 [《卡片助力输入输出，工具我选 WorkFlowy 》](https://ishanshan.im/selfedu/HbOutputOwetoWorkFlowy.html)。

这套习惯灵感来源参见：

- 知识创造层级：[构建优雅的知识创造系统](https://mp.weixin.qq.com/s/j6fqcvzER6gv1JnPBqnYkA)
- 快写慢改：[快速写作模式谈 - 阳志平的网志](https://www.yangzhiping.com/psy/writers-model.html)、[致新同学 —— 认知写作学周岁小记 - 阳志平的网志](https://www.yangzhiping.com/psy/YangToWriter003.html)
- 一个人的微博：[一个人的微博 - 阳志平的网志](https://www.yangzhiping.com/psy/quiet.html)
- 品味生活：[品味（2）：“品味”生活的10种策略 - 阳志平的网志](https://www.yangzhiping.com/psy/savoring-10.html)
- 「if…then…」&WOOP：[WOOP — Character Lab](https://www.characterlab.org/woop/)

知其然又知其所以然，你将领会这套习惯为何优雅有效，如何持久高效。

### 省钱及移动端读写替补方案

手快的朋友估计已经发现，这套工具只适合 Mac 用户。如果你恰属此类，恭喜，无论你是否常在移动端读写，都可找到应对姿势——

如果你不常在移动端读写，且有 GitHub 隐私库或不差钱，可像我一样应对万一：移动端若要查找，直接在手机浏览器登录 GitHub 搜索。若要写点什么，就用与电脑自动同步的 App 先写，比如 iOS 的 Notes 。写完想发布就发布，之后再迁移到当周 MarkDown 文档中。这样一来，未来若想复用，依然检索 MarkDown 文档即可。如果只找已发布的内容，那可直接到发布渠道查找，比如直接到 LOFTER 里检索。

如果你常在移动端读写，或想省下 GitHub 隐私库 $7/mon 的开销，那可只用 MWeb ，设置 iCloud 或 Dropbox 同步。详情参见 [iOS 版 MWeb 正式发布及简介 - MWeb](https://zh.mweb.im/introducing-mweb-for-ios.html)、[在 iOS 中如何使用 MWeb for Mac 文档库 - MWeb](https://zh.mweb.im/how_to_use_library_in_ios.html)。 # 我没试过，有问题请找 MWeb。

至于其它操作系统，找个带目录视图的 MarkDown 编辑器就好，比如 [Cmd Markdown 编辑阅读器](https://www.zybuluo.com/cmd/)。但肯定不如 MWeb 保护心流（[flow](https://en.wikipedia.org/wiki/Flow_(psychology))）。

那咋整？老实讲，如果**真想提升创作质&量**，我就算喝俩月西北风也咬牙换成 Apple 产品啊。毕竟换个[优雅舒畅的创作环境](https://www.yangzhiping.com/psy/mac.html)，很快就发觉真值当！



### 无需纠结「如何写卡片」




卡片新手窥豹一斑，难免犹疑卡片多大才合适，这载体是不是卡片，B6 是卡片，A4 是不是就不能用作卡片？……

此等问题真是自寻烦恼，看我嘴型：无需纠结。

要知道，在[知识创造体系](https://mp.weixin.qq.com/s/j6fqcvzER6gv1JnPBqnYkA)里，「卡片」只是一种粒度，而非形式。那些没到「文章」层级的零散思绪，都可算作「卡片」。

更何况咱们的目的，从来都不是「写卡片」，而是「更快输出更多、更美的完整作品」呐。**一篓子完美卡片，也比不上一份完整作品**。所以，与其纠结卡片怎么写、写什么，不如思考你要输出什么作品吧——有了目标，你自会开始留心观察、思考，恨不得把那些灵感都摁住，就怕一不小心跑了呢。

至于如何积累零散思绪，那就见仁见智了。但万变不离其宗，能让你更高效自在地输出就成。

所以，如果你发现无论用[纳博科夫牌巴掌大的索引卡](http://ishanshan.zoomquiet.top/share/cardnabcov7.png)，还是[梅棹忠夫牌 B6 大的京大式卡](https://www.amazon.cn/dp/B003FGLVPO/ref=sr_1_1?ie=UTF8&qid=1531642792&sr=8-1&keywords=%E4%BA%AC%E5%A4%A7%E5%BC%8F)，怎么都不得劲，这很正常。继续尝试就好。

比如我，这卡那卡都体验了一把，还是钟情大二就开始的习惯：输出始于**横着 A4 纸**捕捉灵感、梳理思路，写画不羁。一些长文如[《谢谢你给她的时光》](https://ishanshan.im/murmur/Letter2XY4Year2017.html)、[《你丁酉年的故事》](https://ishanshan.im/selfedu/Review2017LunarCalendar.html)以及本文，更是如此：不仅起念阶段，甚至每个组块都要好几张 A4 纸自由写画，梳理想传递什么、引发什么行动，才敲成字符。当然，还会混合其他姿势，比如本文提到的随时记忆外部化+一个人的微博、之前推荐的 WorkFlowy 等。


![cardsample3.png](http://ishanshan.zoomquiet.top/share/cardsample3.png?imageView2/2/w/1000/format/jpg|imageMogr2/size-limit/100k!)
 <center>👆🏻A4 纸配板夹，走遍天下都不怕</center>  

<br>

要而言之，**「卡片」更多是一种粒度，绝不能当作形式，更不能标为目的**。

但话说回来，就算八仙过海，我也严正提醒你**别用 GitHub Issues 积累零散思绪**：数据不好迁移，且不便移动重组、调取复用，网页加载还不稳定。总之不利于形成作品。不信你想想自己由此输出的作品质、量？


### 如何积累人名术语反常识等卡片

熟悉开智文化的朋友应该对[术语卡、反常识卡、人名卡等](https://mp.weixin.qq.com/s/jaFmXBPEjGr0QoVJz8BR7w)都不陌生，我也在积累。

对于人名，我用表格整理相关信息，比如：

![cardsample2.png](http://ishanshan.zoomquiet.top/share/cardsample2.png?imageView2/2/w/900)

不过尚未用得满意，无实践案例可举……你若有满意心法记得和我分享~

<br>

反常识和术语倒是可以聊个五毛钱的。

<br>

**遇到反常识，确认可信后，我便会问自己这个问题：基于这个信息，我应停止做、开始做或继续保持什么？然后转成「if…then…」提升执行几率。**

比如查论文得知「[一个人的快乐程度，和他经历的快乐次数正相关，而非经历的快乐强度](https://link.springer.com/chapter/10.1007/978-90-481-2354-4_10)」，更要继续保持「[专注一小时，swing 十分钟](https://ishanshan.im/selfedu/YouNeedSwing.html)」的小憩节奏。

再如上网听闻「[初级商业人士拼体能，中级拼技能，高级又回到拼体能](https://ishanshan.im/murmur/TipsEfficiencyMorningExercise)」，发觉应加大有氧运动量，但自己经常偷懒，便有了「如果私教训练完很累想偷懒，就先喝点水，在健身房外的楼道里来回慢走 5 分钟后，再开始做有氧」的行动脚本。

又如看《超越智商》发现原来通常诊断假阳性概率不低，便提醒自己，如果面对阳性结果，别急难过，先了解发病率。

还如从《哈佛商业评论》了解到[饮食也会影响自律，低血糖饮食利于自律](http://www.hbrchina.org/2016-08-10/4411.html)，便打算继续保持天天健康餐，如果外出就餐，也少摄入碳水和脂肪；又想起决定你我人生的决策也就二十多个，便找了家定期换菜谱、可以提前两周排餐的健康餐外卖充了 10000 块一直吃，省去考虑「今天吃啥」的麻烦释放决策内存……




随着「if…then…」增多，我开始汇集整理，成体系的集为指南，比如 [如果我来陪你走一程·养娃清单](https://github.com/ishanshan/ForFamily/blob/master/HbParenting.md)、[CollaborationGuide4Shaper](https://github.com/ishanshan/CollaborationGuide4Shaper) ，零散的先汇到 WorkFlowy 特定节点「[随手复盘](https://workflowy.com/s/CO_N.rltyKgPOoe)」，不时翻看、更新：

<iframe  width='700' height='500' frameborder='1' scrolling='no' src="https://workflowy.com/embed/CO_N.rltyKgPOoe"></iframe>

你可能好奇，我哪来的动力给大脑编这老多脚本？很简单，知道「信息关键不在输入多少，而在影响行动转成输出」，并深信「**这个世界不缺反常识，缺的是行动，以及能让自己行动的行动**」罢。






<br>

至于陌生术语，除了上述行动，我还会把这个术语的概念、出处等信息整理到 WorkFlowy 或 zotero 对应节点。比如：

![cardsample1.png](http://ishanshan.zoomquiet.top/share/cardsample1.png)

如何用自己的话进一步表述，则是文中要用时，再结合语境整理成文，并深入查证确认使用正确。以「认知闭合」和「科学素养」这俩术语为例：

之前搜集的[术语释义](https://workflowy.com/s/CO_N.I0UGEwbZEL) ：

<iframe  width='700' height='500' frameborder='1' scrolling='no' src="https://workflowy.com/embed/CO_N.I0UGEwbZEL"></iframe>

最后用在文章里：


> 人都追求认知闭合(need for cognitive closure)，给行为找一个合理解释。
>
> 你越来越喜欢向科学求解：每理解一个术语、理论或范式，世界就会愈简单清晰，你也拥有更大的自由，离低水平的重复更远。生活，是神秘岛；科学素养，是躲在暗处帮你的老船长。而这里，有国内教育领域最雄厚的脑与认知科学背景，叫老船长为你开路。
>
> 在科学领域探索越多，你会越认同一定要站上前人肩膀，才能远离低水平重复，不重复造轮子，获得可叠加的进步。面对新出现的解释体系，你会下意识地按这套思路思考：提出这个理论是为了解决什么问题或解释什么现象，解决这个问题或解释这个现象的意义何在？已有理论是如何解决这个问题或解释这个现象的，有什么不足？新提出的理论有何优势，如何巧妙解决这些不足，证据是什么？新的理论还存在哪些可完善之处？
>
> 你还会养成很多助你越跑越快的习惯：比如读书先翻版权页，看首次出版年份，判断其处于学术脉络的什么位置，是认知科学诞生前还是诞生后？处于历史时代的什么位置，是互联网普及前还是普及后？或如喜欢翻论文，借助这些高度结构化的文本，高效寻找解答，无论是结论的限制条件，或是研究空白，还是可继续按图索骥的参考文献。又如条件反射地查作者学术背景、h 指数，助力判断其观点靠谱程度。还如经常主题阅读，利用大脑强大的模式识别能力促进你知识体系构建；老实积累术语、人名，勾画你认识世界的地图；及时把反常识信息化为「if…then…」，修养你探索世界的马达。甚至把「定义-验证-质疑」这套思路，不自觉地用于工作生活……
>
> ——[《你丁酉年的故事》](https://ishanshan.im/selfedu/Review2017LunarCalendar.html)




## 小结

作品和作品的差别，源于卡片。人和人的差异，垒于习惯。一切皆时间的函数，时间最可怕的是复利效应。

怎么做？小女子我已先干为敬，你看着办;-)

<br> 

<span id = "jump">附：这半年的里程碑</span>


- 十二月：发出[《谢谢你给她的时光》](https://ishanshan.im/murmur/Letter2XY4Year2017.html)。第一次全篇写故事，终于有底气说自己从「逻辑」「文采」，爬上了「故事」这座写作第三峰。
- 一月：发布 [EnjoySwingDancing 指南](https://github.com/ishanshan/EnjoySwingDancing)。头一遭有使命感地分享个人爱好，这也是 GitHub 这个全球最大同性交友网站上头一回有人分享舞蹈项目吧。
- 二月：发布个人年度回顾[《你丁酉年的故事》](https://ishanshan.im/selfedu/Review2017LunarCalendar.html)。尝试换个视角记录生活：用预言的方式写回顾，呈现自评反思更自然；并发现自己已能谋篇布局万字故事。还在写作过程更清晰自己要去何方。
- 三月：发布 [CollaborationGuide4Shaper 仓库](https://github.com/ishanshan/CollaborationGuide4Shaper)。终于集结分享对「如何高效共创」的观察思索，从此被问相关问题可甩资料。
- 四月：完成集团新人入职机制和学习资料（[团队协作技能自学&自检清单](https://docs.google.com/spreadsheets/d/1xdfbrkQgvuV0FvD5uGFEQ070GC2Ybi2yenDEQAmRj9o/edit#gid=0) 是其一）的重大升级，了却一桩心愿：没我在，这些事情也易跑得不错。且第一次划定各技能进阶标准「存活」、「感觉良好」、「更快更好更强」，以便用户按需取用。还摸索出用表格做检查清单的优雅模式，给下个阶段的输出帮了大忙。
- 五月：输出[策略产品经理训练营作业手记](https://ishanshan.gitbooks.io/road2strategypm/content/)。第一次正儿八经地参加线上付费课程。并拿到优秀学员（5/145），点亮新技能树。且 [网易蜗牛读书增长方案](https://road2strategypm.ishanshan.im/CONTENT/Chap5Task.html) 被评为精选，是当期课程里唯一一份精选作业，也是课程至今这章作业的唯一精选。
- 六月：对外较逊色，只完成博客三年来第一次改版，并更换域名清除这两年的困扰：博客在微信访问不畅，被安全警示及重排。不过酝酿了本文及接下来几篇重要博文。

## CHANGELOG

- 181231 增加 Windows MarkDown 编辑器推荐（[Typora](https://typora.io/)），把开头内容移到附录
- 180720 和 MWeb 开发者确认目录视图调整方案后，修改 MWeb 推荐说明
- 180717 根据反馈增补内容，强调增进作品质、量的关键，在以「周」为单位记忆外部化，并用「一个人的微博」促进快写慢改，而非具体哪个 App
- 180716 优化样式和表达
- 180715 累计快写慢改近 50h 终于发布
- 180707 创建
