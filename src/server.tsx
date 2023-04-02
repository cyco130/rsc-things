import "server-only";
import { readFile } from "node:fs/promises";

export interface ServerComponentProps {
	filename: string;
}

export default async function ServerComponent({
	filename,
}: ServerComponentProps) {
	const contents = await readFile(filename, "utf8");

	return (
		<div>
			<h2>Server Component</h2>
			<p>
				Contents of <code>{filename}</code>:
			</p>
			<pre>{contents}</pre>
		</div>
	);
}
