export interface SharedComponentProps {
	content: string;
}

export default function SharedComponent({ content }: SharedComponentProps) {
	return (
		<div>
			<h2>Shared Component</h2>
			<p>Content: {content}</p>
		</div>
	);
}
