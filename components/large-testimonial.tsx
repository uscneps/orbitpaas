import Image from "next/image";
import team from "@/public/images/team.png";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">

            <p className="text-3xl font-bold text-black-200 md:text-4xl">
              About us
              <br></br>
            </p>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              We are a team of two experienced consultants, collaborating on large-scale projects for major companies across Europe. Our background includes advanced degrees in Computer Science and the development of key applications that serve thousands of users.
              <br></br>
              <em className="italic text-gray-500">ORBIT is our new project !</em>
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Matteo Leonesi</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <span className="text-gray-700">Yuri Paoloni</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
