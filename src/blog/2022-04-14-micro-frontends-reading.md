---
title: Micro Frontend Article Notes
description: These are some pertinent quotes from my reading of the Micro Frontend article.
date: 2022-04-14
path: /micro-frontend-reading
tags: ["frontend", "backend", "micro", "spa", "bff"]
layout: layouts/post.html
---

In the article ([Micro Frontends](https://martinfowler.com/articles/micro-frontends.html)), Cam Jackson describes the principles behind a micro frontend architecture. Listed below are some quotes from the article that I thought were very good. I highly recommend a full reading of this article.

- "However, be careful to ensure that your shared components contain only UI logic, and no business or domain logic."
- "That said, some level of cross-app communication is often needed. Custom events allow micro frontends to communicate indirectly, which is a good way to minimise direct coupling, though it does make it harder to determine and enforce the contract that exists between micro frontends. Alternatively, the React model of passing callbacks and data downwards (in this case downwards from the container application to the micro frontends) is also a good solution that makes the contract more explicit. A third alternative is to use the address bar as a communication mechanism, which we'll explore in more detail later."
- "Whatever approach we choose, we want our micro frontends to communicate by sending messages or events to each other, and avoid having any shared state."
- "If you are using redux, the usual approach is to have a single, global, shared store for the entire application. However, if each micro frontend is supposed to be its own self-contained application, then it makes sense for each one to have its own redux store. The redux docs even mention "isolating a Redux app as a component in a bigger application" as a valid reason to have multiple stores."
- "There are a lot of variables to account for here. The Backend for Front-end (BFF) might be self contained with its own business logic and database, or it might just be an aggregator of downstream services."
- "The guiding principle here is that the team building a particular micro frontend shouldn't have to wait for other teams to build things for them."
- "Another common question is, how should the user of a micro frontend application be authenticated and authorised with the server? Obviously our customers should only have to authenticate themselves once, so auth usually falls firmly in the category of cross-cutting concerns that should be owned by the container application. The container probably has some sort of login form, through which we obtain some sort of token. That token would be owned by the container, and can be injected into each micro frontend on initialisation. Finally, the micro frontend can send the token with any request that it makes to the server, and the server can do whatever validation is required."
- "...keep the functional tests focussed on validating the integration of the frontends, and not the internal business logic of each micro frontend, which should have already been covered by unit tests."
- "The final thing worth mentioning about our micro frontends is that they both use styled-components for all of their styling. This CSS-in-JS library makes it easy to associate styles with specific components, so we are guaranteed that a micro frontend's styles will not leak out and effect the container, or another micro frontend."
- "The main point we wish to make is that when you choose micro frontends, by definition you are opting to create many small things rather than one large thing. You should consider whether you have the technical and organisational maturity required to adopt such an approach without creating chaos."

* All quotes are attributed to this article: [Micro Frontends by Cam Jackson](https://martinfowler.com/articles/micro-frontends.html)
