export interface ForkedComponentProps {
	content: string;
}

export default function ForkedComponent({ content }: ForkedComponentProps) {
	return (
		<div>
			<h2>
				Forked Component (<pre>react-server</pre>)
			</h2>
			<p>Content: {content}</p>
		</div>
	);
}
