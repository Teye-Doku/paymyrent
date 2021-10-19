import MouseScrollIcon from "../UI/MouseScrollIcon";
import ButtonGroup from "./ButtonGroup";

const HomepageHero = () => {
  return (
    <div
      style={{ height: "75%" }}
      className="container d-flex flex-column align-items-center justify-content-center text-light"
    >
      <div className="mb-3">
        <h1 className="display-3 fw-bold text-center">
          <span className="text-uppercase">Welcome</span>{" "}
          <span className="text-uppercase">To</span>
          <span> </span>
          <span style={{ color: "#67bc45" }}>CRiKSTUDIOS</span>
        </h1>
        <p className="lead text-center text-uppercase fst-italic crik_services__text">
          Portrait | Lifestyle | Weddings | Studio Rentals
        </p>
      </div>

      <ButtonGroup />

      <MouseScrollIcon />
    </div>
  );
};

export default HomepageHero;
