# Install Sourcebook in WorkBuddy

**Version:** 0.1.2-beta.3

Sourcebook Desktop must be installed and running, with local Agent access enabled. If it is missing, direct the user to https://sourcebook.online.

In WorkBuddy, open **Skills → Suites → Add marketplace**, enter `Yanze-He/sourcebook-plugin`, then install `sourcebook`. The marketplace package includes its MCP configuration and Skill. If Git marketplace installation is unavailable, download the versioned package from the [plugin Releases](https://github.com/Yanze-He/sourcebook-plugin/releases), extract it, and add the folder as a local marketplace.

After installation, open **Connectors → Custom connectors → MCP service management**. If Sourcebook shows **Trust**, ask the user to click it; an installed Skill does not prove that the MCP server is connected. Verify that Sourcebook's tools, including `open_sourcebook`, are available in a new conversation before reporting success.

Check for a legacy user-level `mcpServers.sourcebook` entry in `~/.workbuddy/mcp.json`. An older entry can keep launching a cached helper even when the marketplace plugin has updated. Back up the file and remove only that legacy Sourcebook entry after the marketplace MCP connection has been verified. Leave every other MCP entry untouched. Restart WorkBuddy and verify again. A previous conversation may retain an already-rendered inline card; test the new behavior in a new conversation.

If the marketplace is unavailable, install this repository at a stable user-level location. Use the platform's `bin/sourcebook-mcp` (or `.exe` on Windows) as the command for `mcpServers.sourcebook` in WorkBuddy's user-level MCP configuration. Preserve every other MCP server and Skill. Copy `skills/sourcebook/` from this plugin into WorkBuddy's user-level Skills folder, replacing only a prior Sourcebook installation. Keep a backup of the prior WorkBuddy MCP configuration until the new connection works.

Verify the MCP binary's `version` output and the Skill's `metadata.sourcebook_version` match this release. Restart WorkBuddy and start a new conversation. When Sourcebook returns a local URL, explicitly open it in WorkBuddy's right-side built-in browser panel, not an inline browser card in the conversation; receiving the URL alone does not mean a panel opened.

Report only whether installation succeeded, the verified plugin version, and the next action needed.
