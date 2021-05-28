---
title: solutionSetWeek14
catalog: true
date: 2021-05-29
subtitle:
lang: cn
sticky: 999
header-img: /code/img/header_img/404_bg.jpg
tags:
- C
categories:
- 题解
---

# solutionSetWeek14

## 6.8 Averaging an array

### Description

Write two overloaded functions to return the average of an array with the following function header:

```c
int average_int(int array[], int size)
double average_double(double array[], int size)
```

### Hint

You should submit the implementation of the function but do not submit the main() function. 

### solution

#### **1088.c (Need to complete)**

对传入的数组进行求平均值，完成两个函数的实现

```c
#include "1088.h"
int average_int(int array[], int size){
    int sum = 0;
    for (int i = 0; i < size; i++) {//求和
        sum += array[i];
    }
    return sum/size;
}

double average_double(double array[], int size){
    double sum = 0;
    for (int i = 0; i < size; i++) {//求和
        sum += array[i];
    }
    return sum/size;
}
```

#### 1088.h (Given)

```c
int average_int(int array[], int size);

double average_double(double array[], int size);
```

#### main.c (Given)

```c
#include <stdio.h>
#include "1088.h"

int list1[105];
double list2[105];

int main()
{
	int n;

	scanf("%d", &n);
	for (int i = 0; i < n; ++i)
		scanf("%d", &list1[i]);
	printf("%d\n", average_int(list1, n));

	scanf("%d", &n);
	for (int i = 0; i < n; ++i)
		scanf("%lf", &list2[i]);
	printf("%lf\n", average_double(list2, n));

    return 0;
}
```

#### Demo

![](1.png)

## 6.9 Finding the smallest element

### Description

Write a function to return the smallest element in an array of integers with the following function header:

`int smallestElement(int array[], int size)`

### Hint

You should submit the implementation of the function but do not submit the main() function. 

### solution

#### 1089.c (Need to complete)

对传入的数组求最小值

```c
#include "1089.h"
int smallestElement(int array[], int size){
    int min = array[0];	//预设最小值为第一个数
    for (int i = 1; i < size; i++) {
      //循环搜索最小值，当数比最小值小，就更新它
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
```

#### 1089.h (Given)

```c
int smallestElement(int array[], int size);
```

 #### main.c (Given)

```c
#include <stdio.h>
#include "1089.h"

int list[105];

int main()
{
	int n;

	scanf("%d", &n);
	for (int i = 0; i < n; ++i)
		scanf("%d", &list[i]);
	printf("%d\n", smallestElement(list, n));

	return 0;
}
```

#### Demo

![](2.png)

## 6.10 Finding the index of the smallest

### Description

Write a function to return the index of the smallest element in an array of integers with the following function header:

`int smallestElementIndex(int array[], int size)`

### Hint

You should submit the implementation of the function but do not submit the main() function. 

### solution

#### 1090.c (Need to complete)

```c
#include "1090.h"
int smallestElementIndex(int array[], int size){
    int min = array[0];
    int minIndex = 0;
    for (int i = 1; i < size; i++) {
      //循环搜索最小值，当数比最小值小，就更新它，同时更新下标
        if (min > array[i]) {
            min = array[i];
            minIndex = i;
        }
    }
    return minIndex;
}
```

#### 1090.h (Given)

```c
int smallestElementIndex(int array[], int size);
```

#### main.c (Given)

```c
#include <stdio.h>
#include "1090.h"

int list[105];

int main()
{
	int n;

	scanf("%d", &n);
	for (int i = 0; i < n; ++i)
		scanf("%d", &list[i]);
	printf("%d\n", smallestElementIndex(list, n));

  return 0;
}
```

#### Demo

![](3.png)

## 6.11 Computing standard deviation

### Description

Exercise 5.22 computes the standard deviation of numbers. This exercise uses a different but equivalent formula to compute the standard deviation of n numbers.

`sum = x1 + x2 + ... + xn`

`mean = sum / n`

`deviation = sqrt((x1-mean)^2 + (x2-mean)^2 + ... + (xn-mean)^2)/(n-1))`

To compute deviation with this formula, you have to store the individual numbers using an array, so that they can be used after the mean is obtained.

You program should contain the following functions:

```c
/* Function for computing mean of an array of double values */
double mean(double x[], int size)

/* Function for computing mean of an array of int values */
double mean(int x[], int size)

/* Function for computing deviation of an array of double values */
double deviation(double x[], int size)

/* Function for computing deviation of an array of int values */
double deviation(int x[], int size)
```

### Hint

You should submit the implementation of the function but do not submit the main() function.

### solution

#### source.c (Need to complete)

```c
#include "source.h"
#include <math.h>
/* Function for computing mean of an array of double values */
double mean_double(double x[], int size){
    double sum = 0;
    for (int i = 0; i < size; i++) {
        sum += x[i];
    }
    return sum/size;
}

/* Function for computing mean of an array of int values */
double mean_int(int x[], int size){
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += x[i];
    }
    return (double)sum/size;
}

/* Function for computing deviation of an array of double values */
double deviation_double(double x[], int size){
    double mean = mean_double(x, size);
    double temp = 0;
    for (int i = 0; i < size; i++) {
        temp += (x[i] - mean) * (x[i] - mean);
    }
    return sqrt(temp/(size-1));
}

/* Function for computing deviation of an array of int values */
double deviation_int(int x[], int size){
    double mean = mean_int(x, size);
    double temp = 0;
    for (int i = 0; i < size; i++) {
        temp += (x[i] - mean) * (x[i] - mean);
    }
    return sqrt(temp/(size-1));
}
```
#### source.h (Given)

```c
#ifndef UNTITLED3_SOURCE_H
#define UNTITLED3_SOURCE_H

/* Function for computing mean of an array of double values */
double mean_double(double x[], int size);

/* Function for computing mean of an array of int values */
double mean_int(int x[], int size);

/* Function for computing deviation of an array of double values */
double deviation_double(double x[], int size);

/* Function for computing deviation of an array of int values */
double deviation_int(int x[], int size);
#endif //UNTITLED3_SOURCE_H
```

#### Demo

![](4.png)

## 6.12 Reversing an array

### Description

Write a function to reverses an array using the following function header:

```
void reverse(int array[], int size)
```

### Hint

You should submit the implementation of the function but do not submit the main() function. 

### solution

#### source.c (Need to complete)

反转数组，这里用原地反转的方法，即对称交换

```c
#include "source.h"
void reverse(int array[], int size){
    for (int i = 0; i < size/2; i++) {	//遍历数组前半部分
      //对称交换
        int temp = array[i];
        array[i] = array[size-i-1];
        array[size-i-1] = temp;
    }
}
```

#### source.h (Given)

```c
#ifndef INC_1092_SOURCE_H
#define INC_1092_SOURCE_H

void reverse(int array[], int size);

#endif //INC_1092_SOURCE_H
```

#### Demo

![](5.png)

## 6.13 Finding the sales amount

### Description

You have started a sales job in a department store. 

Your pay consists of a basis salary and a commission. The base salary is $5000. 

The scheme shown below is used to determine the commission rate.

```
Sales Amount		Commission Rate
---------------------------------------
$0.01-$5000		        8 percent
$5000-$10000		     10 percent
$10000.01 and above	 12 percent
```

Your goal is to earn ```$n``` a year. Write a program that finds out the minimum amount

of sales you have to generate in order to make ```$n```.

### Input

The first line is a positive integer t for the number of test cases.

Each test case contains an double value n (0<n<=1000000).

### Output

For each test case, outputs the minimum amount of sales you have to generate in order to make $n.

You should specified the floating-point number's precision to 0 and fixed.

### Sample Input

```
2
30000
60000
```

### Sample Output

```
210833
460833
```

### solution

数学模拟即可

```c
#include <stdio.h>
int main(){
    int n;
    double num;
    scanf("%d",&n);
    while (n--) {
        scanf("%lf",&num);
        num -= 5000;		//减去5000基本工资
        if (num <= 5000 * 0.08) {		//落在5000元内的销售额
            printf("%.lf\n",num/0.08);
        }
        else if (num <= 5000 * 0.08 + 5000 * 0.1 ) {	//落在5000～10000元的销售额
            printf("%.lf\n",(num-5000*0.08)/0.1 + 5000);
        }
        else {
            printf("%.lf\n",(num-5000*0.08-5000*0.1)/0.12 + 10000);	//如果落在10000元以上的销售额
        }
    }
    return 0;
}
```

#### Demo

![](6.png)

## 6.14 Binary Search

### Description

Implement the following function:

```c
/* 
Elements in array are in decreasing order.
size is the size of array. 
If key found, return the index, else return -1 
*/
int binarySearch(int array[], int key, int size)
```

For example, 

```array[] = {9, 7, 5}```

```binarySerach(array, 9, 3)``` returns ```0```,

```binarySerach(array, 0, 3)``` returns ```-1```,

### solution

#### source.c (Need to complete)

```c
#include "source.h"

int binarySearch(int array[], int key, int size){
    int index = -1;
  //搜索，当搜索到相等时，保存下标
    for (int i = 0; i < size; i++) {
        if (array[i] == key) {
            index = i;
        }
    }
    return index;
}
```

#### source.h (Given)

```c
/* 
Elements in array are in decreasing order.
size is the size of array. 
If key found, return the index, else return -1 
*/
int binarySearch(int array[], int key, int size);
```

#### Demo

![](7.png)