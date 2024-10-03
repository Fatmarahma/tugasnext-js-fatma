import Image from "next/image";

const Banner = () => {
  return (
    <section className="banner max-h-[93vh] mx-8 my-7 overflow-hidden border border-black rounded-3xl bg-[#f3ecd2]">
      <div className="absolute flex top-7 left-[30px] z-10 h-[80px] w-[240px] bg-[#f3ecd2] border-solid border-b border-r border-transparent border-b-black border-r-black rounded-br-3xl">
        <Image
          src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/66159a54a64020fdd3bc5546_TP-Right.svg"
          alt="corner right"
          className="absolute bottom-[-31px] left-0"
          width={33}
          height={32}
        />
        <Image
          src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/66159a54a64020fdd3bc5546_TP-Right.svg"
          alt="corner left"
          className="absolute top-[-1px] right-[-31px]"
          width={33}
          height={32}
        />
        <div className="flex justify-center items-center relative left-6">
          <Image
            src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/66159d6fa44ed20312d2b1d4_Heart.png"
            alt="love"
            className="h-[22px] w-auto"
            width={500}
            height={500}
          />
          <span className="text-xl text-black font-bold ml-3 pr-10">Brought to you by FlowMCR</span>
        </div>
      </div>
      <div className="hero relative min-h-[93vh] text-black flex flex-col justify-center items-center bottom-0">
        <Image class="relative z-10 mb-40" width={500} height={500} src="/flowfest.png" alt="hero text" />
        <div className="relative z-10 flex bottom-[240px] gap-2">
          <Image
            src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6615aa5e81ac58782a0ad497_James.webp"
            alt="james"
            className="h-[250px] w-auto hover:rotate-[5deg] transition-all duration-300"
            width={200}
            height={250}
          />{" "}
          <Image
            src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6615aad831c7094dc9850f32_Ethan.webp"
            alt="ethan"
            className="h-[250px] w-auto hover:rotate-[5deg] transition-all duration-300"
            width={200}
            height={250}
          />
          <div class="relative bg-[#f3ecd2] rounded-full bottom-[-120px] w-[700px] h-[700px]">
            <div class="relative flex flex-col left-[80px] bottom-[-40px] text-md w-[200px] text-center">
              <p class="font-bold text-[#f96518]">When: 11th July 2024</p>
              <p class="font-bold">Where: Media City Gardens Manchester</p>
            </div>
          </div>
          <Image
            src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6615aad281ac58782a0b3e88_Maria.webp"
            alt="maria"
            className="h-[250px] w-auto hover:rotate-[5deg] transition-all duration-300"
            width={200}
            height={250}
          />{" "}
          <Image
            src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6615aacb70862b87fe6d312a_John.webp"
            alt="john"
            className="h-[250px] w-auto hover:rotate-[5deg] transition-all duration-300"
            width={200}
            height={250}
          />
        </div>

        <Image
          className="absolute max-h-[3000px] max-w-[3000px] object-cover top-[-500px]"
          src="https://cdn.prod.website-files.com/66140c546a493d0f1ca64e85/6615a1eac360fabe748c8e02_Rays.svg"
          alt="background hero"
          width={3000}
          height={3000}
        />
      </div>
    </section>
  );
};

export default Banner;
