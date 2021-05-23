---
title: solutionSetWeek8
catalog: true
date: 2021-05-02
subtitle:
lang: cn
header-img: /code/img/header_img/tag_bg.jpg
tags:
- C
categories:
- 题解
---

# 3.1 Validating triangles

## solution

判断输入的三条边能否构成三角形

- 可以用**两边之和大于第三边，且两边之差小于第三边**判断

  但注意作差得取绝对值，函数`abs()`为整数类型的绝对值函数（该函数在stdlib.h函数库中）

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int a,b,c;
    scanf("%d%d%d",&a,&b,&c);
    if (a+b > c && abs(a-b) < c) {
        printf("valid");
    }else{
        printf("invalid");
    }
    return 0;
}
```

- 也可以用**两两均大于第三边**来判断

  ```c
  if (a+b > c && a+c > b && b+c > a)
  ```

# 3.2 Checking whether a number is even

## solution

判断是否为偶数，直接判断除以2的余数是否为0即可

```c
#include <stdio.h>

int main() {
    int num;
    scanf("%d",&num);
    if (num%2 == 0) {
        printf("true");
    }else{
        printf("false");
    }
    return 0;
}
```

> 注意当判断是否为奇数时，一般使用`num%2 != 0`而非`num%2 == 1`，⚠️因为负奇数除以2的余数为`-1`

# 3.3 Using the && and || operator

## solution

`&&`逻辑且 and，`||`逻辑或 or，`!`逻辑非 not

```c
#include <stdio.h>

int main() {
    int num;
    scanf("%d",&num);
    printf("Is 10 divisible by 5 and 6? ");
    if (num % 5 == 0 && num % 6 == 0) {	//num同时被5和6整除
        printf("true\n");
    }else {
        printf("false\n");
    }
    printf("Is 10 divisible by 5 or 6? ");
    if (num % 5 == 0 || num % 6 == 0) {	//num被5或者6整除
        printf("true\n");
    }else {
        printf("false\n");
    }
    printf("Is 10 divisible by 5 or 6, but not both? ");
    if ((num % 5 == 0 || num % 6 == 0) && !(num % 5 == 0 && num % 6 == 0)) {															//num被5和6其中一个整除（也即被5或者6整除且不同时被5和6整除）
        printf("true\n");
    }else {
        printf("false\n");
    }
    return 0;
}
```

判断时逻辑正确即可：

```c
if ((num % 5 == 0 || num % 6 == 0) && !(num % 5 == 0 && num % 6 == 0))
  //也可写成
if ((num % 5 == 0 && num % 6 != 0) || (num % 5 != 0 && num % 6 == 0))	//即num只被5整除 或者 只被6整除
```

# 3.4 Financial application: monetary units

## solution

```c
#include <stdio.h>

int main() {
    int num ;
    scanf("%d",&num);								//输入总钱数
    printf("Your amount %d consists of\n",num);
    if (num/100 != 0) {				 //判断dollar单位量是否为0，不为0则打印
        printf("%d dollar",num/100);	
        if (num/100 == 1) {		//判断是否为1，为1则不加复数后缀
            printf("\n");
        }else{
            printf("s\n");
        }
        num %= 100;				//等价于 num = num%100 ，更新剩余钱数
    }
  	//同上
    if (num/25 != 0) {
        printf("%d quarter",num/25);
        if (num/25 == 1) {
            printf("\n");
        }else{
            printf("s\n");
        }
        num %= 25;
    }
    if (num/10 != 0) {
        printf("%d dime",num/10);
        if (num/10 == 1) {
            printf("\n");
        }else{
            printf("s\n");
        }
        num %= 10;
    }
    if (num/5 != 0) {
        printf("%d nickel",num/5);
        if (num/5 == 1) {
            printf("\n");
        }else{
            printf("s\n");
        }
        num %= 5;
    }
    if (num != 0) {
        printf("%d penn",num);
        if (num == 1) {
            printf("y\n");
        }else{
            printf("ies\n");
        }
    }
    return 0;
}
```

当然如果觉得字符串拼接看得难受，也可以用`else if`来控制单复数名词打印：

```c
if (num/100 == 1) {				 //判断dollar单位量是否为1
    printf("%d dollar\n",num/100);	
    num %= 100;				
}else if (num/100 != 0) {	//判断当dollar不为1时，是否不为0
    printf("%d dollars\n",num/100);	
    num %= 100;				
}
```

值得注意的是`else if`的用法，能进行该`else if`判断的前提一定是上面的判断都失败（上面的条件均为假），因此这题`else if`里的内容要执行需满足前提`num/100 != 1`且`num/100 != 0`，也即复数。

# 3.5 Sorting three integers

## solution

三个数排序

```c
#include <stdio.h>

int main() {
    int a,b,c;
    scanf("%d%d%d",&a,&b,&c);
    if (a > b) {			//判断前两个数，将更大的放第二个
        int temp = a;		//交换
        a = b;
        b = temp;
    }
    if (b > c) {			//判断后两个数，将更大的放第三个
        int temp = b;
        b = c;
        c = temp;
    }
  	//此时第三个数一定是最大的
    if (a > b) {			//再把前两个数调好顺序
        int temp = a;
        a = b;
        b = temp;
    }
    printf("%d %d %d",a,b,c);
    return 0;
}
```

# 3.6 Computing the perimeter of a triangle

## solution

```c
#include <stdio.h>

int main() {
    int a,b,c;
    scanf("%d%d%d",&a,&b,&c);
    if (a+b > c && abs(a-b) < c) {
        printf("%d",a+b+c);
    }else{
        printf("invalid");
    }
    return 0;
}
```

# 3.8 Finding the number of days in a month

## solution

输入年份及月份，输出该月对应的天数

```c
#include <stdio.h>

int main() {
    int year ,month ,days = 0;	//days储存对应的天数
    scanf("%d%d",&year,&month);
    switch (month) {				//按月份打印月份对应的单词，同时更新days的值
        case 1:
            printf("January ");
            days = 31;
            break;
        case 2:
            printf("February ");
        		/*闰年的判断*/
            if (year % 400 == 0) {
                days = 29;
            }else if (year % 100 == 0) { //不被400整除且...
                days = 28;
            }else if (year % 4 == 0){  //同时不被400和100整除且...
                days = 29;
            }else{
                days = 28;
            }
            break;
        case 3:
            printf("March ");
            days = 31;
            break;
        case 4:
            printf("April ");
            days = 30;
            break;
        case 5:
            printf("May ");
            days = 31;
            break;
        case 6:
            printf("June ");
            days = 30;
            break;
        case 7:
            printf("July ");
            days = 31;
            break;
        case 8:
            printf("August ");
            days = 31;
            break;
        case 9:
            printf("September ");
            days = 30;
            break;
        case 10:
            printf("October ");
            days = 31;
            break;
        case 11:
            printf("November ");
            days = 30;
            break;
        case 12:
            printf("December ");
            days = 31;
            break;
        default:
            break;
    }
    printf("%d has %d days\n",year,days);
    return 0;
}
```

当然，之后学习了数组用法后有更简便的做法，利用数组存进预设的值。

下面代码作为参考，有兴趣可先去了解数组用法。

```c
#include <stdio.h>

int main() {
    int year ,month;
  	//将月份名称存进字符串数组，month_name[i-1]对应i月的名称。
    char month_name[12][15] = {"January","February","March","April","May","June","July","August","September","October","November","December"};
  	//将天数存进数组，days[i-1]对应i月的天数
    int days[12]={31,28,31,30,31,30,31,31,30,31,30,31};
    scanf("%d%d",&year,&month);
    /*闰年的判断，闰年则2月份天数+1*/
    if (year % 400 == 0) {
        days[1]++;
    }else if (year % 100 == 0) { //不被400整除且...
    }else if (year % 4 == 0){  //同时不被400和100整除且...
        days[1]++;
    }
    printf("%s %d has %d days\n",month_name[month-1] ,year ,days[month-1]);
    return 0;
}
```

