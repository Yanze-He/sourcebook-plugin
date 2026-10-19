# Install Sourcebook in Codex

**Version:** 0.1.2-beta.1

Sourcebook Desktop must be installed and running, with local Agent access enabled. If it is missing, direct the user to https://sourcebook.online.

Use Codex's GitHub marketplace support:

```sh
codex plugin marketplace add Yanze-He/sourcebook-plugin
codex plugin add sourcebook@sourcebook-plugin
```

If the marketplace already exists, update it before installing the current Sourcebook plugin. Do not edit other plugin entries. If this task cannot write the Codex plugin configuration, do not claim success; tell the user to run the commands above in a local Terminal. After installation, ask the user to start a new local Codex task.

Report only whether installation succeeded, the verified plugin version, and the next action needed.
