# Install Sourcebook in WorkBuddy

**Version:** 0.1.2-beta.1

Sourcebook Desktop must be installed and running, with local Agent access enabled. If it is missing, direct the user to https://sourcebook.online.

In WorkBuddy, open **Skills → Suites → Add marketplace**, enter `Yanze-He/sourcebook-plugin`, then install `sourcebook`. The marketplace package includes its MCP configuration and Skill. Do not modify the user-level `mcp.json` for this route. If Git marketplace installation is unavailable, download the versioned package from the [plugin Releases](https://github.com/Yanze-He/sourcebook-plugin/releases), extract it, and add the folder as a local marketplace.

If the marketplace is unavailable, install this repository at a stable user-level location. Use the platform's `bin/sourcebook-mcp` (or `.exe` on Windows) as the command for `mcpServers.sourcebook` in WorkBuddy's user-level MCP configuration. Preserve every other MCP server and Skill. Copy `skills/sourcebook/` from this plugin into WorkBuddy's user-level Skills folder, replacing only a prior Sourcebook installation. Keep a backup of the prior WorkBuddy MCP configuration until the new connection works.

Verify the MCP binary's `version` output and the Skill's `metadata.sourcebook_version` match this release. Restart WorkBuddy and start a new conversation. When Sourcebook returns a local URL, explicitly open it in WorkBuddy's built-in browser panel; receiving the URL alone does not mean a panel opened.

Report only whether installation succeeded, the verified plugin version, and the next action needed.
