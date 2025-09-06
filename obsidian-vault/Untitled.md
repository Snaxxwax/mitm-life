{
"display": "/mcp ",
"pastedContents": {}
}
],
"mcpContextUris": [],
"mcpServers": {
"supabase": {
"type": "stdio",
"command": "npx",
"args": [
"-y",
"@supabase/mcp-server-supabase@latest"
],
"env": {
"SUPABASE_ACCESS_TOKEN": "sbp_v0_a1f23c6648c19b7a99682720eb5afcfe3b44023d"
}

},
"github": {
"type": "stdio",
"command": "npx",
"args": [
"-y",
"@modelcontextprotocol/server-github"
],
"env": {
"GITHUB_PERSONAL_ACCESS_TOKEN": "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"
}
},
"gl-inet-router": {
"type": "stdio",
"command": "node",
"args": [
"/home/lunix/Development/projects/mitm.life/gl-inet-mcp/dist/index.js"
],
"env": {
"GLINET_HOST": "100.71.123.48",
"GLINET_USERNAME": "root",
"GLINET_PASSWORD": "0^9#baJ8WL8Z3O"
}
}
},
"s1mAccessCache": {
"a9b1a5cc-2d27-40a0-92ed-b48262ed971c": {
"hasAccess": false,
"timestamp": 1756578456584
}
},
"hasOpusPlanDefault": false
}

},
"mcpServers": {
"hf-mcp-server": {
"type": "http",
"url": "https://huggingface.co/mcp",
"headers": {
"Authorization": "Bearer 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"
}
},
"tailscale": {
"type": "stdio",
"command": "npx",
"args": [
"--package=@hexsleeves/tailscale-mcp-server",
"tailscale-mcp-server"
],
"env": {
"TAILSCALE_API_KEY": "tskey-api-kFENpVuTL811CNTRL-9QxiaSamcUBpP9BEEb3kUBV3y4nYWxrkK",
"TAILSCALE_TAILNET": "taila85c4e.ts.net"
}
},
"cloudflare": {
"type": "stdio",
"command": "npx",
"args": [
"-y",
"@cloudflare/mcp-server-cloudflare",
"run",
"1e2a83e8c2a7f317e6c50c7275514741"
],
"env": {}

},
"github": {
"type": "stdio",
"command": "npx",
"args": [
"-y",
"@modelcontextprotocol/server-github"
],
"env": {
"GITHUB_PERSONAL_ACCESS_TOKEN": "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"
}
},
"gl-inet-router": {
"type": "stdio",
"command": "node",
"args": [
"/home/lunix/Development/projects/mitm.life/gl-inet-mcp/dist/index.js"
],
"env": {
"GLINET_HOST": "100.71.123.48",
"GLINET_USERNAME": "root",
"GLINET_PASSWORD": "0^9#baJ8WL8Z3O"
}
}
},
"s1mAccessCache": {
"a9b1a5cc-2d27-40a0-92ed-b48262ed971c": {
"hasAccess": false,
"timestamp": 1756578456584
}
},
"hasOpusPlanDefault": false
}
