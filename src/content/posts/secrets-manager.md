---
title: 'Your secrets, in the right places.'
description: 'Centralize sensitive configuration without turning your repository into a credential store.'
category: 'Security'
date: 'October 26, 2026'
readTime: '3 min read'
order: 1
art: 'secrets'
---

A growing application often accumulates a small constellation of API keys. The difficult part is remembering which environment uses which value, and updating every place when a credential changes.

## Give shared configuration a home

Laravel Cloud’s Secrets Manager stores encrypted values at the organization level. You link each secret to the environments that need it. This gives a shared credential one place to be maintained, while keeping access deliberate.

## Make rotation a routine

Create a secret in **Organization settings → Secrets**, link it to the intended environments, then deploy. Values are not shown again after saving. To rotate one, enter a replacement and redeploy every affected environment; saving alone does not change a running deployment.

## Know which value wins

A custom environment variable takes precedence over a linked secret with the same key. Check for overrides when an application appears to ignore a rotation.

## A static-site detail that matters

This Astro blog builds to HTML. Any value embedded during the build becomes part of the published output. Keep private credentials out of client code and generated pages. Use a separate backend when a feature needs a private API key at runtime.

See the [Secrets Manager documentation](https://laravel.com/cloud/docs/secrets) for encryption, permissions, and deployment behavior.
