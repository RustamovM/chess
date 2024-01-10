import master from "../../../assets/Magnus.jpg";
import "./about.css";
function About() {
  const Mockdata = [
    {
      img: master,
      name: "Jibueze Antony",
      job: "Chess tutor",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt, provident a aliquid maiores dolore. Modi facere ex officia suscipit!",
    },
    {
      img: master,
      name: "Jibueze Antony",
      job: "Chess tutor",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt, provident a aliquid maiores dolore. Modi facere ex officia suscipit!",
    },
    {
      img: master,
      name: "Jibueze Antony",
      job: "Chess tutor",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sunt, provident a aliquid maiores dolore. Modi facere ex officia suscipit!",
    },
  ];
  return (
    <section className="" id="about">
      <div className="container mx-auto flex justify-between">
        <div className="w-[500px] flex flex-col ms-[750px] mt-10">
          <h3 className="text-start text-2xl font-medium mb-10">
            Meet the Team
          </h3>
          {Mockdata?.map((el, index) => (
            <div key={index} className="flex items-start gap-5 mb-10">
              <img
                src={el.img}
                width={150}
                className="rounded-2xl border-2 drop-shadow-2xl"
                alt=""
              />
              <div className="flex flex-col justify-center gap-3">
                <h4 className="font-semibold">{el.name}</h4>
                <p className="text-xs font-medium ">{el.job}</p>
                <p className="">{el.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;
