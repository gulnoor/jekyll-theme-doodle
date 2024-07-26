---
layout: post
title:  "Designing Relational Database"
date:   2024-07-25
categories: Databases
image: /assets/images/dbdesign.svg
---
<!-- advantages of relational model: can query with high level language, efficient implementations
having multiple tables(relations) avoids redundancy

relation = table

db: set of named relations(tables)

the tables are related through keys

key: unique value to identify a row in table

schema: description of the structure of tables

closed:  query on table returns a table

compositionality: ?

SQL is implementation of relational algebra language

cross product of two tables , then apply operators on resulting table

natural join vs cross product: enforces equality of shared attributes

theta join: used in most dbms, natural join with a projection (column selection) -->

<!-- # Designing Relational Database -->

## Design Anomalies:
1. Redundancy: capturing the fact that orderID 123 is related to user peppa multiple times 
2. Update anomaly: if wanna update item name, will have to update everywhere
3. deletion anomaly: if wanna delete pizza from menu , and a user has only one order with one item only, then user’s personal info will also be deleted from database

![Untitled](/assets/images/Untitled-2024-07-20-2149.png)

## Design by decomposition:

goal is to break table into tables that satisfy rules of normal form

properties = functional dependency + multivalued dependencies (come from real world properties)

identify dependencies in mega table, then break into small tables 

![Untitled](/assets//images/Untitled2-2024-07-20-2149.png)

functional dependency: 

<aside>
<img src="/icons/info-alternate_yellow.svg" alt="/icons/info-alternate_yellow.svg" width="40px" /> it comes from real world knowledge about data

</aside>

[ A1, A2] ⇒ [B1, B2] : if a1 a2 are same then b1 b2 are same

if func dep holds⇒ LHS of functional dependency is “key” of the table

Closure of an attribute??