---
title: 'A live preview for every pull request.'
description: 'Give your next idea a URL before it becomes your next release. A better feedback loop starts here.'
category: 'Workflow'
date: 'October 27, 2026'
readTime: '4 min read'
order: 0
art: 'preview'
---

Code review is great at explaining what changed. A running application helps explain how that change feels. A preview gives reviewers something concrete to explore: the layout, the navigation, and the entire journey between them.

## Put the review in context

For a blog like this one, open a branch such as `feat/new-article-layout`. A preview lets a teammate read the actual article on their phone before the design reaches the main site. Pair that link with a short review brief: what changed, what to try, and what feedback you need.

## Let Cloud handle the lifecycle

Configure an automation under your target environment’s **Settings → Preview environments**. Cloud can provision a preview when a pull request opens, publish its URL on the pull request, and remove it when the request closes or merges. Branch filtering lets you target a pattern such as `feat/*`.

## Keep the sandbox intentional

Use isolated resources and test credentials. Current automations define their own environment variables rather than copying production values. Check the replication settings before testing migrations, especially if you choose to share a database.

The payoff is a shorter conversation between “I think this works” and “I tried it.”

Read the [official Preview Environments guide](https://laravel.com/cloud/docs/preview-environments) for configuration and resource options.
