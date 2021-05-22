---
title: Static Linked List
catalog: true
date: 2020-10-23
subtitle: 
lang: cn
header-img: /img/header_img/lml_bg.jpg
tags:
- C
categories:
- 数据结构
---

# Requirements:

Note: Programming in C,
    Let n be a positive integer with specified initial value n=30. Use an array of n units to store polynomials of one indeterminate (一元多项式). Design and implement a C program to:

1. Determine the data structure of the array
2. Use a stack S in the array to store unused units. Initially all the units are unused and the 0 to
      (n-1) indexes spread randomly on the stack
3. Use two lists LP and LQ in the array to store two polynomials P and Q of one indeterminate
4. Show the map of the array
5. Adding P and Q, restore the result as a list LPQ in the array, and release all garbage units to the stack
6. Show the map of the array again

## Solution：

​	链表的静态实现法，利用数组模拟动态链表，用栈来标记还未使用的节点。

#### 节点的声明

```C
typedef struct node{        //the list node
    int data;
    int highpower;
    int next;
}Node;
```

#### 一些变量的声明

```C
Node list[30]={0};          //List_array
int head_p=-1;              //Head of list LP
int head_q=-1;              //Head of list LQ
int head_sum=-1;            //Head of list LPQ
int manage_stack[30]={7,24,9,20,16,22,0,18,27,1,23,25,6,13,3,8,21,17,4,11,15,26,5,19,10,28,29,12,2,14}; //Store unused units
int top=29;                 //Top of stack
```

#### 一元多项式的打印

```C
void print_list(int head){          //Print the polynomials of one indeterminate
    while (head!=-1) {
        if (list[head].highpower>1)
            printf("%dx^%d",list[head].data,list[head].highpower);
        else if (list[head].highpower==1)
            printf("%dx",list[head].data);
        else
            printf("%d",list[head].data);
        if (list[head].next==-1)
            printf("\n");
        else if (list[list[head].next].data>=0)
            printf("+");
        head=list[head].next;
    }
}
```

#### 储存空间的打印

```C
void print_array(int list1){        //Show the map of the array
    printf("\nindex\tdata\thighpower\tnext\n");
    int temp=list1;
    while (temp!=-1) {
        printf("%d\t\t%d\t\t%d\t\t\t%d\n",temp,list[temp].data,list[temp].highpower,list[temp].next);
        temp=list[temp].next;
    }
}
```

#### 空间管理栈的打印

```C
void print_stack(){                 //Show the map of the stack
    printf("\nStack(from bottom to top):");
    for (int i=0; i<=top; i++) {
        printf("%d ",manage_stack[i]);
    }
    printf("\n");
}
```

#### 一元多项式加法的实现

```C
void add(){                                 //Adding list P and Q
    int temp=-1;
    while (!(head_p==-1||head_q==-1)) {
        if (head_sum==-1) {                     //Determines whether it is the first node
            head_sum=manage_stack[top--];
            temp=head_sum;
        }else{
            list[temp].next=manage_stack[top--];
            temp=list[temp].next;
        }
        if (list[head_p].highpower>list[head_q].highpower) {
            list[temp].data=list[head_p].data;
            list[temp].highpower=list[head_p].highpower;
            list[temp].next=-1;
            manage_stack[++top]=head_p;
            head_p=list[head_p].next;
        }else if (list[head_q].highpower>list[head_p].highpower){
            list[temp].data=list[head_q].data;
            list[temp].highpower=list[head_q].highpower;
            list[temp].next=-1;
            manage_stack[++top]=head_q;
            head_q=list[head_q].next;
        }else{
            if(list[head_p].data+list[head_q].data==0){
                manage_stack[++top]=head_p;
                head_p=list[head_p].next;
                manage_stack[++top]=head_q;
                head_q=list[head_q].next;
                manage_stack[++top]=temp;
                continue;
            }
            list[temp].data=list[head_p].data+list[head_q].data;
            list[temp].highpower=list[head_p].highpower;
            list[temp].next=-1;
            manage_stack[++top]=head_p;
            head_p=list[head_p].next;
            manage_stack[++top]=head_q;
            head_q=list[head_q].next;
        }
    }
}
```

### main函数

```C
int main(int argc, const char * argv[]) {
    int p_num=0;
    int q_num=0;
    int data=0;
    scanf("%d",&p_num);
    for (int i=0; i<p_num; i++) {               //Input list P
        scanf("%d",&data);
        if(!data)
            continue;
        list[manage_stack[top]].data=data;
        list[manage_stack[top]].highpower=i;
        list[manage_stack[top]].next=head_p;
        head_p=manage_stack[top--];
    }
    scanf("%d",&q_num);
    for (int i=0; i<q_num; i++) {                 //Input list Q
        scanf("%d",&data);
        if(!data)
            continue;
        list[manage_stack[top]].data=data;
        list[manage_stack[top]].highpower=i;
        list[manage_stack[top]].next=head_q;
        head_q=manage_stack[top--];
    }
    printf("\n*****  the first polynomials of one indeterminate  *****\n");
    print_list(head_p);
    print_array(head_p);
    printf("\n*****  the second polynomials of one indeterminate  *****\n");
    print_list(head_q);
    print_array(head_q);
    print_stack();
    add();
    printf("\n*****  the sum polynomials of one indeterminate  *****\n");
    print_list(head_sum);
    print_array(head_sum);
    print_stack();
    return 0;
}
```

## Xcode运行结果

```C
input:
4
1 3 4 2
5
2 -3 0 2 -1

output:
*****  the first polynomials of one indeterminate  *****
2x^3+4x^2+3x+1

index	data	highpower	next
29		2		3			12
12		4		2			2
2		3		1			14
14		1		0			-1

*****  the second polynomials of one indeterminate  *****
-1x^4+2x^3-3x+2

index	data	highpower	next
5		-1		4			19
19		2		3			10
10		-3		1			28
28		2		0			-1

Stack(from bottom to top):7 24 9 20 16 22 0 18 27 1 23 25 6 13 3 8 21 17 4 11 15 26 

*****  the sum polynomials of one indeterminate  *****
-1x^4+4x^3+4x^2+3

index	data	highpower	next
26		-1		4			5
5		4		3			19
19		4		2			12
12		3		0			-1

Stack(from bottom to top):7 24 9 20 16 22 0 18 27 1 23 25 6 13 3 8 21 17 4 11 15 29 2 10 14 28 
Program ended with exit code: 0
```

