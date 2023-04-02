import ClientComponent from "./client";

export default async function ServerComponent() {
	return (
		<div>
			<h2>Client Component in Server</h2>
			<ClientComponent content="Content passed to client component from server" />
		</div>
	);
}
