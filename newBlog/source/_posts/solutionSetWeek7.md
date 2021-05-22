---
title: solutionSetWeek7
catalog: true
date: 2021-05-01
subtitle:
lang: cn
header-img: /img/header_img/tag_bg.jpg
tags:
- C
categories:
- 题解
---

# 2.7 Converting an uppercase letter to lowercase

## brief description

输入的一个小写字母，输出对应的大写字母

## solution

主要考对ascii码的认识，大写字母的ascii分别为`A～Z`对应`65～90`，小写`a～z`对应`97～122`，大写字母的值比小写小32，因此将输入-32输出即可。

```C
#include <stdio.h>
int main(){
    char a;
    scanf("%c",&a);
    printf("%c",a-32);
    return 0;
}
```

# 2.8 Finding the character of an ASCII code

## brief description

输入一个整数，输出对应的字母

## solution

```c
#include <stdio.h>
int main() {
    int a;
    scanf("%d",&a);
    printf("%c",a);
    return 0;
}
```

# 2.9 Financial application: monetary units

## brief description

单位换算

## solution

将输入除以目标单位量，并将余数做下一次的操作

```c
#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    printf("Your amount %d consists of\n%d dollars\n%d quarters\n%d dimes\n%d nickels\n%d pennies\n",n,n/100,(n%100)/25,(n%100)%25/10,(n%100)%25%10/5,(n%100)%25%10%5);
    return 0;
}
```

# 2.10 Finacial application: calculating interests

## brief description

表达式计算

## solution

注意有除法，分子须为浮点数，还有输出的格式就行

```c
#include <stdio.h>
int main(){
    float a,b;
    scanf("%f%f",&a,&b);
    printf("%.1f",a*b/1200);
    return 0;
}
```

# 2.11 Finacial application: calculating the future investment value

## brief description

表达式计算，分别输入本金、年利率、年数，输出本金加利息

## solution

底数`1+b/1200`是因为`b`为百分比数字需先除以100，又因为它为年利率需再除以12

```c
#include <stdio.h>
#include <math.h>
int main(){
    double a,b,c,sum;
    scanf("%lf%lf%lf",&a,&b,&c);
    sum = a*pow(1+b/1200,c*12);
    printf("%.2f",sum);
    return 0;
}
```

>幂运算pow(power)函数原型为`double pow(double a, double b)`
>
>第一个参数为底数，第二个参数为指数
>
>两参数和返回结果都为double类型

# 2.12 Financial application: compound value

## brief description

表达式计算，分别输入本金、年利率输出本金加利息，这题每一个月都会存进一笔钱，因此须对每个月的本金进行更新。

计算6个月后的总值

## solution

```c
#include <stdio.h>
#include <math.h>
int main(){
    double a,b,mon_rat,sum;
    scanf("%lf%lf",&a,&b);
    mon_rat = b/1200;		//月利率
    sum = 0;	//第0个月总收入为0
    for (int i = 0; i < 6; i++) {		//控制6次循环
        sum = (a+sum)*(1+mon_rat);
    }
    printf("%.2f",sum);
    return 0;
}
```

执行过程：

1. i = 0  =>  sum = (100+0)*(1+0.004167) = 100.417 

2. i = 1  =>  sum = (100+100.417)*(1+0.004167) = 第二个月结束的值

   ......

6. i = 5  =>  sum = 第六个月结束的值

   退出循环

---


by : hungyam
date : 4.7