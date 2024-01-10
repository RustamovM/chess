import person from "../../../assets/spring.png";
import spring from "../../../assets/spring.png";
import free from "../../../assets/free.png";
import "./tutor.css";
function Tutor() {
  return (
    <section className="" id="tutor">
      <div className="container mx-auto flex items-start">
        <div className="w-[600px] mt-10">
          <h3 className="text-2xl font-semibold pb-5">What We Do</h3>
          <div className="flex items-center gap-5 mb-5">
            <img src={person} width={50} alt="" />
            <div className="">
              <h4 className="text-xl font-semibold pb-3">Personal</h4>
              <p className="w-[500px] text-[#555]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                neque quaerat doloribus nemo dolor nobis adipisci illum quo
                saepe ipsam nesciunt amet excepturi tempore expedita odit! Quos
                commodi nesciunt rem?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 mb-5">
            <img src={free} width={50} alt="" />
            <div className="">
              <h4 className="text-xl font-semibold pb-3">Personal</h4>
              <p className="w-[500px] text-[#555]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                neque quaerat doloribus nemo dolor nobis adipisci illum quo
                saepe ipsam nesciunt amet excepturi tempore expedita odit! Quos
                commodi nesciunt rem?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 mb-5">
            <img src={spring} width={50} alt="" />
            <div className="">
              <h4 className="text-xl font-semibold pb-3">Personal</h4>
              <p className="w-[500px] text-[#555]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                neque quaerat doloribus nemo dolor nobis adipisci illum quo
                saepe ipsam nesciunt amet excepturi tempore expedita odit! Quos
                commodi nesciunt rem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Tutor;
