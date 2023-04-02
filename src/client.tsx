"use client";

import "client-only";
import { useState } from "react";

export interface ClientComponentProps {
	content: string;
}

export default function ClientComponent({ content }: ClientComponentProps) {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>Client Component</h2>
			<p>Content: {content}</p>
			<button
				onClick={() => {
					setCount((old) => old + 1);
				}}
			>
				Clicked {count} {count === 1 ? "time" : "times"}
			</button>
		</div>
	);
}
