---
layout: post
date:   2024-07-25 15:43:32 +0500
categories: dsa
excerpt_separator: <!--more-->
---

<!--more-->

| Problem | Solution | Structure Name | Implementation | Complexity | Applications |
| --- | --- | --- | --- | --- | --- |
|  |  | Linked List |  |  |  |
| we want to create a list of elements where we can extract the elements in the order in which they were added |  | Queue |  |  |  |
| we want to add and then extract the one with highest priority  |  | Priority Queue | unsorted array/list | pop ⇒ n - scan whole array to find max ,insert ⇒ 1 |  |
|  |  |  | sorted array | pop: 1 ⇒ get last element by indexing insert: n ⇒ find (log n) + shift others to right ( n ) + insert (1) |  |
|  |  |  | sorted list | pop: 1  ⇒ doubly linked list has index of last/first insert: n ⇒ find (n - no binary search in list) + insert ( 1 ) |  |
| want to make insertion in queue faster. no need for perfect sorting order.  | binary tree with min/max and completeness property. adding to one branch will make tree height equal to n for n elements keep tree shallow by adding left to right ( h = log n).  ⇒ also enables us to use formula for  indexing children and parent BUT need to maintain above completeness property + min/max property while adding/removing | Heap | array for data+methods to maintain properties | pop: 1 ⇒ insert: log(n) ⇒ |  |
| is there a path from A to B? | maze can be broken into disjoint sets. (no cell in common).  within a set any point is reachable from any point. make set, find, union | Disjoint sets |  |  |  |