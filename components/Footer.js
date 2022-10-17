import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../public/facebook.png";
import Youtube from "../public/youtube.png";
import Google from "../public/google.png";

function Footer() {
  return (
    <div>
      <div className="mt-10 h-32 grig bg-gray-300">
        <div className="grid place-content-center h-full gap-6">
          <div className="flex justify-center pt-4 gap-8 ">
            <div>
              <Link href="https://facebook.com/">
                <a>
                  <Image src={Facebook} width={40} height={40} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://youtube.com/">
                <a>
                  <Image src={Youtube} width={40} height={40} />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://google.com/">
                <a>
                  <Image src={Google} width={40} height={40} />
                </a>
              </Link>
            </div>
          </div>
          <div className="bottom-0">Copyright &copy; by Aphirat Janthong</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
