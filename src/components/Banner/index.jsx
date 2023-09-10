import "../../assets/Styles/sass/components/_banner.scss";
export default function Banner({ title }) {
  return (
    <div
      className="big_banner"
    >
      <h1
        className="big_banner_title"
      >
        {title}
      </h1>
    </div>
  );
}
