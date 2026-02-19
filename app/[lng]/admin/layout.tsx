import { ChildProps } from '@/types'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildProps) {
	return (
		<div className='h-screen overflow-hidden'>
			<div className='grid h-full grid-cols-[300px_1fr]'>
				<Sidebar />

				<main className='relative overflow-y-auto bg-gradient-to-b from-[#091334] via-[#0A1F44] to-[#091334]'>
					<div className='pointer-events-none absolute inset-0  bg-blue-600/40 blur-[400px]' />
					<div className='relative z-10 min-h-full p-8'>{children}</div>
				</main>
			</div>
		</div>
	)
}

export default Layout
