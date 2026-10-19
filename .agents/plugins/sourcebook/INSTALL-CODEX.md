# Install Sourcebook in Codex

**Version:** 0.1.2-beta.3

Sourcebook Desktop must be installed and running, with local Agent access enabled. If it is missing, direct the user to https://sourcebook.online.

Use Codex's GitHub marketplace support:

```sh
codex plugin marketplace add Yanze-He/sourcebook-plugin
codex plugin add sourcebook@sourcebook-plugin
```

If the marketplace already exists, update it before installing the current Sourcebook plugin. Do not edit other plugin entries. If this task cannot write the Codex plugin configuration, do not claim success; tell the user to run the commands above in a local Terminal. After installation, ask the user to start a new local Codex task. When `open_sourcebook` returns the Desktop URL, open it in a regular right-side Codex browser tab; an MCP App preview attached to a tool result may disappear when the turn ends.

Report only whether installation succeeded, the verified plugin version, and the next action needed.
