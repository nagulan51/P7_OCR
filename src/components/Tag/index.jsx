import "../../assets/Styles/sass/components/_tag.scss"

export default function Tag(
  props) {
  const { tag } = props;
  return (
    <div className="tag">
      <h3>{tag}</h3>
    </div>
  );
}
