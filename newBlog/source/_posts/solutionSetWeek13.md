---
title: solutionSetWeek13
catalog: true
date: 2021-05-22
sticky: 999
subtitle:
lang: cn
header-img: /img/header_img/tag_bg.jpg
tags:
- C
categories:
- 题解
---

# solutionSetWeek13

## 6.1 Analyzing input

### Mission requirements

输入一串指定个数的数列，判断该数列中超过平均数的有几个

**思路：先计算总和，再通过一次的循环去搜索超过平均数的个数**

### Code

```c
#include <stdio.h>

int main(){
    int t;		//测例次数
    int n;		//数列个数
    float num[1000] = {0};	//储存数列
    float sum;			//储存数列和
    int count;			//记录结果个数
    scanf("%d",&t);
    while (t--) {						//控制测例次数
        scanf("%d",&n);
        sum = 0;		//清0，很重要，因为有多个测例，不清空会影响下一个测例的结果
        count = 0;
        for (int i = 0; i < n; i++) {
            scanf("%f",num+i);	//num+i 与 &num[i] 等价
            sum += num[i];		//求和
        }
        for (int i = 0; i < n; i++) { //循环记录超过平均数的有几个
            if (num[i] > sum/n) {		
                count++;
            }
        }
        printf("%d\n",count);	
    }
    return 0;
}
```

### Demo

![截屏2021-05-22 上午2.32.14](1.png)

## 6.2 Alternative solution to Listing 6.1

### Mission requirements

输入一串指定个数的数列，输出最大值以及其出现的次数

**思路：题目已给定，在循环中维护两个变量max、count**

### Code

```c
#include <stdio.h>

int main(){
    int t;		//测例次数
    int n;		//数列个数
    int num[100];		//储存数列
    int max;				//记录最大值
    int count;			//记录最大值个数
    scanf("%d",&t);
    while (t--) {		//测例循环
        scanf("%d",&n);
        for (int i = 0; i < n; i++) {		//数列存入数组
            scanf("%d",num+i);
        }
        max = num[0];		//初始化最大值
        count = 1;
        for (int i = 1; i < n; i++) {
            if (num[i] > max) {		//若有更大的数，则更新最大值，并重置个数
                max = num[i];
                count = 1;
            } else if (num[i] == max){		//若有等于最大的数，个数加1
                count++;
            }
        }
        printf("%d %d\n",max,count);
    }
    return 0;
}
```

### Demo

![截屏2021-05-22 上午2.27.06](2.png)

## 6.3 Reversing the numbers entered

### Mission requirements

输入一串指定个数的数列，反序输出

### Code

```c
#include <stdio.h>

int main(){
    int t;		//测例次数
    int n;		//数列个数
    int num[1000] = {0};
    scanf("%d",&t);
    while (t--) {		//测例循环
        scanf("%d",&n);
        for (int i = 0; i < n; i++) {	//顺序输入
            scanf("%d",num+i);
        }
        for (int i = n-1; i > 0; i--) {	//反序输出
            printf("%d ",num[i]);
        }
        printf("%d\n",num[0]);	//0号位另外输出，因为最后一个后为换行，不为空格。
    }
    return 0;
}
```

### Demo

![截屏2021-05-22 上午2.28.32](3.png)

## 6.4 Analyzing scores

### Mission requirements

输入一串指定个数的数列，分别输出大于等于平均数和小于平均数的个数

### Code

```c
#include <stdio.h>

int main(){
    int t;	//测例次数
    float num[1000] = {0};
    float sum;		//存和
    int count;		//大于等于平均数的个数
    int i;			//数列个数
    scanf("%d",&t);
    while (t--) {		//测例循环
        sum = 0;			//清0，很重要，为了不影响下一次测例
        count = 0;
        i = 0;
        while (1) {		//输入数组
            scanf("%f",num+i);
            if (num[i] < 0) {		//判断输入是否结束
                break;
            }
            sum += num[i];	//求和
            i++;	//个数加1
        }
        for (int j = 0; j < i; j++) {		//搜索大于平均数的个数
            if (num[j] >= sum/i) {
                count++;
            }
        }
        printf("%d %d\n",count, i-count);
    }
    return 0;
}
```

### Demo

![截屏2021-05-22 上午2.29.02](4.png)

## 6.5 Printing distinct numbers

### Mission requirements

输入一串指定个数的数列，按顺序输出，出现过的不再重复输出

**思路：输入数组时伴随判断，若该数字出现过，则不放进数组，直至所有数判断完，最终直接打印数组即可**

### Code

```c
#include <stdio.h>

int main(){
    int t;	//测例个数
    int n;	//数列个数
    int i;	//数组下标
    int count;	//输入个数
    int num[1000] = {0};
    scanf("%d",&t);
    while (t--) {
        scanf("%d",&n);
        for (i = 0, count = 0; count < n; i++, count++) {	//只将未重复的放进数组
            scanf("%d",num+i);
            for (int j = 0; j < i; j++) {	//搜索数组中是否已存在该数
              	//若存在，则使下一次的数组下标不变，i--与for中的i++抵消，同时停止搜索
                if (num[i] == num[j]) {		
                    i--;
                    break;
                }
            }
        }
      	//此时的i即为存进数组的元素个数
        for (int j = 0; j < i-1; j++) {		//打印数组
            printf("%d ",num[j]);
        }
        printf("%d\n",num[i-1]);		//最后一个独立打印，控制换行
    }
    return 0;
}
```

### Demo

![截屏2021-05-22 上午2.29.31](5.png)

## 6.6 Revising Listing 4.11

### Mission requirements

输出前一定数量的质数数列

**思路：题目给的思路为，用该数是否能整除比它平方根小的质数来判断它是否为质数**

**为什么只需要判断到平方根？这里涉及到数学论证**

### Code

```c
#include <stdio.h>

int main() {
    int n;		//质数个数
    int num[10000] = {2};	//存质数，把首位初始化为2（第一个质数）
    int flag;		//标记该数是否为质数
    int count;	//记录当前质数个数
    int i;			//循环数字
    scanf("%d",&n);
    for (i = 3, count = 1; count < n; i++) {
        flag = 1;
        for (int j = 0; j < count && num[j]*num[j] <= i; j++) {	
          //判断该数是否被比他小的质数所整除且只需要搜索到sqrt(i)
          //若被整除，则该数不为质数，标记置为0，同时结束判断
            if (i%num[j] == 0) {
                flag = 0;	
                break;
            }
        }
        if (flag) {		//为质数则存进数组
            num[count] = i;
            count++;
        }
    }
    for (i = 0; i < count-1; i++) {		//打印储存的质数
        printf("%d ",num[i]);
    }
    printf("%d\n",num[count-1]);
    return 0;
}
```

### Demo

输入：10000

![截屏2021-05-22 上午2.30.09](6.png)

## 6.7 Counting single digits

### Mission requirements

输入一串数列，输出所有出现过的数字以及其出现次数

**思路：很经典的记录题，使用桶的思想，即用数组作容器**

**数组下标代表该数，值代表该数出现的次数**

### Code

```c
#include <stdio.h>
#include <string.h>

int main(){
    int t;		//测例个数
    int n;		//数列个数
    int num;		//输入的数
    int basket[10];		//开10个桶
    scanf("%d",&t);
    while (t--) {
        memset(basket, 0, sizeof(int)*10);	//清空数组，10个元素全置为0
        scanf("%d",&n);
        while (n--) {
            scanf("%d",&num);		
            basket[num]++;	//将所输入数字对应的桶的值加1，表示出现次数加1
        }
        for (int i = 0; i < 10; i++) {
            if (basket[i]) {		//若痛不为0
                printf("%d %d\n",i, basket[i]);	//打印该数字，以及出现次数
            }
        }
    }
    return 0;
}
```

### Demo

![截屏2021-05-22 上午2.31.03](7.png)