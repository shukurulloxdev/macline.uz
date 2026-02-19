import { Button } from '@/components/ui/button'
import InputInformation from './_components/input-information'

function Page() {
	return (
		<div>
			<div className='space-y-8'>
				<div className='flex items-center justify-between'>
					<div>
						<h1 className='text-4xl font-bold tracking-tight text-white'>
							Yangi Texnika kiritish
						</h1>
						<p className='mt-2 text-sm text-slate-400'>
							Quydagi bo&apos;sh joylarni to&apos;ldirib saytga yangi texnika
							qo&apos;shing
						</p>
					</div>
					<div className='flex items-center gap-3'>
						<Button className='h-11' variant={'outline'}>
							Qoralama saqlash
						</Button>
						<Button className='h-11 bg-blue-600 hover:bg-blue-700'>
							Saytga yuklash
						</Button>
					</div>
				</div>
				<InputInformation />
			</div>
		</div>
	)
}

export default Page
