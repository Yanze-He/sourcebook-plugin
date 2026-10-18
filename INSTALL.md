# Install Sourcebook Agent Plugin

This repository supports Codex and WorkBuddy on macOS Apple silicon and Windows x64. Install [Sourcebook Desktop](https://sourcebook.online) first, open it, and enable **Settings → Connect an Agent → Local access**. If Desktop is missing, stop and tell the user to download it from https://sourcebook.online.

## Codex

In a local Codex task with permission to update the user's plugin configuration, register the GitHub marketplace and install its one Sourcebook plugin:

```sh
codex plugin marketplace add Yanze-He/sourcebook-plugin
codex plugin add sourcebook@sourcebook-plugin
```

If an older `sourcebook@sourcebook-bundled` installation exists, remove only that Sourcebook entry after confirming the new plugin works. Never modify other plugins. Start a new local Codex task, then ask it to open Sourcebook. If the task cannot write Codex's plugin configuration, say so and give these two commands for the user's local Terminal; a denied write is not a successful installation.

## WorkBuddy

In WorkBuddy's **Skills → Suites → Add marketplace** dialog, enter `Yanze-He/sourcebook-plugin`. Install `sourcebook` from the new marketplace. The plugin includes both its MCP server and Skill; it does not need a separate edit to the user's `mcp.json`. Restart WorkBuddy, then ask it to open Sourcebook.

If marketplace installation is unavailable in your WorkBuddy version, use the [manual WorkBuddy guide](.agents/plugins/sourcebook/INSTALL-WORKBUDDY.md) and a versioned plugin package. Preserve other MCP servers and Skills.

Report only whether the install succeeded, the verified plugin version, and any next action the user must take. Do not print command logs or an extended security review.
