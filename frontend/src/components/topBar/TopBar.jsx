import UserButton from '../userButton/UserButton';
import './topBar.css';
import CustomImage from "../image/custom_image";

const TopBar = () => {
  return (
    <main className='topBar'>
      {/* SEARCH */}
      <section className='search'>
        <CustomImage path="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </section>

      {/* USER */}
      <UserButton />
    </main>
  )
}

export default TopBar