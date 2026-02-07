import { translation } from '@/i18n/server'

async function Page({ params: { lng } }: { params: { lng: string } }) {
	const { t } = await translation(lng, 'home')

	return (
		<div className='p-10  text-xl text-white'>
			<span className='p-12 font-manrope text-3xl font-bold'>
				{t('navLink1')}{' '}
			</span>
			Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
			necessitatibus placeat cupiditate voluptas excepturi atque quaerat. Eius
			officiis, voluptatum maiores officia debitis dolore, est ipsam aut numquam
			dolor adipisci eum, nesciunt possimus! Adipisci esse facilis facere!
			Repellendus corrupti maiores aperiam, nam voluptatum nisi tenetur earum
			non laudantium ea laborum eius sit explicabo hic totam quas suscipit
			dignissimos enim eveniet perferendis nemo modi consectetur laboriosam
			facere. Voluptatum, iure dolorum. Veniam sit quae sequi non nihil dolor
			nesciunt odit incidunt quia at dolorem natus necessitatibus nobis vel ex
			laboriosam doloremque perferendis fuga, cumque iste maiores ea voluptate?
			Eos omnis unde iure neque? Lorem, ipsum dolor sit amet consectetur
			adipisicing elit. Doloribus necessitatibus placeat cupiditate voluptas
			excepturi atque quaerat. Eius officiis, voluptatum maiores officia debitis
			dolore, est ipsam aut numquam dolor adipisci eum, nesciunt possimus!
			Adipisci esse facilis facere! Repellendus corrupti maiores aperiam, nam
			voluptatum nisi tenetur earum non laudantium ea laborum eius sit explicabo
			hic totam quas suscipit dignissimos enim eveniet perferendis nemo modi
			consectetur laboriosam facere. Voluptatum, iure dolorum. Veniam sit quae
			sequi non nihil dolor nesciunt odit incidunt quia at dolorem natus
			necessitatibus nobis vel ex laboriosam doloremque perferendis fuga, cumque
			iste maiores ea voluptate? Eos omnis unde iure neque? Lorem, ipsum dolor
			sit amet consectetur adipisicing elit. Doloribus necessitatibus placeat
			cupiditate voluptas excepturi atque quaerat. Eius officiis, voluptatum
			maiores officia debitis dolore, est ipsam aut numquam dolor adipisci eum,
			nesciunt possimus! Adipisci esse facilis facere! Repellendus corrupti
			maiores aperiam, nam voluptatum nisi tenetur earum non laudantium ea
			laborum eius sit explicabo hic totam quas suscipit dignissimos enim
			eveniet perferendis nemo modi consectetur laboriosam facere. Voluptatum,
			iure dolorum. Veniam sit quae sequi non nihil dolor nesciunt odit incidunt
			quia at dolorem natus necessitatibus nobis vel ex laboriosam doloremque
			perferendis fuga, cumque iste maiores ea voluptate? Eos omnis unde iure
			neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
			necessitatibus placeat cupiditate voluptas excepturi atque quaerat. Eius
			officiis, voluptatum maiores officia debitis dolore, est ipsam aut numquam
			dolor adipisci eum, nesciunt possimus! Adipisci esse facilis facere!
			Repellendus corrupti maiores aperiam, nam voluptatum nisi tenetur earum
			non laudantium ea laborum eius sit explicabo hic totam quas suscipit
			dignissimos enim eveniet perferendis nemo modi consectetur laboriosam
			facere. Voluptatum, iure dolorum. Veniam sit quae sequi non nihil dolor
			nesciunt odit incidunt quia at dolorem natus necessitatibus nobis vel ex
			laboriosam doloremque perferendis fuga, cumque iste maiores ea voluptate?
			Eos omnis unde iure neque? Lorem, ipsum dolor sit amet consectetur
			adipisicing elit. Doloribus necessitatibus placeat cupiditate voluptas
			excepturi atque quaerat. Eius officiis, voluptatum maiores officia debitis
			dolore, est ipsam aut numquam dolor adipisci eum, nesciunt possimus!
			Adipisci esse facilis facere! Repellendus corrupti maiores aperiam, nam
			voluptatum nisi tenetur earum non laudantium ea laborum eius sit explicabo
			hic totam quas suscipit dignissimos enim eveniet perferendis nemo modi
			consectetur laboriosam facere. Voluptatum, iure dolorum. Veniam sit quae
			sequi non nihil dolor nesciunt odit incidunt quia at dolorem natus
			necessitatibus nobis vel ex laboriosam doloremque perferendis fuga, cumque
			iste maiores ea voluptate? Eos omnis unde iure neque?
		</div>
	)
}

export default Page
