import "./leftBar.css";

const LeftBar = () => {
  return (
    <main className="leftBar">
      <section className="menuIcons">
        <a href="/" className="menuIcon">
          <img src="/general/logo.png" alt="" className="logo"/>
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/home.svg" alt="" />
        </a>
        <a href="/create" className="menuIcon">
          <img src="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/messages.svg" alt="" />
        </a>
      </section>
      <a href="/" className="menuIcon">
        <img src="/general/settings.svg" alt="" />
      </a>
    </main>
  );
};

export default LeftBar;
