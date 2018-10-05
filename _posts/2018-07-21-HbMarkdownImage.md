---
title: 这样用七牛，插图优雅又省心 · MarkDown 码字发文最佳实践categories: 
- tool
- community
description: 一人百人、五年十年都能优雅又省心？嗯。
--- 

近期陆续遇到几个 MarkDown 码字发文棘手问题，最后却都轻松化解：

- 某张图片已用于十多篇文章，但图片有误需要更新。拿到新图，半分钟就替换完毕。
- 辛苦写了几篇文章，同步到 App 中发现加载太慢，原来是图片最好不超过 100k/张，但宽度至少 750 。几十张图片啊……眼睛一转，5 分钟就优化完毕。
- 之前的图床地址失效，图片无法显示，几年的文章都需更新配图，愁煞人。翻了翻本地图片，20 分钟就更新完毕。

想来多归功这三年的插图习惯。再看周围朋友，陆续遭遇以下插图困扰，耗于烦心琐碎而自拔不能，很是不值。

正好最近有空，分享出来助更多朋友少走弯路，也能一人百人、五年十年，都优雅从容，轻松省心：）


## MarkDown 码字发文插图困扰

常在河边走，怎能不湿鞋。使用 MarkDown 码字发文，迟早遭遇以下烦恼：

好不容易找到看着不错的图床，上传图片、顺利发文，结果过段时间，图片无法显示……想重新再传，可眼瞅这乱码 URL 怎么都没法识别当初用的哪张图……不想就此不管破罐破摔，也不想花时间重新找图作图，怎么办？

总算找到满意图片，可实在太大，为了图文浏览体验必须压缩。问题来了——压缩后，本地保留哪个版本？高清压缩都保留，占空间；只保留一个，留哪个？留大的，那下回再用又得压缩一遍；留小的，那高清场合又得再找……

那看情况吧，先缩了再说。无奈烦恼也不少：得调试好多次才能找到合适参数；调试过程，难免保存导出，判断是否清晰合用，不行又得删掉重来。若是网页处理工具（比如美图秀秀），上传下载也挺烦。[TinyPng](https://tinypng.com/)、[SmartResize](https://www.smartresize.com/zh-cn) 是快捷，但没法限定输出大小，比如每张 100k 以下……

越高产，新烦恼来得越快：是一篇图文一个文件夹，里头装 MarkDown 文档和所用图片；还是所有图片一个文件夹，文档一个文件夹？到底怎么管理更省心，五年十年不添堵？

团队编辑图文，各编各文各找各图。怎么做，才能提高效率，减少重复劳动？怎样做，才能便于多人调用、未来复用？

……

要解决这些怎么办的问题，先要了解 MarkDown 配图机制——

## MarkDown 配图机制

传统文档，是把图片复制了一份搁文档里。 **MarkDown 文档，则是把图片搁云端（俗称图床），映射在文档里**。什么意思？你可以把文章想象成一个画廊，传统画廊，是把画直接放画框里；MarkDown 画廊，则是存画于线上资源库，把画投影到画框。

**这样有什么好处？大大降低文档大小，轻盈畅快**。且图片管理方便：既然是把画投影在画框，那理论上只要改变投影参数，比如焦距、投影距离等，就可改变画框中画面的大小、清晰程度，不需调整原画。

**更大优势，是需求更复杂时，管理复杂度却变化不大**：比如想让多个画框出现该画，投影过去就好，不会多占 N 倍空间；不同位置所需画面大小、清晰程度不同，调整投影参数就好；如需替换各处的这幅画，直接更换原画就好，不必挨个替换画框。

理论挺美，如何实现？需要这套习惯——


## 如何插图优雅又省心


### 1. 使用稳定且支持图片在线处理的图床

「稳定」好理解，登录才能传图的大厂图床，一般都有保障。

「支持图片在线处理」，则鲜为人知。还记得前面打的比方吗——改变投影参数，比如焦距、投影距离等，就可改变画框中画面的大小、清晰程度。实际操作，就是直接在图片地址后添加对应参数，即可简单处理图片，如限制宽高、大小，转换图片格式等。

举个例子：

本来宽 910 的图片：http://ishanshan.zoomquiet.top/clipping/scientific_method.png
![scientific_method.png](http://ishanshan.zoomquiet.top/clipping/scientific_method.png)


我希望最宽 400 ，于是在地址上加上限制宽度的参数 `?imageView2/2/w/400` ，图片地址变为 http://ishanshan.zoomquiet.top/clipping/scientific_method.png?imageView2/2/w/400 即可：
![](http://ishanshan.zoomquiet.top/clipping/scientific_method.png?imageView2/2/w/400)


但这并非所有图床都可实现，找了一圈，发现目前只有七牛云支持。

七牛对用户也大方，注册并实名认证，便可获得标准用户权益：无上限免费上传流量，10GB 永久免费存储空间，10万次/月 PUT/DELETE 请求，100万次/月 GET 请求，10GB/月免费 CDN 下载流量。一般个人博客足够了。

美中不足，是他们最近调整了外链策略——需你有[已备案的域名](https://developer.qiniu.com/af/kb/3987/how-to-make-website-and-inquires-the-police-put-on-record-information)才可稳定使用。但想想未来省心省力，还是忍一时麻烦备案吧。稳妥起见，建议你备案和博客不一样的域名，万一博客有违规内容被取消备案，也不影响图床。


此外，七牛属面向技术人士的平台，对非技术人士不太友好：官方上传工具图形界面体验不佳，甚至没有；帮助文档繁杂且技术气息浓郁，容易懵圈。

好在也得益于这是面向技术人士的平台，不少热心工程师已自行开发上传应用，解决普通用户上传问题。还有不少热心又懂点技术的伙伴，整理了图文指南示范关键步骤。


#### 如何高效上传文件至七牛云

图床上传工具繁多，为了应对愈发复杂的需求，我有以下要求：

* 支持使用原文件名，URL 能保留原语义，而非转译成数字
* 支持批量上传
* 支持设定上传前缀，以便区分不同类型内容，比如 `../share/image1.jpg` &  `../clipping/image2.jpg` 
* 支持多个存储账号，以便灵活切换个人及公司图床

左看右看，Mac GUI 工具，只发现 [Dropzone 3](https://aptonic.com/) 搭配 [这款适用于 Dropzone 3的七牛上传工具](https://blog.kyleduo.com/2017/02/27/qiniu-upload-for-dropzone/) 能全满足。配置好后使用也方便，拖动即可上传并获取图片地址。后者免费，前者收费，不过不贵—— 60 块，不到一顿饭就能拿下。 CLI 工具，官方的即可，参见 [命令行工具(qshell) - 七牛开发者中心](https://developer.qiniu.com/kodo/tools/1302/qshell) 。

如何获取配置七牛上传工具所需的 Bucket 、Access Key（下文简称 AK）、Secret Key（下文简称 SK） 等账号信息，见[快速入门 - 七牛开发者中心](https://developer.qiniu.com/kodo/manual/1233/console-quickstart) 、[怎么获取或者找到 Access Key 和 Secret Key - 七牛开发者中心](https://developer.qiniu.com/af/kb/1479/how-to-access-or-locate-the-access-key-and-secret-key)。

如果你只有前俩要求，选择范围会广些，比如：

Mac:

* [Mac七牛图床与文件批量上传工具 - 简书](https://www.jianshu.com/p/694dad59f20c)
* [利用Alfred Workflow快速上传粘贴板图片至七牛图床并在Markdown中引用 - 作业部落 Cmd Markdown 编辑阅读器](https://www.zybuluo.com/fyywy520/note/317999)


Win:

* [MPic-图床神器-免费图床,不限流量,专业图床工具](http://mpic.lzhaofu.cn/)
* [七牛 Markdown 图片快速上传工具 - Veritas501's Blog](https://veritas501.space/2017/12/12/%E4%B8%83%E7%89%9B%20Markdown%20%E5%9B%BE%E7%89%87%E5%BF%AB%E9%80%9F%E4%B8%8A%E4%BC%A0%E5%B7%A5%E5%85%B7/)

但这难保一人百人、五年十年依然优雅省心，你根据个人情况掂量吧：）


#### 如何高效在线处理图片

如何在线处理图片，七牛给出了详细的文档 [图片处理使用说明 - 七牛开发者中心](https://developer.qiniu.com/dora/manual/3683/img-directions-for-use) 。

不过每次处理图片都去翻这文档、排列组合不同参数，就如定向越野，好不容易有捷径可走，结果看捷径地图比不抄近路还花时间，岂不南辕北辙？

好在办法总比困难多——我做了份 cheat sheet ，MarkDown 码字发文专用：[Hb7niuImageEditOnline · OpenMindClub/Share Wiki](https://github.com/OpenMindClub/Share/wiki/Hb7niuImageEditOnline) 。


凭此 cheat sheet ，只需判断原图是什么格式、是否大于 2M ，即可选择对应参数，限制图片大小。

如果效果不满意，可直接调整 URL 参数，在浏览器中查看结果，满意后把该 URL 更新到文档中即可：

![7niuonlineedit1.gif](http://ishanshan.zoomquiet.top/share/7niuonlineedit1.gif)

为了效率，编辑时我一般批处理：把一篇或几篇文章的图片都上传到对应位置后，再统一处理大小。增加参数时，先判断用得最多的参数，批量替换，再微调。

比如，某五个文档所用图片，多是 < 2M 的 jpg 。我便在可多文档查找替换的编辑器（比如 [Atom](https://atom.io/)）里，用 `search in directory` 批量检索出这些文档里的 `.jpg)` 字段，批量换成 `.jpg?imageMogr2/size-limit/100k!)` ，再手动修改原图大于 2M 的图片 URL 参数，改为 `?imageView2/2/w/1000|imageslim` 。

### 2. 图片放同一文件夹

若想未来管理省心，需要尽量把配图放同一文件夹。不仅减少存储时不必要的决策、取用时查找的麻烦，还利于应对万一。

比如对于个人博客的图片，我一般都放本地 share 文件夹，同步时选 `share/` 前缀，比如 `http://ishanshan.zoomquiet.top/share/cardsample1.png` 那些收集来的有价值的图片，则放 clipping 文件夹，选 `clipping/` 前缀，比如 `http://ishanshan.zoomquiet.top/clipping/scientific_method.png` 。

如此，万一原图床地址失效，便可直接把这俩路径下的图片立马上传新图床，再批量替换对应文档里的图片主域名。比如把 `ishanshan.zoomquiet.top` 替换成新域名即可。 

团队使用同理。再借本地同步盘，同步对应文件夹就好。这样一来，新人初来乍到，也能平滑接入，使用原有片源、贡献新片源。

需要注意的是，此处所用并非云盘，是**本地同步盘**，能**实时同步本地指定文件夹**的那种。Dropbox、坚果云、亿方云等都可实现。

### 3. 图片名用英文标注绝对属性

为何命名要用英文，见我老文 [《命名用英文，烦恼少大半 · 团队文档命名指南》](https://ishanshan.im/community/HbDocName.html)。

成，那就不用中文。于是有朋友这么来给图片命名 `2017-11-09-l-stone-0-3-pic4-new.jpg` ……

这有什么后果？如果只是个人文章，未来几乎不会再用这些图，你也不计较识别时得多花点时间点开预览，都好说。但如果发生在团队图库呢？同事若想使用，是不是就得翻看到底是啥，逐个查阅确认？假设每张图得花 1.5s 预览，每天由于名称无法马上识别得多预览 10 张图，10 位同事得多花多少时间？100 位同事呢？……好心情和心流都是被这些琐碎小事给打飞的……

那图片怎样命名，才不易给自己和团队找事？

**以绝对属性而非相对属性命名，令图片树状排列**。具体来说，命名规则为 `绝对属性主题代号+图片序号`。

为什么要这样？相信你多少有体会，团队文件管理，最好少用文件夹、减少层级降低管理复杂度。那文件怎么分类？**最好以名称字母自动排序区分各主题文件**。若大主题下还想细分，则在大主题代号后加细分名称。如「家庭场景画面」为 `family`，「有爸爸的家庭画面」，命名则在 `family` 后加 `dad` ，即 `familydad` 。

如果还没感觉，可瞅瞅这个例子：

```
- 序号 1~9999
- 主题代号举例
	- family 家庭场景
		- familydad 有爸爸的家庭画面
		- familymom 有妈妈的家庭画面
		- familyplay 家庭玩耍
	- housework 做家务
	- injury 受伤场景
	- learning 学习场景
	- object 物品
		- objectcup 水杯
		- objectbag 书包
		- objecttoy 玩具
	- unhappy 不开心的场景
		- unhappydad 不开心的爸爸
		- unhappyparents 不开心的家长
	- book 图书封面：
		- 规则：`book_书名首字母缩写`
		- 注意：有英文名的优先使用英文名，没有的话用中文名首字母缩写
		- 举例：《The Very Hungry Caterpillar》 封面图片命名 `book_tvhc` 
```

如果你们团队作业，还请不要轻易改动里头的文件名。毕竟改动后，就难快速在 MarkDown 文档里搜出这此图。此外，保存图片尽量清晰大图，以便未来用于其它场合（比如易拉宝、网站等）。

## FAQ

### 新文件会覆盖原图不？

为了你少出乱子，七牛默认上传策略不能覆盖原图。所以如果你想剪裁图片后再上传，最好修改文件名，比如在文件名后加`1`。

实在不想更改图片地址，只想直接显示新图，也成——可自行检索 `七牛` `上传策略` `覆盖` 等关键词解决。反正我瞅了瞅就溜回来改文件名重新上传了，祝你好运：P


### 如何拥有优雅的图床域名？

标准用户新创建存储空间后，会获得这类`*.bkt.clouddn.com` 系统自动生成的测试域名。

如果有条件，建议[在中国大陆备案一个域名](https://developer.qiniu.com/af/kb/3987/how-to-make-website-and-inquires-the-police-put-on-record-information)，图床专用。这样就可以[自定义七牛空间域名](https://developer.qiniu.com/fusion/manual/1367/custom-domain-name-binding-process) ，更稳定，图片 URL 也更干净清晰。



### 文章发到公众号和自建网站，如何不必重复传图？

在 MarkDown 编辑器写完图文，想一键排版到公众号，可参考 [markdown 高效撰写微信公众号文章 - 简书](https://www.jianshu.com/p/8197b59aec98) 。

划重点：在 MarkDown Here 渲染后，「**剪切排版内容，再粘贴**」，并等一会儿，图片才能正常显示。

如果你嫌原配的 CSS 丑，可以自己改，或直接用别人改好的。后者在网上能搜到不少，比如 [huanxi007/markdown-here-css。](https://github.com/huanxi007/markdown-here-css) 。



### 团队如何优雅共用七牛空间？

七牛不支持团队账号，登录即有最高权限。这要是谁手滑改了什么配置，岂不乱套？

莫担心，还记得你前面获取的 AK SK 等配置信息吧？每个标准账号可设置两对 AK SK ，以及 N 个不同空间——不同角色使用不同的配置信息就好。

比如内容同事使用 `AK_1` `SK_1` 和 `content_1` 空间，内容志愿者使用 `AK_2` `SK_2` 和 `content_1` 空间；这样即使换了一届志愿者，想保证信息安全，直接更新 `AK_2` `SK_2` 为 `AK_3` `SK_3` 就好。如果还有团队也想用 content_1 空间，并想来单独一套 AK SK ，可把空间授权别的账号读写，这样你就可以有多对 AK SK 了，详见[空间授权 - 七牛开发者中心](https://developer.qiniu.com/kodo/manual/3647/authorization-of-the-space) 。

<br> 

星移斗转，工具必会推陈出新，但省心原则大体如上。

工具使用问题请自行检索或联系客服，习惯疑问欢迎留言交流。

愿你也远离烦心琐碎，多多拥抱心流：）

## 关键链接汇总


- 七牛注册：[https://portal.qiniu.com/signup?code=3lb1qrq25es0i](https://portal.qiniu.com/signup?code=3lb1qrq25es0i)
- 上传工具：
	- Mac GUI: [Dropzone 3](https://aptonic.com/) + [适用于 Dropzone 3的七牛上传工具](https://blog.kyleduo.com/2017/02/27/qiniu-upload-for-dropzone/) 
	- CLI: [命令行工具(qshell) - 七牛开发者中心](https://developer.qiniu.com/kodo/tools/1302/qshell)
- 获取配置信息：
    - [快速入门 - 七牛开发者中心](https://developer.qiniu.com/kodo/manual/1233/console-quickstart#step2)
    - [怎么获取或者找到 Access Key 和 Secret Key - 七牛开发者中心](https://developer.qiniu.com/af/kb/1479/how-to-access-or-locate-the-access-key-and-secret-key)
    - [如何进行网站公安备案和查询公安备案信息 - 七牛开发者中心](https://developer.qiniu.com/af/kb/3987/how-to-make-website-and-inquires-the-police-put-on-record-information)
- 七牛图片在线处理
	- cheat sheet: [Hb7niuImageEditOnline · OpenMindClub/Share Wiki](https://github.com/OpenMindClub/Share/wiki/Hb7niuImageEditOnline)
	- 官方文档：[图片处理使用说明 - 七牛开发者中心](https://developer.qiniu.com/dora/manual/3683/img-directions-for-use)
- 批量查找替换多个文档内容的编辑器：[Atom](https://atom.io/)
- 更多小众但实用的 MarkDown 技巧见 [HbMarkdownTrick.md at master · ishanshan/CollaborationGuide4Shaper](https://github.com/ishanshan/CollaborationGuide4Shaper/blob/master/CONTENT/HbMarkdownTrick.md) 。




## CHANGELOG 

- 180816 增加需要备案域名的说明及其它 MarkDown 技巧链接
- 180722 修改行文思路、动图 1.5h
- 180721 累计快写慢改 12h ，发布；根据 @ZoomQuiet 反馈优化， 1h
- 180720 创建

