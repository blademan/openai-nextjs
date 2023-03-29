import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const TokenPopUp = () => {
	return <div>TokenPopUp</div>
}
export default TokenPopUp
export const getServerSideProps = withPageAuthRequired(() => {
	return {
		props: {},
	}
})
