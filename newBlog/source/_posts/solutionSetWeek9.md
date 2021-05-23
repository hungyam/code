---
title: solutionSetWeek9
catalog: true
date: 2021-05-03
subtitle:
lang: cn
header-img: /code/img/header_img/tag_bg.jpg
tags:
- C
categories:
- 题解
---

# solutionSetWeek9

## [Loops]D. Liang 4.0  Adding for 1 to n

输入n，输出从1到n的数列和

```c
#include <stdio.h>

int main() {
    int n,sum; //n为数列上限，sum储存求和结果
    scanf("%d",&n);		
    sum = 0; //初始化sum为空（很重要，在main函数中定义的变量初始值不为0）
    for (int i = 1; i <= n; i++) {	//循环从1～n
        sum += i;				//sum每次加上i的值
    }
    printf("%d",sum); 
    return 0;
}
```

## [Loops]D. Liang 4..1 Repeating subtractions

修改所提供的加法判断程序，使之判断减法运算

```c
#include <stdio.h>

int main()
{
    int correctCount = 0; // 记录回答正确的次数
    int count = 0; // 记录问题个数
    int number1, number2, answer;
    int temp;
    while (count < 4) {		//搭配26行的count++控制循环做4次工作
        scanf("%d %d", &number1, &number2);
      	//交换，确保number1大于等于number2
        if(number1 < number2){
            temp = number1;
            number1 = number2;
            number2 = temp;
        }
        printf("What is %d - %d? ", number1, number2);
        scanf("%d", &answer);
        if (number1 - number2 == answer) {	//判断两数差是否为输入的答案
            printf("You are correct!\n");
            correctCount++;		//正确次数加1
        } else {
            printf("Your answer is wrong.\n");
            printf("%d - %d should be %d\n", number1, number2, (number1 - number2));
        }
        count++;		//完成一次工作
    }
    printf("Correct count is %d\n", correctCount);
    return 0;
}
```

基本上将原来的代码中的`+`改为`-`即可，注意减法需要为大数减小数，因此在输入两数后需先对两数做判断，确保第一个数为大数。

## [Loops]D. Liang 4.2 Counting positive and negative number and computing the average of numbers

```c
#include <stdio.h>

int main()
{
    int num;
    int positive_count = 0;		//正数个数
    int negative_count = 0;		//负数个数
    int sum = 0;		//和
    while(1){
        scanf("%d",&num);
        if (num == 0) {	//为0则离开循环
            break;
        }
        if (num > 0)		//记录正数个数
            positive_count++;
        if (num < 0)		//记录负数个数
            negative_count++;
        sum += num;		//更新当前和
    }
    printf("%d %d %d ",positive_count,negative_count,sum);
    if (positive_count + negative_count == 0) {	//无输入数字，即输入0
        printf("0.00");		//为了避免分母为0
    } else {
        printf("%.2f",(float)sum/(positive_count+negative_count));
    }
    return 0;
}
```

## **从这里往下4题均为有关输出格式控制的题目，可以稍微看一下这篇文章中关于格式控制的部分内容，[点击跳转](http://c.biancheng.net/view/1793.html)**

## [Loops]D. Liang 4.3 Conversion from kilograms to pounds

```c
#include <stdio.h>

int main()
{
    printf("%-15s %-15s\n","Kilograms" ,"Pounds");
    for (int i = 1; i < 20; i += 2) {	//i为Killograms的值
        printf("%-15d %-15.1f\n",i ,i*2.2);
    }
    return 0;
}
```

- `%s`为字符串

- `%-15.1f`中，`-`为左对齐，`15`为该变量显示的宽度，`.1`表示显示小数点后1位，顺序不可改

## [Loops]D. Liang 4.4 Conversion from miles to kilometers

```c
#include <stdio.h>

int main()
{
    printf("%-15s %-15s\n","Miles" ,"Kilometers");
    for (int i = 1; i < 11; i++) {	//i为Miles的值
        printf("%-15d %-15.3f\n",i ,i*1.609);
    }
    return 0;
}
```

## [Loops]D. Liang 4.5 Conversion from kilograms to pounds

```c
#include <stdio.h>

int main()
{
    printf("%-15s %-15s %-15s %-15s\n","Kilograms","Pounds","Pounds","Kilograms");
  //i为Killograms的值，j为第三行Pounds的值
    for (int i = 1 ,j = 20; i < 20; i += 2 ,j += 5) {
        printf("%-15d %-15.2f %-15d %-15.2f\n",i ,i*2.2 ,j ,j/2.2);
    }
    return 0;
}
```

## [Loops]D. Liang 4.6 Conversion from miles to kilometers

```c
#include <stdio.h>

int main()
{
    printf("%-15s %-15s %-15s %-15s\n","Miles","Kilometers","Kilometers","Miles");
  //i为Miles的值，j为第三行Kilomete的值
    for (int i = 1 ,j = 20; i < 11; i ++ ,j += 5) {
        printf("%-15d %-15.3f %-15d %-15.3f\n",i ,i*1.609 ,j ,j/1.609);
    }
    return 0;
}
```

## [Loops]D. Liang 4.7 Financial application: computing future tuition

- while循环

```c
#include <stdio.h>

int main()
{
    int n;
    float cost = 10000;	//记录每年的学费
    float total = 0;		//存4年的总学费
    scanf("%d",&n);
    while (n--) {		//控制n次循环
        cost *= 1.05;
    }	//得到年后的学费
    n = 4;		//控制循环做4次
    while (n--) {
        total += cost;	//加入总学费
        cost *= 1.05;		//并更新下一年的学费
    }
    printf("%.2f\n",total);
    return 0;
}
```

- for循环

```c
#include <stdio.h>

int main()
{
    int n;
    float cost = 10000;	//记录每年的学费
    float total = 0;		//存4年的总学费
    scanf("%d",&n);
    for (int i = 0; i < n+4; i++) {	//控制n+4次循环
        if (i < n) {			//前n年，负责更新每年学费金额
            cost *= 1.05;
        } else {					//后四年，先加入总学费再更新学费金额
            total += cost;
            cost *= 1.05;
        }
    }
    printf("%.2f\n",total);
    return 0;
}
```



