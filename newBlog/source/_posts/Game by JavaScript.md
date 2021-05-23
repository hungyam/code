---
title: JS游戏
catalog: true
date: 2020-10-27
subtitle: 
lang: cn
header-img: /code/img/header_img/lml_bg.jpg
tags:
- Javascript
categories:
- 网页开发
---

## 题目一：迷宫

制作网页实现下图中的迷宫：

![img](maze.png)

### 需求规格

1. UI：UI与上图完全一致；或者，自由发挥，设计出更加漂亮、合理的UI。

2. 正常赢：移动鼠标，从S开始，到E结束，中间不碰墙，赢得游戏，显示“You Win”

3. 碰墙输：从S开始后，到E结束之前，碰墙，墙变红，输，显示“You Lose”

4. 重置结果：离开迷宫，墙恢复正常；从S开始时，隐藏结果显示

5. 发现作弊：如果用户未经过S，就指到E，又或者指向S之后，从迷宫外绕路指向E，显示"Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!"

   ## [迷宫实现网页](http://hungyam.gitee.io/code/p/two-game-by-javascript/index1.html)

## 题目二：打地鼠

制作网页实现下图中的简版的打地鼠：

![img](mole.png)

### 需求规格

1. UI：UI与上图完全一致；或者，自由发挥，设计出更加漂亮、合理的UI。

2. 打地鼠：能够随机出现地鼠，鼠标能够击中（点击正确，地鼠消失，出现新地鼠；点击错误，地鼠不消失）

3. 正确计分：正确计算分数并显示，包括正确结束游戏

   ## [打地鼠实现网页](http://hungyam.gitee.io/code/p/two-game-by-javascript/index2.html)

