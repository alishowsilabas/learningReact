import H1, {H3, H4} from "./H1";
import H5 from "./H5";

function Hero(props) {
  console.log(props);

  return (
    <div style={props.style}>
      <H1 name={props.name} />
      <h2 style={{color: "yellowgreen"}}>{props.children}</h2> {/* filho do props de H1*/}
      <H3 />
      <H4 />
      <H5 />
    </div>
  );
}

export default Hero;
