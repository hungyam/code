---
title: solutionSetWeek11
catalog: true
date: 2021-05-04
subtitle:
lang: cn
header-img: /code/img/header_img/tag_bg.jpg
tags:
- C
categories:
- 题解
---

# solutionSetWeek11

### 简单描述

这周的题目为函数定义，首先须先了解函数的概念以及函数是如何定义的

**参考资料**：[什么是函数](http://c.biancheng.net/view/1850.html)、[函数的定义]()

简单来说函数的定义为：

```c
返回类型 函数名(参数类型1 参数名1,参数类型2 参数名2, ......){
  
  //函数内容
  
  return 返回的值;/*(类型要与开头的返回类型一致)*/
}
```

函数封装了某些特定的功能，当你传入不同的参数，它能够进行约定的计算，并返回计算结果。

- 像是之前学到的`math.h`中的`pow()`

    它的定义为`double pow(double x, double y)`，它就是一个 `有两个浮点参数` 且`返回值为浮点数 `的函数

    下图是他在文档中的详细解释：

    ![](1.png)

- 定义了函数是需要由main函数来调用的，函数库不能独立运行，matrix提交系统隐藏了`main.c`，即不需要我们实现main函数，我们只需要在`.h`函数库文件或`.c`函数定义文件 中实现某一特定函数的定义与功能的封装即可

接下来是题解:

### **5.1 Converting an uppercase letter to lowercase**

Solution:

```c
char upperCaseToLowerCase(char ch){
    return ch+32;
}
```

> ASCII知识点

Testing:

![](2.png)

### **5.2 Summing the digits in an integer**

Solution:

```c
int sumDigits(long n){
    int sum = 0;
    while(n){					//n不为0时循环执行
        sum += n % 10;	//加上余数
        n /= 10;				//剔除余数
    }
    return sum;			//返回总和
}
```

> 整数分割，利用`%10`、`\10` 

Testing:

![截屏2021-05-11 下午6.03.35](3.png)

### **5.9 Conversions between feet and meters**

Solution:

```c
#include "source.h"

double footToMeter(double n){
    return n*0.305;
}

double meterToFoot(double n){
    return n/0.305;
}
```

Testing:

![截屏2021-05-11 下午6.10.41](4.png)

### **5.10 Computing GCD**

Solution:

```c
#include <stdio.h>
//辗转相除法
int myGCD(int a,int b){
    int temp;
    while(b){
        temp = a%b;
        a = b;
        b = temp;
    }
    return a;
}

int main() {
    int a,b;
    scanf("%d%d",&a,&b);
    printf("%d\n",myGCD(a, b));
    return 0;
}
```

Testing:

![截屏2021-05-11 下午6.17.02](5.png)

### **5.12 Displaying characters**

Solution:

```c
#include <stdio.h>

void myPrint(char a, char b, int n){
    for (int count = 0; a <= b; a++) {
        printf("%c",a);
        count++;
        if (count%n == 0)
            printf("\n");
    }
}

int main() {
    char a,b;
    int i;
    scanf("%c %c%d",&a,&b,&i);
      if(a < b)
          myPrint(a, b, i);
      else
          myPrint(b, a, i);
    return 0;
}
```

Testing:

![截屏2021-05-11 下午6.25.42](6.png)

### **5.13 Summing series**

Solution:

```c
#include <stdio.h>

double myFrac(int a, int b){
    return (double)a/b;
}

int main() {
    int n;
    double sum = 0;
    scanf("%d",&n);
    for (int i = 1; i <= n; i++) {
        sum += myFrac(i, i+1);
    }
    printf("%.4lf\n",sum);
    return 0;
}
```

Testing:

![截屏2021-05-11 下午6.33.35](7.png)

### **5.14 Computing series**

Solution:

```c
#include <stdio.h>
#include <math.h>

double myFrac(int a, int b){
    return (double)a/(2*b+1);
}

int main() {
    int n;
    double sum = 0;
    scanf("%d",&n);
    for (int i = 0; i <= n; i++) {
        sum += pow(-1,i)*myFrac(1, i);
    }
    printf("%.5lf\n",4*sum);
    return 0;
}
```

Testing:

![截屏2021-05-11 下午6.46.59](8.png)