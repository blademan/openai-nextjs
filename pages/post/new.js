import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { AppLayout } from '../../components/AppLayout'

const NewPost = props => {
	return (
		<div className='h-full overflow-hidden'>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta deleniti dolorum optio sequi eveniet, beatae quasi
			quos quaerat quam ipsam commodi recusandae nesciunt, libero at cupiditate, ipsa ipsum amet? Labore quisquam,
			delectus animi nulla mollitia ea aliquam accusantium culpa quaerat debitis! Voluptatibus facilis nulla non sunt
			repellendus, iusto inventore minima! lorem1000
		</div>
	)
}
export default NewPost

NewPost.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
	return {
		props: {},
	}
})
