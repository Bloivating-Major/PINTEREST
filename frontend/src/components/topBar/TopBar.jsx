import UserButton from '../userButton/UserButton';
import './topBar.css';

const TopBar = () => {
  return (
    <main className='topBar'>
      {/* SEARCH */}
      <section className='search'>
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </section>

      {/* USER */}
      <UserButton />
    </main>
  )
}

export default TopBar