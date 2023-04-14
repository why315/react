import { useSelector } from "react-redux"
import Layout from "./Layout"


const Shop = () => {
    const state = useSelector((store) => store)
    return <Layout >
        shop--
        {JSON.stringify(state)}
    </Layout>
}
export default Shop