import { MyNavbar } from "./component/Navbar.jsx"
import MyCard from "./component/Card.jsx"

export const Home = () => {

    return (
        <>
            {/* <h1>Home</h1>\ */}
            <MyNavbar />
            <div>
                <MyCard />
            </div>
        </>
    )
}