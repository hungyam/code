---
author: Hungyam
title: 选择排序(mips汇编)
date: 2020-10-27
description: 
math: true
image: 3.jpg
comments: true
categories:
    - Assembly
    - 算法
---

### Mars编程：

​		先输入12个整数保存起来，再分成两组（5个整数和7个整数），然后把它们分别用选择排序方法进行排序，最后再显示这两个组的数据的排序结果。     

​		例如：

​				输入：20 12 5 6 34 15 4 8 2 6 12 30           

​				显示：5 6 12 20 34  2 4 6 8 12 15 30  

​	    要求排序用一个具有两个参数(基地址和排序整数个数)的叶过程实现。

​	 * 选择排序：先利用一个数与其他数比较，找出最大的数，然后在剩余的数中再用同样的方法找最大的，...

### 源代码:

```php
.text
.globl main
main:
    li      $v0, 4
    la      $a0, msg
    syscall

    la      $s1, nums
    move    $s0, $zero
get:
    li      $v0,5
    syscall
    sll     $t0, $s0, 2
    add     $t1, $s1, $t0
    sw      $v0, 0($t1)
    addi    $s0, $s0, 1
    slti    $t2, $s0, 12
    bne     $t2, $zero, get

    add     $s0, $zero, $zero
sort1:
    add     $s2, $zero, $zero #内循环控制变量j
    lw      $t3, 0($s1)       #存最大值
    add     $s6, $zero, $zero #最大值所在的下标  
    add     $t6, $zero, $zero #临时存数组值
loop1:
    sll     $s3, $s2, 2
    add     $s4, $s3, $s1     
    lw      $t6, 0($s4)       #数组值放进t6
    slt     $s5, $t3, $t6     
    beq     $s5, $zero ,skip1  #max<t6,赋值
    add     $t3, $zero ,$t6   #更新最大值
    add     $s6, $zero ,$s2   #更新最大值所在的index
skip1:
    addi    $s2 ,$s2, 1       #j++
    addi    $t4 ,$zero, 4     
    sub     $t4 ,$t4 ,$s0     #t4=4-i
    addi    $a3 ,$t4 ,1
    slt     $t5 ,$s2 ,$a3
    bne     $t5 ,$zero, loop1  #j<t4

    sll     $t7, $t4 ,2
    add     $t8, $s1 ,$t7
    lw      $a1, 0($t8)      
    sll     $t7, $s6 ,2
    add     $t9, $s1 ,$t7
    lw      $a2, 0($t9)
    sw      $a1, 0($t9)
    sw      $a2, 0($t8)

    addi    $s0, $s0, 1
    slti    $t2, $s0, 4
    bne     $t2, $zero, sort1


    add     $s0, $zero, $zero
    add     $s1, $s1, 20
sort2:
    add     $s2, $zero, $zero #内循环控制变量j
    lw      $t3, 0($s1)       #存最大值
    add     $s6, $zero, $zero #最大值所在的下标  
    add     $t6, $zero, $zero #临时存数组值
loop2:
    sll     $s3, $s2, 2
    add     $s4, $s3, $s1     
    lw      $t6, 0($s4)       #数组值放进t6
    slt     $s5, $t3, $t6     
    beq     $s5, $zero ,skip2  #max<t6,赋值
    add     $t3, $zero ,$t6   #更新最大值
    add     $s6, $zero ,$s2   #更新最大值所在的index
skip2:
    addi    $s2 ,$s2, 1       #j++
    addi    $t4 ,$zero, 6     
    sub     $t4 ,$t4 ,$s0     #t4=6-i
    addi    $a3 ,$t4 ,1
    slt     $t5 ,$s2 ,$a3
    bne     $t5 ,$zero, loop2  #j<t4

    sll     $t7, $t4 ,2
    add     $t8, $s1 ,$t7
    lw      $a1, 0($t8)      
    sll     $t7, $s6 ,2
    add     $t9, $s1 ,$t7
    lw      $a2, 0($t9)
    sw      $a1, 0($t9)
    sw      $a2, 0($t8)

    addi    $s0, $s0, 1
    slti    $t2, $s0, 6
    bne     $t2, $zero, sort2


    move    $s0, $zero
    la      $s1, nums
out:
    sll     $t0, $s0, 2
    add     $t1, $s1, $t0
    lw      $a0, 0($t1)
    li      $v0, 1
    syscall
    la      $a0, seperate
    li      $v0, 4
    syscall
    addi    $s0, $s0, 1
    slti    $t2, $s0, 12
    bne     $t2, $zero, out

    li $v0, 10
    syscall
.data
 msg:
    .asciiz "input 12 integers:\n" 
    .align 2
 nums:
    .word 
    .space 48
seperate:
    .asciiz " "
```

