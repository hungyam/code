---
title:  Peterson算法的简单分析
catalog: true
date: 2021-05-22
subtitle: 
lang: cn
header-img: /code/img/header_img/lml_bg.jpg
tags:
- C
categories:
- 操作系统

---

## Peterson算法的简单分析

最近操作系统学到进程同步，介绍了Peterson算法。

### 第一种（谦让式）

上课教材《操作系统概念》第七版（翻译版）和百度百科，还有查到的绝大部分的资料中，都是下面这种方法实现的。
下面代码是教材中摘的(P169)。


```c
/*进程Pi的结构*/
do{
	flag[i] = TRUE;
	turn = j;
	while(flag[j] && turn == j);
	//临界区
	flag[i] = FALSE;
	//剩余区
} while(TRUE);
```

为什么说这种算法是一种“谦让”的算法呢？

因为当进程i将flag[i]设置为TRUE之后，又把turn设置为j。

flag[i]=TRUE表示：进程i想进入临界区。

而turn = j表示：现在轮到进程j进入临界区了。

所以进程i的进入区代码是这样的:

```c
flag[i] = TRUE;
turn = j;
while(flag[j] == TRUE && turn == j);
```

进程j的进入区代码是这样的：
```c
flag[j] = TRUE;
turn = i;
while(flag[i] == TRUE && turn == i);
```

- 分析：
    		首先，如果是进程i第一次开始执行，那它可以顺利进入临界区，因为flag[j]=FALSE，进程j还不想进入临界区！
    其次，如果进程i和进程j已经在并发执行了，它们的调度顺序是未知的，假设每个进程每次执行一行代码，交替执行。那先执行的进程就“赚了”，比如进程i先执行，那么它会先将turn“谦让”地设置为j，但接下来轮到进程j执行了，它也“谦让”地将turn设置为i。这时又轮到了进程i执行了，而且我们可以发现，while中第二个条件已经不满足了！这时进程i就进入了临界区！然后我们把情况一般化，不再假设每个进程交替地执行一行代码，只要一个进程后执行了turn = i;(或turn = j;)这条语句，那么另一个进程就可以进入临界区。（分析的时候重点关注一点：另一个进程到底想不想进入临界区？）

### 第二种

只在《现代操作系统》第三版中找到了这种方法。下面代码是书上摘的(P69)。
没找到第四版的书和资源，有可能第四版也改成第一种实现方法了。所以我很奇怪是不是利用flag和turn实现的加锁都叫Peterson算法？

```c
#define FALSE 0
#define TRUE  1
#define N     2                                           /* 进程数量 */

int turn;                                                 /* 现在轮到谁？*/
int interested[N];                                        /* 所有值初始化为0（FALSE）*/

void enter_region(int process)                            /* 进程是0或1 */
{
	int other;                                            /* 其他进程号 */

	other = 1 - process;                                  /* 另一方进程 */
	interested[process] = TRUE;                           /* 表名所感兴趣的 */
	turn = process;                                       /* 设置标志 */
	while(turn == process && interested[other] ==TRUE);   /* 空语句 */
}

void leave_region(int process)                            /* 进程：谁离开？*/
{
	interested[process] = FALSE;                          /* 表示离开临界区 */
}
```
- 分析：
    		这种算法本质上和第一种的区别就在于进入区(变量命名不同process表示当前进程自身。

    ​		other表示另一个进程interested表示flag)

```c
interested[process] = TRUE;
turn  = process;
while(turn == process && interested[other] == TRUE);
```

可以看到这种方法不再谦让了，进程自己想进入临界区，于是把turn设置成自己。

所以两个进程都把turn设置为自己的进程号，但只有后被保存进去的进程号才有效，前一个写进去的因为被重写而丢失。

- 分析：
    		首先，还是假设进程i第一次开始执行，那它可以顺利进入临界区，因为interested[j]=FALSE，进程j还不想进入临界区！
        		其次，交替执行的过程中，假设某一时刻进程i正处于临界区，那么interested[i] = TRUE 且 turn = i，那么这时如果进程j也想进临界区，它会先把interested[j]改为TRUE，然后把turn改为j。但它会在while循环那里忙等待，直到进程i退出了临界区，把interested[i]改为FALSE。

### 总结

无论是否“谦让”，都实现了进程互斥，并满足了这三点：

- 同一时刻只有一个进程能进入临界区

- 前进：不在临界区的进程不能阻止另一个进程进入临界区
- 
- 有限等待：不得使进程无限期等待进入临界区



————————————————
转自&原文链接：https://blog.csdn.net/weixin_37023469/article/details/84302600