import { useSelector } from "react-redux"
import Layout from "./Layout"

const Home = () => {
    const state = useSelector((store) => store)
    return <Layout>
        Home ---{JSON.stringify(state)}
    </Layout>
}
export default Home