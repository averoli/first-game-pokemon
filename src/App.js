import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import layoutBg1 from './assets/bg1.jpg';
import layoutBg3 from './assets/bg3.jpg';



const App = () => {

    return(
        <>
            <Header
            title = "This is title"
            descr = "This is Description!"
            />
            <Layout
                id = "layout1"
                title = "This is 1 Layout"
                descr = "This is Description of Layout 1!"
                urlBg = {layoutBg1}
            />
            <Layout
                id = "layout2"
                title = "This is 2 Layout"
                descr = "This is Description of Layout 2!"
                colorBg = "lightpink"
            />
            <Layout
                id = "layout3"
                title = "This is 3 Layout"
                descr = "This is Description of Layout 3!"
                urlBg = {layoutBg3}
            />
            <Footer />
        </>
    )
}

export default App;

