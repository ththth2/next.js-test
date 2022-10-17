import React from "react";
import Image from "next/image";
import gear from "../public/gear.png";
import Phone from "../public/phone.png";
import Group from "../public/group.png";
import Laptop from "../public/laptop.png";
import Code from "../public/code.png";
import Star from "../public/star.png";

function Services() {
  return (
    <div className="mt-28" id="Service">
      <div className="grid place-items-center pb-20">
        <div className="">Our services</div>
        <div className="text-3xl">
          Our <b>Awesome</b> Services
        </div>
        <div className="w-14 border-orange-500 border-t-4 mt-20 absolute "></div>
      </div>
      <div className="grid grid-rows-6 sm:grid-rows-3 grid-flow-col place-items-center gap-8 max-w-5xl mx-auto">
        <div className="grid place-items-center px-2">
          <div>
            <Image src={gear} width={50} height={50} />
          </div>
          <div className="font-bold text-2xl">Highly Customizable</div>
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            doloribus minima sunt numquam? Eligendi, tenetur vel! Deserunt
            mollitia aspernatur, sed aut expedita eveniet amet sint explicabo?
            Odio porro cum neque explicabo rerum illo ratione distinctio!
            Repudiandae dolorum cumque aut consectetur!
          </div>
        </div>
        <div className="grid place-items-center px-2">
          <div>
            <Image src={Group} width={50} height={50} />
          </div>
          <div className="font-bold text-2xl">User Experience</div>
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            maiores accusamus expedita aliquam nesciunt tenetur labore et,
            delectus commodi sequi ea perferendis excepturi, error aperiam.
            Blanditiis optio atque laudantium corrupti error, voluptas tempora
            illo delectus assumenda nulla eveniet facere veniam!
          </div>
        </div>
        <div className="grid place-items-center px-2">
          <div>
            <Image src={Code} width={50} height={50} />
          </div>
          <div className="font-bold text-2xl">Unique and Clean</div>
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            suscipit ducimus adipisci, optio eius perferendis nesciunt amet,
            doloribus explicabo, voluptatibus reprehenderit quas! Repudiandae
            quia error temporibus praesentium aut dolorem, voluptatum suscipit
            illum? Voluptatem laboriosam ipsum blanditiis tempora et
            perspiciatis fugit.
          </div>
        </div>
        <div className="grid place-items-center px-2">
          <div>
            <Image src={Phone} width={50} height={50} />
          </div>
          <div className="font-bold text-2xl">Fully Responsive Layout</div>
          <div className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sunt
            ducimus, consequuntur, rem nesciunt reiciendis laboriosam iusto eius
            odio illo harum praesentium, molestiae est! Molestiae id rem,
            ducimus mollitia dolores eum quis harum expedita, soluta praesentium
            totam ullam. Blanditiis, quo.
          </div>
        </div>
        <div className="grid place-items-center px-2">
          <div>
            <Image src={Laptop} width={50} height={50} />
          </div>
          <div className="font-bold text-2xl">Creative Web Design</div>
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            aspernatur officia quia tempora aliquid iure numquam doloribus error
            provident ducimus similique beatae fugiat atque excepturi,
            voluptatem nam? Voluptas cupiditate aliquam nisi tenetur laudantium
            est, harum nam libero accusamus eum? Doloribus?
          </div>
        </div>
        <div className="grid place-items-center px-2">
          <div>
            <Image src={Star} width={50} height={50} />
          </div>
          <div className="font-bold text-2xl">Creative ideas</div>
          <div className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            in error minus odio aliquam, delectus iusto illum aliquid alias
            quos, corrupti eos! Corrupti, temporibus expedita sunt fuga,
            laudantium suscipit voluptatibus cum est atque beatae quas vero
            harum distinctio quo exercitationem!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
