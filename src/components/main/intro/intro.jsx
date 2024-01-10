import intro from "../../../assets/chess.jpeg";
function Intro() {
  return (
    <section>
      <div className="container mx-auto flex items-start">
        <div className="w-[750px]">
          <h1 className="text-4xl font-bold w-96 pb-10">
            The firts free personal chess tutorship.
          </h1>
          <p className="text-lg w-[550px] text-[#777] pb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            rerum repudiandae delectus inventore eos sunt minus voluptate
            officia, cumque eveniet hic vero animi accusamus temporibus veniam.
            Natus vel rem quia deleniti minus, sint autem dolorum incidunt amet
            exercitationem accusamus, officia ea veniam? Tempora veniam quis
            molestiae iusto totam ipsam est?
          </p>
          <div className="flex items-center gap-10">
            <button className="btn py-3 px-10 rounded-lg bg-[#666] font-bold text-white hover:scale-95 duration-500	transition-all">
              Sign up
            </button>
            <p className="text-lg font-medium">Learn More</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
