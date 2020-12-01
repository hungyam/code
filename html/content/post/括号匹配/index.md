---
author: Hungyam
title: 括号匹配
date: 2020-12-1
description: 
math: true
image : 3.jpg
categories:
    - C
    - Stack

---

## 括号匹配

1.直接对相应的左右括号进行记录，左括号加一，右括号减一，一旦计数出现负数则不匹配（因为不能先出现右括号）

```C
#include <stdio.h>
int main (void){
    char c;
    char ch[60];
    int a,b,d;
    a=b=d=0;
    while(scanf("%c",&c)==1){
        switch(c){
            case '(':a++;break;
            case ')':a--;break;
            case '[':b++;break;
            case ']':b--;break;
            case '{':d++;break;
            case '}':d--;break;
        }
    if(a<0||b<0||d<0){
        printf("No");
        return 0;
    }
    }
    if(a==0&&b==0&&d==0)
    printf("Yes");
    else printf("No");
    return 0;
}
```

2.用栈实现。

​	遇到左括号，将其压入栈；

​	遇到右括号，若栈顶为对应的左括号，则将左括号出栈。

​	最后判断栈是否为空，空则匹配。

```C
#include <stdio.h>
#include <string.h>
int main()
{
    char a[100]={0};
    char stack[100]={0};
    scanf("%s",a);
    int len=strlen(a);
    int k=0;
    if(a[0]=='{'||a[0]=='}'||a[0]=='['||a[0]==']'||a[0]=='('||a[0]==')')
    {
        stack[k++]=a[0];
    }
    for(int i=1;i<len;i++)
    {
        if(a[i]=='{'||a[i]=='['||a[i]=='(')
            stack[k++]=a[i];
        if(a[i]=='}')
        {
            if(stack[k-1]=='{')
                stack[--k]=0;
            else
                stack[k++]=a[i];
        }
        if(a[i]==']')
        {
            if(stack[k-1]=='[')
                stack[--k]=0;
            else
                stack[k++]=a[i];
        }
        if(a[i]==')')
        {
            if(stack[k-1]=='(')
                stack[--k]=0;
            else
                stack[k++]=a[i];
        }
    }
    if(stack[0]==0&&stack[1]==0)
        printf("Yes");
    else
        printf("No");
    return 0;
}
```

 ### 例如：4+(2+8)*[5/(9-7)]​

由于栈具有“先进后出”的特点，能很好地表现优先级这个性质，因此可以用栈来存储已经检测到的括号。

以（A）为例：

![img](https://img2018.cnblogs.com/blog/1494653/201810/1494653-20181021134741514-2141924486.png)![img](https://img2018.cnblogs.com/blog/1494653/201810/1494653-20181021134748033-1613033952.png)![img](https://img2018.cnblogs.com/blog/1494653/201810/1494653-20181021134759032-638607951.png)

![img](https://img2018.cnblogs.com/blog/1494653/201810/1494653-20181021135214948-336628777.jpg)![img](https://img2018.cnblogs.com/blog/1494653/201810/1494653-20181021134818043-1910468283.png)![img](https://img2018.cnblogs.com/blog/1494653/201810/1494653-20181021134823234-1189325220.png)![img](https://img2018.cnblogs.com/blog/1494653/201810/1494653-20181021135230321-594426221.png)

有以下步骤：

（1）检测到第一个括号“(”，进栈；

（2）检测到第二个括号“)”，进栈。子表达式 “**4+(2+8)**” 完成匹配，匹配的括号都出栈；

（3）检测到第三个括号“[”，进栈；

（4）检测到第四个括号“(”，进栈。与（3）中的括号不匹配，但由于同是左括号，可以继续匹配；

（5）检测到第五个括号“)”，进栈。由括号的作用可知，后来的括号比先来的括号**优先级**高，因此与（4）中括号匹配，匹配的括号都出栈；

（6）检测到第六个括号“]”，进栈。由于原来优先级更高的括号已完成，因此与（3）中括号匹配。匹配的括号都出栈，至此所有括号匹配完成。

