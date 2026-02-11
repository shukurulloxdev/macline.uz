import { UploadDropzone } from '@/lib/uploadthing'
import React from 'react'

function UploadImg() {
	return (
		<div>
			<UploadDropzone
				className='h-[210px] w-full cursor-pointer'
				config={{ appendOnPaste: true, mode: 'auto' }}
				appearance={{
					container: {
						border: '1px dotted blue',
					},
					uploadIcon: {
						color: 'blue',
						fontSize: '50px', // 👈 ikonkani kattalashtirish
						width: '50px', // optional
						height: '50px', // optional
					},
				}}
				endpoint='imageUploader'
				onClientUploadComplete={res => {
					console.log(res)
				}}
				onUploadError={error => {
					console.error('Upload error:', error)
					alert('❌ Upload failed')
				}}
			/>
		</div>
	)
}

export default UploadImg
// 1