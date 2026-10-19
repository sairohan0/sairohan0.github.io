---
title: 'Sample: what I learned about Astro content collections'
description: 'Replace me. A short note on something new.'
date: 2026-10-10
tags: [learnings, web]
topic: Web development
draft: true
---

Content collections give each folder a typed schema, so a typo in frontmatter fails the build instead of shipping.

```ts
const posts = await getCollection('learnings');
```
