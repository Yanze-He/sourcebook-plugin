# Sourcebook Agent Plugin

Use your Sourcebook Books while working with an Agent. This plugin connects **Codex** or **WorkBuddy** to [Sourcebook Desktop](https://sourcebook.online) through a local MCP server and a workflow Skill. You can ask naturally—no `@` or `/` command is required.

> **Beta · v0.1.2-beta.3** · macOS (Apple silicon) and Windows x64 · [Install guide](INSTALL.md) · [Latest plugin release](https://github.com/Yanze-He/sourcebook-plugin/releases)

## What you can do

- **Find project context:** choose a Book, search its sources, and read only the items relevant to your task.
- **Create with your sources:** ask the Agent to draft or analyze something using a Book's text, links, notes, and available files.
- **Bring work back:** ask the Agent to submit a finished text, a named local file, or a title/note change. Each submission appears in **Agent submissions** for you to accept or reject. New text and files include a short note about their origin or use.
- **Keep the library visible:** when you ask to open Sourcebook—or submit something for review—the Agent should open it in its right-side browser if the host supports one.

Try asking:

- “Open Sourcebook and find the research notes in my Launch Book.”
- “Use the sources in my Launch Book to draft a short brief.”
- “Submit this final brief to my Launch Book and open Sourcebook so I can review it.”

## Get started

1. Install and open [Sourcebook Desktop](https://sourcebook.online). In **Settings → Connect an Agent**, turn on local Agent access.
2. Follow the [Codex or WorkBuddy installation steps](INSTALL.md). The plugin includes both MCP and the Skill; you do not need to install them separately.
3. Start a new Agent conversation and say **“Open Sourcebook.”** Then choose the Book you want it to use.

Desktop must be running while you use the plugin. The Agent must select a Book before reading its sources. It cannot directly edit your library: additions and metadata changes stay pending until you approve them in Desktop. Material the Agent reads may be sent to the model service used by that Agent.

For updates, install the newest plugin through the same marketplace, restart the Agent, and check the reported version. Plugin and Desktop have separate version numbers. See [installation, update, and troubleshooting details](INSTALL.md).

## For developers

This repository contains the versioned Codex/WorkBuddy marketplace package, the native Go MCP server, and the shared Skill. The [Sourcebook Desktop repository](https://github.com/Yanze-He/sourcebook-for-agents) contains the application and local bridge. The website source is private and is not part of this repository.

Licensed under [MIT](LICENSE). [Report a problem](https://sourcebook.online/feedback/).
