import "./leftBar.css";
import CustomImage from "../image/custom_image";
const LeftBar = () => {
  return (
    <main className="leftBar">
      <section className="menuIcons">
        <a href="/" className="menuIcon">
          <CustomImage path="/general/logo.png" alt="" className="logo"/>
        </a>
        <a href="/" className="menuIcon">
          <CustomImage path="/general/home.svg" alt="" className="menuIcon" />
        </a>
        <a href="/create" className="menuIcon">
          <CustomImage path="/general/create.svg" alt="" className="menuIcon" />
        </a>
        <a href="/" className="menuIcon">
          <CustomImage path="/general/updates.svg" alt="" className="menuIcon" />
        </a>
        <a href="/" className="menuIcon">
          <CustomImage path="/general/messages.svg" alt="" className="menuIcon" />
        </a>
      </section>
      <a href="/" className="menuIcon">
        <CustomImage path="/general/settings.svg" alt="" className="menuIcon" />
      </a>
    </main>
  );
};

export default LeftBar;
