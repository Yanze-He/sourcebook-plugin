# Install or update the Sourcebook Agent Plugin

**Current plugin version:** `0.1.2-beta.4`.

**Supported:** Codex and WorkBuddy on macOS (Apple silicon) or Windows x64.

This is the canonical manual for supported installation, update, and
troubleshooting steps. The guide linked from Sourcebook Desktop tells Agents how
to use these steps and respond concisely.

Before installing the plugin, [install Sourcebook Desktop](https://sourcebook.online), open it, and turn on **Settings → Connect an Agent → Local access**. The plugin cannot use your Books without a running Desktop. Desktop and plugin versions are independent.

## Codex

Run these commands in your own Terminal, or ask a local Codex task with permission to install plugins to run them:

```sh
codex plugin marketplace add Yanze-He/sourcebook-plugin
codex plugin add sourcebook@sourcebook-plugin
```

If the marketplace is already registered, use `codex plugin marketplace upgrade sourcebook-plugin` before running the second command. Start a **new local task** and ask **“Open Sourcebook.”** It should open the library in a regular right-side browser tab.

If Codex cannot write its plugin configuration, run the commands in your own Terminal; an Agent reporting a permission error has **not** installed the plugin. If you previously installed `sourcebook@sourcebook-bundled`, remove only that older Sourcebook entry after the new plugin works.

## WorkBuddy

1. Open **Skills → Suites → Add marketplace** and enter `Yanze-He/sourcebook-plugin`.
2. Install **sourcebook** from that marketplace. This installs its MCP connection and Skill together.
3. In **Connectors → Custom connectors → MCP service management**, click **Trust** for Sourcebook if prompted.
4. Restart WorkBuddy, start a new conversation, and ask **“Open Sourcebook.”** It should open in the right-side browser, not inside the conversation.

If Git marketplace installation is unavailable, download the [versioned plugin ZIP](https://github.com/Yanze-He/sourcebook-plugin/releases), extract it, and add the extracted folder as a local marketplace. The [manual WorkBuddy guide](.agents/plugins/sourcebook/INSTALL-WORKBUDDY.md) is a last resort.

An older manually configured Sourcebook MCP can take precedence over the marketplace package. If WorkBuddy still uses an old version or does not show Sourcebook tools, follow the [manual guide's legacy-connection steps](.agents/plugins/sourcebook/INSTALL-WORKBUDDY.md); keep other connectors and Skills intact.

## After installation and when updating

Use the same marketplace to update the plugin. In Codex, upgrade the marketplace and run `codex plugin add sourcebook@sourcebook-plugin` again. Restart the Agent and begin a new conversation so it loads the new MCP server and Skill. Confirm that the helper reports `0.1.2-beta.4` and that **“Open Sourcebook”** works; seeing the Skill alone does not prove the MCP connection is active. You may need to trust an updated WorkBuddy connector again.

Sourcebook will not silently change a Book. Ask the Agent to submit content or a metadata change, then review it in Desktop's **Agent submissions** window. If you submit a new text or file, the Agent should add a brief note describing where it came from or what it is for.

## If something does not work

| Symptom | Check |
| --- | --- |
| Agent cannot find Sourcebook tools | Confirm the plugin is installed. In WorkBuddy, check **Trust** in MCP service management. Restart the Agent and try a new conversation; Desktop must be running when you call a tool. |
| Codex installation says permission denied | Run the two Codex commands above in your local Terminal. Do not treat the failed Agent attempt as installed. |
| WorkBuddy still uses an old helper | Check for an older user-level `mcpServers.sourcebook` entry. Back up the file and remove **only** that entry after the marketplace connection works. |
| Agent returns a URL but no browser opens | Ask it to open the returned local URL in its right-side built-in browser. The URL alone does not mean the page was opened. |
| Agent submitted content but it is not in the Book | Open **Agent submissions** in Desktop and accept the pending submission. |

For detailed host-specific setup, see the package's [Codex](.agents/plugins/sourcebook/INSTALL-CODEX.md) and [WorkBuddy](.agents/plugins/sourcebook/INSTALL-WORKBUDDY.md) guides.
