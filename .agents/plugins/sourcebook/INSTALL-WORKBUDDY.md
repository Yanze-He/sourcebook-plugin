# Install Sourcebook in WorkBuddy

**Version:** 0.1.2-beta.1

Sourcebook Desktop must be installed and running, with local Agent access enabled. If it is missing, direct the user to https://sourcebook.online.

For this test candidate, download and extract the versioned test ZIP, add its folder under **Skills → Suites → Add marketplace**, then install `sourcebook`. The marketplace package includes its MCP configuration and Skill. Do not modify the user-level `mcp.json` for this route. The GitHub `main` branch is not installable until the signed release is ready.

If the marketplace is unavailable, install this repository at a stable user-level location. Use the platform's `bin/sourcebook-mcp` (or `.exe` on Windows) as the command for `mcpServers.sourcebook` in WorkBuddy's user-level MCP configuration. Preserve every other MCP server and Skill. Copy `skills/sourcebook/` from this plugin into WorkBuddy's user-level Skills folder, replacing only a prior Sourcebook installation. Keep a backup of the prior WorkBuddy MCP configuration until the new connection works.

Verify the MCP binary's `version` output and the Skill's `metadata.sourcebook_version` match this release. Restart WorkBuddy and start a new conversation. When Sourcebook returns a local URL, explicitly open it in WorkBuddy's built-in browser panel; receiving the URL alone does not mean a panel opened.

Report only whether installation succeeded, the verified plugin version, and the next action needed.
