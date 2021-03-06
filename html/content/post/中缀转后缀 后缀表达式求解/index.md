---
author: Hungyam
title: 中缀转后缀、后缀求解
date: 2020-11-10
description: 
math: true
image : 3.jpg
categories:
    - C
    - 数据结构
---

### Lab Work 04-1. Application of Stacks

**Note**: Programming in C,

Design a C program to implement:

- (1) Arithmetic expression translation: from in-fix to post-fix notation
- (2) Evaluation of an arithmetic expression in post-fix notation
### Solution:

```C
#include<stdio.h>
#include<string.h>
int main(){
    char in_fix[20]={0};//中缀
    char post_fix[20]={0};//后准
    char stack[20]={0};//
    int top=0;
    int index=0;
    scanf("%s",in_fix);
  
    /*translation*/
    for(int i=0;i<strlen(in_fix);i++){
    	if(in_fix[i]>='0'&&in_fix[i]<='9'){
    	    post_fix[index++]=in_fix[i];
    	}else if(in_fix[i]=='('){
    	    stack[top++]='(';
    	}else if(in_fix[i]==')'){
    	    while(stack[top-1]!='('){
    	        post_fix[index++]=stack[top-1];
    	        top--;
    	    }
    	}else if(in_fix[i]=='+'||in_fix[i]=='-'){
    	    if(top){
    	        while(stack[top-1]=='*'||stack[top-1]=='/'){
    	            post_fix[index++]=stack[top-1];
    	            top--;
    	        }
    	    }
    	    stack[top++]=in_fix[i];
    	}else{
    	    stack[top++]=in_fix[i];
    	}
    }
    while(top){
    	if(stack[top-1]!='(')
    	    post_fix[index++]=stack[top-1];
    	top--;
    }
    printf("The post-fix notation is:  %s\n",post_fix);
  
    /*evaluaion*/
    index=0;
    int eva[20]={0};
    for(int i=0;i<strlen(post_fix);i++){
        if(post_fix[i]>='0'&&post_fix[i]<='9'){
            eva[top++]=post_fix[i]-48;
        }else if(post_fix[i]=='+'){
            eva[top-2]=eva[top-2]+eva[top-1];
            top--;
        }else if(post_fix[i]=='-'){
            eva[top-2]=eva[top-2]-eva[top-1];
            top--;
        }else if(post_fix[i]=='*'){
            eva[top-2]=eva[top-2]*eva[top-1];
            top--;
        }else{
            eva[top-2]=eva[top-2]/eva[top-1];
            top--;
        }
    }
    printf("Evaluaion:  %d\n",eva[top-1]);
    return 0;
}
```

### Standard I/O

```
input: 

2*5-3

output:

The post-fix notation is:  25*3-
Evaluaion:  7

```

```
input: 

2*(6+6*3)

output:

The post-fix notation is:  2663*+*
Evaluaion:  48

```

