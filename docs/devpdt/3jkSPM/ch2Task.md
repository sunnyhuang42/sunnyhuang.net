---
title: Chap2 作业
date: 2018-04-15
updated: 
description: 
---





> Task：调研豆瓣读书的书籍详情页中，「喜欢这本书的人也喜欢」这个推荐模块的效果。

目录：

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [明确需求理想态](#%E6%98%8E%E7%A1%AE%E9%9C%80%E6%B1%82%E7%90%86%E6%83%B3%E6%80%81)
  - [该推荐模块理想态](#%E8%AF%A5%E6%8E%A8%E8%8D%90%E6%A8%A1%E5%9D%97%E7%90%86%E6%83%B3%E6%80%81)
  - [用户需求分析及推荐策略猜想](#%E7%94%A8%E6%88%B7%E9%9C%80%E6%B1%82%E5%88%86%E6%9E%90%E5%8F%8A%E6%8E%A8%E8%8D%90%E7%AD%96%E7%95%A5%E7%8C%9C%E6%83%B3)
- [抽样分析](#%E6%8A%BD%E6%A0%B7%E5%88%86%E6%9E%90)
  - [样本选取](#%E6%A0%B7%E6%9C%AC%E9%80%89%E5%8F%96)
  - [抽样情况概览](#%E6%8A%BD%E6%A0%B7%E6%83%85%E5%86%B5%E6%A6%82%E8%A7%88)
    - [从表中可以看出的](#%E4%BB%8E%E8%A1%A8%E4%B8%AD%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%87%BA%E7%9A%84)
    - [抽样过程中观察到的](#%E6%8A%BD%E6%A0%B7%E8%BF%87%E7%A8%8B%E4%B8%AD%E8%A7%82%E5%AF%9F%E5%88%B0%E7%9A%84)
  - [问题汇总&需求提炼](#%E9%97%AE%E9%A2%98%E6%B1%87%E6%80%BB%E9%9C%80%E6%B1%82%E6%8F%90%E7%82%BC)
- [行动计划](#%E8%A1%8C%E5%8A%A8%E8%AE%A1%E5%88%92)
- [自评](#%E8%87%AA%E8%AF%84)
- [CHANGELOG](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

注：下述表格内容需在科学上网模式下才可正常查看。

## 明确需求理想态

### 该推荐模块理想态

从公司整体业务链条来分析，该推荐模块理想态为：

1. 用户通过该推荐模块能发现更多自己喜欢的书——进入图书详情页，并点击**想读**、**加入购书单**或**加入豆列**，最好**点击购买链接**。
2. 且如果豆瓣有该书电子版，优先引导到豆瓣电子版（豆瓣阅读）购买页。 # 创业这么多年，用户再多，能带来现金流才是王道啊。

### 用户需求分析及推荐策略猜想

用户想发现更多自己喜欢的书，通常有以下场景：

- **想主题阅读**：比如要解决某个问题，或有某些阅读偏好或习惯。这类诉求可通过同关键词推荐、同豆列推荐、同类用户（标记了想读此书，或给此书四星及以上评价）关联行为推荐、同类作者推荐、豆瓣评分等，计算出「喜欢度」指标 Top10 。
- **想系统了解某位作者的思想**，跟「人」读书：比如想读透芒格、司马贺等。这类诉求可通过作者名字直接定位其相关著作，故同作者推荐在推荐策略中权重较低即可；但若要深入了解某人思想，肯定少不了了解他人对该思想的评价，故依然需要上述主题阅读的推荐策略。

综合同关键词推荐、同豆列推荐、同类用户（标记了想读此书，或给此书四星及以上评价）关联行为推荐、同类作者推荐、豆瓣评分、同作者著作维度等，计算出「喜欢度」指标 Top10 后，又考虑到上述理想状态 2 的要求，再匹配豆瓣已有电子书目，将有电子版的图书排序适当提前。

## 抽样分析

### 样本选取

- **取样数量**：5 本（严谨取样应抽查至少 30 个样本才能代表整体情况，时间有限，所以只选了 5 个样本来示意思路）
- **取样来源**：本次调研目的是发现问题，为提升效率，特地从个人熟悉领域选了几本熟悉的，且有关联而推荐结果不太理想的 5 本图书来验证上述猜想：
	- 文献读写：
		- [会读才会写 (豆瓣)](https://book.douban.com/subject/26655043/)
		- [研究生完全求生手冊 (豆瓣)](https://book.douban.com/subject/27108502/)
	- 积极心理学：
		- [心流 (豆瓣)](https://book.douban.com/subject/27186106/)
		- [三生有幸 (豆瓣)](https://book.douban.com/subject/27663156/)
	- 育儿/脑科学：
		- [给孩子的未来脑计划 (豆瓣)](https://book.douban.com/subject/30185326/)



### 抽样情况概览

抽样统计数据见[豆瓣图书推荐模块分析 - Google 表格](https://docs.google.com/spreadsheets/d/1fBABw3ix5p6qpB0-785Oij4DkBrAMARh2IImsZ4jjZU/edit#gid=1078617860)：


<iframe width='750' height='500' frameborder='1' scrolling='no' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQT8YEZZgqbPAtc4EFpHqm_nqwq5QcQAB-AFoQ5wJbRGDHNsJXyvbPzHpC-f7yOgi2nI0vFCZeMvD5x/pubhtml?widget=true&amp;headers=false"></iframe>


发现主要有以下问题：

#### 从表中可以看出的

phenomenon 1:

- 现象：不少没有评分的图书，也会出现在推荐列表中，比如 case1《会读才会写》 case2《研究生完全求生手册》的推荐
- 分析及建议
    - 看来在推荐规则中图书评分权重不高，或没有评分也能纳入推荐。
    - 也好，要不容易有马太效应——有些小众好书读的人少，如果一直没有评分无法被推荐，那读的人更少更难被推荐了。

phenomenon 2:

- 现象：推荐图书最低分是 7.2
- 分析及建议
	- 7.2 在豆瓣图书评分中算是不太好的图书了吧，出现在推荐列表中，说明推荐规则里可能没有过滤评分较低的书籍。
	- 为了给用户推荐更优质的图书，建议在推荐规则中加入图书评分限制：比如豆瓣图书评分在标准四区间往左的，不纳入推荐列表。

phenomenon 3:

- 现象：会出现一些无推荐导向的标签，比如 值得一读、一定很精彩 等。
- 分析及建议
    - 推荐规则里没有设置过滤机制过滤用户自建的标签。
    - 无明确导向的标签会干扰推荐结果匹配度，建议在推荐规则里人工去除这类标签。

phenomenon 4:

- 现象：case4《三生有幸》 case5《给孩子的未来脑计划》 ，这俩图书的推荐图书，其实以其主题或关键词，还有很多更适合的图书。现在推荐的这些，则和不少特定群体在豆瓣上的行为有关——这两本书都刚上市不到半年，推荐图书大部分是开智社群成员在读的图书，和关键词没多大关系。而当当、亚马逊等购物平台推荐，对《三生有幸》的推荐更集中在积极心理学，对《给孩子的未来脑计划》的推荐集中在育儿类图书，这更契合大众口味。
- 分析及建议
    - 同类用户关联行为推荐权重过大，甚至大过了关键词推荐。
    - 建议设定同类用户关联行为推荐权重上限，以便给更多用户带来更好的体验。毕竟特定社群人数有限，而大众和社群的口味不一定相同。


#### 抽样过程中观察到的

phenomenon 5:

- 现象：
  - 豆瓣图书推荐模块有 2 个：「喜欢读"XXX"的人也喜欢的电子书 」、「喜欢读"XXX"的人也喜欢」，且前者排在后者上方
  - 有合适的书且豆瓣有电子书，会优先出现在 「喜欢这本书的人也喜欢的电子书」 推荐模块。有时候电子书没有收录合适的图书，则会推荐一些无关的，当然也有时候则没推荐。
- 分析及建议
	- 前文推测的 理想态 2 合理。
	- 但这样容易给用户造成困扰影响用户体验，建议将电子书和实体书推荐模块合并，增加有电子书的图书的权重，并在呈现时特殊标注，吸引用户注意。

phenomenon 6:

- 现象：中文书下很少推荐同一主题的英文书。比如《会读才会写》和《研究生完全求生手册》，关联豆列（[社会科学研究方法](https://www.douban.com/doulist/36467715/)、[学术方法与工具](https://www.douban.com/doulist/36538645/)）里头推荐了很多相关的人会感兴趣的书，可能由于这些是英文书，都没出现在推荐列表里。
- 分析及建议
	- 豆瓣可能觉得英文图书在国内受众不多，且豆瓣收录的英文书不多、很多都没有评分、标签，所以这些书被索引到的概率较低。
	- 但这容易引发恶性循环：那些喜欢读英文书的朋友发现这里很少推荐英文书，便不太愿意来这里查书、找书，使得这些书被收录、有标签、有评分、有评论的概率更低。
	- 所以，如果豆瓣想让站内英文书籍也更丰富，最好做些干预，比如自动抓取或 UGC 奖励增补更多英文图书标签。

phenomenon 7:

- 现象：登录模式和浏览器隐身模式下图书推荐结果一模一样。
- 分析及建议
	- 推荐策略和用户特征无关。
	- 如果希望能达到理想态 1 中的描述，那最好能在推荐规则中加入用户特征标签。比如发现某用户经常查/标记英文书，在推荐时可以增加英文书的推荐比例。

注：常规来说还应评估现行策略整体效果，但因本次抽样样本较小，且有意抽了一些有能看到问题的案例，样本统计结果难以代表全体情况，所以此项省略。


### 问题汇总&需求提炼

（若无法正常访问，可查看 https://workflowy.com/s/CO_N.7cB1AtAZ6P ）

<iframe  width='750' height='650' frameborder='1' scrolling='no' src="https://workflowy.com/embed/CO_N.7cB1AtAZ6P"></iframe>


## 行动计划

见 [行动计划 - 豆瓣图书推荐模块分析 - Google 表格](https://docs.google.com/spreadsheets/d/1fBABw3ix5p6qpB0-785Oij4DkBrAMARh2IImsZ4jjZU/edit#gid=642992839)：

<iframe width='750' height='500' frameborder='1' scrolling='no' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQT8YEZZgqbPAtc4EFpHqm_nqwq5QcQAB-AFoQ5wJbRGDHNsJXyvbPzHpC-f7yOgi2nI0vFCZeMvD5x/pubhtml?gid=642992839&amp;single=true&amp;widget=true&amp;headers=false"></iframe>



## 自评

这回作业花了不少时间，中间还不时翻翻大伙儿怎么想的，加起来差不多 15 小时吧……

优点：

- 不只考虑「实体书推荐模块」，发觉分为「电子书」推荐和「实体书」推荐，让用户很费解，便从豆瓣整个图书推荐的角度来提行动计划
- 理想态指标定得还算合理
- 能合理借助工具（[Zotero | Your personal research assistant](https://www.zotero.org/)）减轻自己采集数据的体力活，当然如果会写脚本就更省心了

改进：

- 完成作业的速度有较大提升空间，先拿出 MVP 再迭代嘛
- 还不太明白如何评估问题影响面和预期可解决比例，目前作业里的判断大部分是主观臆测……如果能有时间做更多抽样、且能拿到后台的数据，对行动优先级的分析会更有底气置信度也高一些
- 如果来得及给出一些改版示意图，能让他人更易理解


## CHANGELOG  

- 180422 闪闪陆续增补修订，完成初稿
- 180415 闪闪创建


