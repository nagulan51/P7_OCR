import "../../assets/Styles/sass/components/_banner.scss";
interface Tprops {
  title?: string,

}
export default function Banner({ title }: Tprops) {
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
