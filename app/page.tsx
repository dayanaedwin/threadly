import * as actions from '@/actions';
import { Button } from '@heroui/react';
import { auth } from '@/auth';

export default async function Home() {
	const session = await auth();

	return (
		<div className="">
			<form action={actions.signIn}>
				<Button type='submit'>Sign In</Button>
			</form>
			<form action={actions.signOut}>
				<Button type='submit'>Sign Out</Button>
			</form>
			{session?.user ? <div>Signed In</div> : <div>Signed Out</div>}
		</div>
	);
}
