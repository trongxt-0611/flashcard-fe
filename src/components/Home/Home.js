import videoHomePg from "../../assets/video-homepg.webm";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="row">
          <div className="col-sm align-self-center">
            <div className="homepg-content">
              <div className="title1">Refreshingly different, by design</div>
              <div className="title2">For them</div>
              <div className="title3">
                —the form takers. Make forms that look striking and feel
                effortless to fill out. Edit everything from videos to logos,
                and replace walls of questions with just one at a time.
              </div>
            </div>
          </div>
          <div className="col-sm ">
            <video autoPlay loop muted>
              <source src={videoHomePg} type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
