---
author: Hungyam
title: GCC
date: 2021-01-23
description: 
math: true
image : 2.jpg
categories:
---

# MacOS/Win x64 C语言编译器的搭建

## Windows x64

MinGW最大的特点就是编译出来的可执行文件能够独立在Windows上运行。

MinGW的组成：

- 编译器(支持C、C++、ADA和Fortran)
- GNU工具

### 1. MinGW安装

MinGW官方网址：[http://www.mingw.org/](http://www.mingw.org/)

由于是墙外网站，经常会出现网站打不开，下载不了的情况，就不详细描述mingw的下载方法。

这里为读者准备了完整的内容包 [点此下载](https://gitee.com/hungyam/code/tree/master/html/public/p/gcc/mingw64_GCC8.1.7z)

下载完毕将压缩包内容解压到C盘下（个人习惯，放其他位置也可，但需记住所放位置）

### 2. 添加环境变量

  ![](1.png)

- 解压后出现**mingw64文件夹**

  ![](2.png)

- 在**此电脑**上右键选择**属性**

  ![](3.png)

- 左侧选择**高级系统设置**

  ![](4.png)

- 高级页下选择**环境变量**

  ![](5.png)

- 在**系统变量**栏中双击**Path**变量

  ![](6.png)

- 点击右侧**浏览**

  ![](7.png)

- 找到第一步解压的**mingw64下的bin**文件夹

  

  到这里，环境变量已设置完毕

### 3. 测试是否搭建成功

  ![](8.png)

- 在资源管理器的地址栏中输入**cmd，并按回车**，打开命令行

  ![](9.png)

- 在命令行下键入 **gcc -v**，若出现版本号，则为搭建成功

## MacOS

### 安装及搭建

1. 可直接在App Store中下载Xcode，完成安装即可

（若不想安装整套Xcode开发工具，也可直接在命令行下安装**Xcode Command Line Tools**）

  ![](10.png)

- 应用中选择**终端机**

  ![](11.png)

- ```C
  //输入安装命令
  xcode-select --install
  ```

  

  ![](12.png)

- ```C
  //查询版本号
  xcode-select --version
  ```

## 编译运行自己的第一个程序

### 这里以VScode为例（适用于MacOS/Win x64）

  ![](13.png)

- 选择Open folder打开任意一个文件夹（存代码）

  ![](15.png)

- 创建一个新文件 文件以  .c  为后缀即可

  ![](16.png)

- 这里随便写一段打印功能的代码，写完后**Ctrl+S（win）/Command+S（mac）**保存

  ![](17.png)

- 打开一个新终端

  ![](18.png)

- 键入**gcc 1.c(你的文件名)**，执行编译

- 编译完成后运行程序

  - ./a.exe（win 下编译后默认的文件名）

  - ./a.out（mac 下编译后默认的文件名）

  可见到终端输出 程序中的打印内容

### MacOS上非常推荐Xcode作主力IDE

  ![](19.png)

- 选择 **Create a new Xcode project**

  ![](20.png)

- macOS页下的 **Command Line Tool**

  ![](21.png)

- 随便输入一个工程名字，选择C语言

  ![](22.png)

- 选择main.c文件即可进行编辑，创建时会有默认代码

  ![](23.png)

- 输入**Command+R**进行编译运行

  ------

  