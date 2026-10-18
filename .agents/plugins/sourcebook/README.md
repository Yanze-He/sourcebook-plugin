# Sourcebook Agent Plugin

This folder is the independently versioned Sourcebook Agent Plugin. Use the
[repository installation guide](https://github.com/Yanze-He/sourcebook-plugin/blob/main/INSTALL.md)
for Codex or WorkBuddy setup. Versioned packages are published from this
repository after platform validation.

Desktop also includes a fallback copy, but never updates an independent
installation. Marketplace installations use this repository's versioned
plugin directory; updates are applied through the target Agent's marketplace.
If Desktop is absent, installation stops and points the user to
https://sourcebook.online.

The helper connects only through Sourcebook Desktop’s protected local bridge; it never opens Sourcebook SQLite databases or asset folders directly. Desktop must remain running and local-agent access must remain enabled when the Agent uses Books.

The bundled `sourcebook` Skill intentionally stays small: it guides project work from a selected Book, creation using Book context, and a user-requested conversation wrap-up. It does not add data permissions beyond the accompanying MCP server.
