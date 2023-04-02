import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: [
			"src/client.tsx",
			"src/server.tsx",
			"src/shared.tsx",
			"src/cins.tsx",
			"src/forked.server.tsx",
			"src/forked.default.tsx",
		],
		format: ["cjs", "esm"],
		target: ["es2020"],
		dts: true,
		plugins: [
			{
				name: "pull-directives-to-the-top",
				renderChunk(unstripped) {
					// Hack to pull directives to the top of the file
					// This isn't smart enough but should work for this case

					const usedDirectives = new Set<string>();

					const stripped = unstripped.replace(
						/\s*['"']use (?:strict|client|server)['"'];?\r?\n?/g,
						(match) => {
							usedDirectives.add(match.match(/(strict|client|server)/)![1]);
							return "";
						},
					);

					const code =
						[...usedDirectives]
							.map((directive) => `"use ${directive}";\n`)
							.join("") + stripped;

					return { code };
				},
			},
		],
	},
]);
