import { UploadDropzone } from '@/lib/uploadthing'
import React from 'react'

function UploadImg() {
	return (
		<UploadDropzone
			className='h-[210px] w-full cursor-pointer'
			config={{ appendOnPaste: true, mode: 'auto' }}
			appearance={{
				container: {
					border: '1px dotted blue',
					borderRadius: '1rem',
					padding: '1rem',
				},
				button: {
					backgroundColor: 'blue',
					color: 'white',
					padding: '12px 24px',
					borderRadius: '0.5rem',
					fontWeight: 'bold',
					position: 'relative',
					overflow: 'hidden', // nuqtani yashirish uchun
				},
				uploadIcon: {
					color: 'blue',
					fontSize: '50px',
					width: '50px',
					height: '50px',
				},
			}}
			endpoint='imageUploader'
			onClientUploadComplete={res => {
				console.log('Uploaded:', res)
			}}
			onUploadError={error => {
				console.error('Upload error:', error)
				alert('❌ Upload failed')
			}}
		/>
	)
}

export default UploadImg
