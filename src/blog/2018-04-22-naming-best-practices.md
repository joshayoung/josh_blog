---
title: Naming Best Practices
description: These are some of the variable, method, and class naming tips that I have acquired over the years. I have outline them here and hope to update this with any future discoveries.
date: 2018-04-22
path: /naming-best-practices
tags: ["standards", "programming"]
layout: layouts/post.html
---

Over the years (probably from a few of the books I have read), I have come about a few variable naming rules that I think allow for the best program structure. As with anything there are exceptions to the rules. Actually, some languages even discourage some of the examples that I will list below. However, this serves as a good general guideline.

#### Namespaces

- should be in PascalCase
- `Person`, `Homes`, `Profile`, etc.

#### Classes

- should be in PascalCase
- always use nouns for your class names
  - `Student`, `Customer`, `Account`, etc.

#### Methods

- should be in camelCase.
- always use verbs for your method name
  - `getId()`, `findStudentName()`, `calculateTax()`, etc.

#### Variables

- should be in camelCase or separated by underscores.
  - `firstName`, `first_name`, `lastInitial`, `last_initial`, etc.

#### Short Lived Variables

- should be short
  - `i`, `j`, `k`, etc.

#### Constants

- should be all uppercase, deliminated by underscores.
- `TAX_RATE`, `CURRENCY_TYPE`, etc.

#### Private/Protected Variables

- should start with an underscore
- `_firstName`, `_age`, `_lineLength`, etc.

#### Interfaces

- If your language supports interfaces, prefix it with the 'I'.
- `IStackAttributes`, `IStudentOptions`, etc.

Do not try to make variables shorter by abbreviating them. It is better that a variable be longer (we have code completion after all) so any future developer will understanding the intent of the variable in the future. This same principle also applies to method and function names.

- Do Not Use:
  - `fstNm`, `mxAg`, `minDist`, `calTxRt()`, etc.
- Instead Use:
  - `firstName`, `maxAge`, `minimumDistance`, `calculateTaxRate()`, etc.

Do not **ever** use extremely short variable names like `b` or `i` outside the content of a short-lived scope. If `longestTimeLived` is set to the variable `ltl`, no future programmer will have any idea what that means. It will also make your program hard to read even if the meaning is known.

##### Consider the difference here:

- `longestTimeLived` - `shortedTimeLived` = `timeLivedDifference`
  - vs:
- `ltl` - `stl` = `tld`
