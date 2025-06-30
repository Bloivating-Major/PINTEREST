import "./mainLayout.css";
import LeftBar from "../../components/leftBar/LeftBar";
import TopBar from "../../components/topBar/TopBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className='app'>
      <LeftBar />
      <section className='content'>
        <TopBar/>
        <Outlet />
      </section>
    </main>
  )
}

export default MainLayout