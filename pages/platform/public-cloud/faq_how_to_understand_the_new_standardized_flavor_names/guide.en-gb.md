---
title: How to understand the new flavor naming rules for the 2017 range?
slug: faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range
excerpt: FAQ on naming rules for the 2017 Public Cloud offers
section: Knowledge Base
---


## Naming
The 2017 range brings with it a new standardization for flavor names.


### The first letter indicates the instance type
The **"General Purpose"** category provides a balanced CPU/RAM ratio on instances to meet most needs. It is the former EG category, and their names will begin with a B in the new range. E.g.: B2-7.

**"CPU Optimized"** instances are powered by a Xeon E5 processor and have a high number of cores. This is particularly suited to cases where computing power is a priority. It is the former HG category, and their names will begin with a C for "CPU" in the new range. E.g.: C2-60

**"RAM Optimized"** instances have a large amount of memory to better address the needs of databases and other memory-intensive applications. It is the former SP range, and their names will begin with a R for RAM in the new range. E.g.: R2-240


### The second character is for the generation
The second character simply corresponds to the generation of the range. As 2017 is the second generation for most of the instance types, the number is 2.


### The last part
The last part to the right of the "-” indicates the amount of RAM.


## Range correlation table
Here is a correlation table between the 2015 range and the 2017 range.

|2015 Name|2017 Name|
|---|---|
|*Shared resources: Sandbox*||
|VPS-SSD1|S1-2|
|VPS-SSD2|S1-4|
|VPS-SSD3|S1-8|
|*Guaranteed resources: General Purpose*||
|EG7|B2-7|
|EG15|B2-15|
|EG30|B2-30|
|EG60|B2-60|
|EG120|B2-120|
|*Guaranteed resources: CPU Optimized*||
|HG7|C2-7|
|HG15|C2-15|
|HG30|C2-30|
|HG60|C2-60|
|HG120|C2-120|
|*Guaranteed resources: RAM Optimized*||
|SP30|R2-30|
|SP60|R2-60|
|SP120|R2-120|
|SP240|R2-240|