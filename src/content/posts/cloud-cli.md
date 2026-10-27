---
title: 'Stay in flow. Ship from your terminal.'
description: 'Inspect applications and follow deployments without leaving the tools you already know.'
category: 'Developer experience'
date: 'October 24, 2026'
readTime: '3 min read'
order: 3
art: 'cli'
---

Sometimes the shortest route to understanding your infrastructure starts with a terminal. The Laravel Cloud CLI puts application management next to Git, your build commands, and the editor where you are already working.

## Start with observation

Install the CLI with Composer, then authenticate using `cloud auth`. The CLI requires PHP 8.3 or later. Once connected, begin with a read-only command:

```sh
cloud application:list -n --json
```

The `-n` flag keeps scripts from waiting for input. JSON output makes it easier to select the fields you need without parsing a formatted table.

## Make the target explicit

Repository defaults can identify the application and organization for later commands. Check those defaults and the intended environment before initiating a deployment. A convenient command is still an infrastructure action.

## Follow the release

The CLI supports deploying and monitoring releases, listing environments, and inspecting deployment details. Check `cloud list -n` and the help for a particular command against your installed version; the available commands evolve.

## Keep credentials out of commands

Avoid pasting private tokens into shell arguments or checking them into scripts. Use the supported authentication flow and carefully scoped credentials for automation.

The [official CLI guide](https://laravel.com/cloud/docs/api/cli) covers installation, repository defaults, and supported operations.
