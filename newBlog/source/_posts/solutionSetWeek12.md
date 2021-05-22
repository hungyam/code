---
title: solutionSetWeek12
catalog: true
date: 2021-05-05
subtitle:
lang: cn
header-img: /img/header_img/tag_bg.jpg
tags:
- C
categories:
- 题解
---

# solutionSetWeek12

### 5.16 Determining prime number

#### Solution

```c
#include "source.h"
int isPrime(int num) {
    for (int i = 2; i*i <= num; i++) {		//search from 2 to sqrt(num)
        if (num%i == 0)						//not a prime number
            return 0;
    }
    return 1;
}
```

#### Demo

![截屏2021-05-15 上午3.19.42](1.png)

### 5.17 Displaying matrix of 0s and 1s

#### Solution

```c
#include <stdio.h>

void printMatrix(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == 0 || j == 0 || i == j)
                printf("1");
            else
                printf("0");
            if (j == n-1)					//the last one of a line
                printf("\n");
            else
                printf(" ");
        }
    }
}

int main() {
    int num;
    int n;
    scanf("%d",&num);
    while (num--) {
        scanf("%d",&n);
        printMatrix(n);
    }
    return 0;
}

```

#### Demo

![截屏2021-05-15 上午3.21.42](2.png)

### 5.18 Generating random characters

#### Solution

```c
#include "source.h"
#include <stdlib.h>
char getRandomUpperCaseLetter(void) {
    return 'A'+rand()%27;					//rand()%27 = 0~16, next function is same
}
char getRandomLowerCaseLetter(void) {
    return 'a'+rand()%27;
}
char getRandomDigitCharacter(void) {
    return '0'+rand()%10;
}
char getRandomCharacter(void) {
    return rand()%128;
}
```

#### Demo

![截屏2021-05-15 上午3.24.37](3.png)

### 5.19 Using the sqrt function

#### Solution

```c
#include <stdio.h>
#include <math.h>
void printList(int a, int b){
    for (int i = a; i <= b; i++) {
        printf("%12d%12.4lf\n",i,sqrt(i));
    }
}
int main() {
    int a;
    int b;
    scanf("%d%d",&a,&b);
    printf("%12s%12s\n", "Number", "SquareRoot");
    printList(a, b);
    return 0;
}

```

#### Demo

![截屏2021-05-15 上午3.25.40](4.png)

### 5.20 The MyTriangle header file

#### Solution

```c
#include "MyTriangle.h"
#include <math.h>
bool isValid(double side1, double side2, double side3) {
    if (side1 + side2 > side3 && fabs(side1 - side2) < side3) {
        return true;
    }
    return false;
}

double area(double side1, double side2, double side3) {
    double s = (side1 + side2 + side3) / 2;
    double area = sqrt(s*(s-side1)*(s-side2)*(s-side3));
    return area;
}

```

#### Demo

![截屏2021-05-15 上午3.26.24](5.png)

### 5.21 Using the trigonometric functions

#### Solution

```c
#include <stdio.h>
#include <math.h>
void myPrint(void){
    for (int i = 0; i <= 360; i += 10) {
        printf("%12d%12.4lf%12.4lf\n", i, sin(i), cos(i));
    }
}

int main() {
    printf("%12s%12s%12s\n","Degree","Sin","Cos");
    myPrint();
    return 0;
}

```

#### Demo

![截屏2021-05-15 上午3.27.06](6.png)

###  5.22 Financial application computing the mean and standard deviation

#### Solution

```c
#include <stdio.h>
#include <math.h>
void computing(int n) {
    double sum = 0;
    double squareSum = 0;
    int num;
    for (int i = 0; i < n; i++) {
        scanf("%d",&num);
        sum += num;
        squareSum += num*num;
    }
    printf("%.2lf %.2lf\n", sum/n, sqrt((squareSum-sum*sum/n)/(n-1)));
}
int main() {
    int n, m;
    scanf("%d",&n);
    while (n--) {
        scanf("%d",&m);
        computing(m);
    }
    return 0;
}

```

#### Demo

![截屏2021-05-15 上午3.27.52](7.png)

### 5.23 Approximating the square root

#### Solution

```c
#include <stdio.h>
#include <math.h>

void computing(int num, double err) {		
    double last;
    double next = num;
    do {
        last = next;
        next = (last + num/last)/2;			//Recurrence formula
    } while (last-next >= err);
    printf("%.8lf\n",next);
}

int main() {
    int n;
    scanf("%d", &n);
    int num;
    double err;
    while (n--) {
        scanf("%d%lf", &num, &err);
        computing(num, err);
    }
    return 0;
}

```

#### Demo

![截屏2021-05-15 上午3.28.26](8.png)

-----

​																															      						By Hungyam