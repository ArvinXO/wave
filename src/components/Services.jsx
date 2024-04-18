import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, mdiorbit } from "../assets";
import { brainwaveServices } from "../constants";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section id="wallet">
      <div className="container ">
        <Heading
          title="Next-Gen Wallet"
          text="The most secure and user-friendly wallet for all your digital assets."
        />

        {/* Container over the security section */}
        <div className="relative bg-black bg-opacity-70 backdrop-filter backdrop-blur-md rounded-3xl overflow-hidden">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Security is our top priority"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[40rem] ml-auto bg-black bg-opacity-90 backdrop-filter backdrop-blur-sm p-4 rounded-md">
              <h4 className="h4 mb-8">Security is our top priority</h4>

              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start px-1 py-4 border-t border-n-6"
                  >
                    <img
                      width={24}
                      height={24}
                      src={mdiorbit}
                      alt="Checkmark"
                    />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative border border-n-1/10 rounded-3xl overflow-hidden">
            <img
              src={service2}
              alt="Unrivaled Security"
              className="w-full h-auto object-cover"
            />
            <div className="p-8 lg:p-12 bg-gradient-to-b from-n-8/0 to-n-8/90 text-white">
              <h4 className="h4 mb-4">Unrivaled Security</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                At Next-Gen Wallet, security is our top priority. We implement
                cutting-edge encryption protocols and advanced security measures
                to ensure that your digital assets remain safe from any
                potential threats or unauthorized access.
              </p>
            </div>
          </div>

          <div className="relative border border-n-1/10 rounded-3xl overflow-hidden">
            <img
              src={service3}
              alt="Video generation"
              className="w-full h-auto object-cover"
            />
            <div className="p-8 lg:p-12 bg-gradient-to-b from-n-8/0 to-n-8/90 text-white">
              <h4 className="h4 mb-4">Global Accessibility</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Access your digital assets anytime, anywhere with Next-Gen
                Wallet&apos;s global accessibility. Our platform is designed to
                be accessible from any device with an internet connection,
                giving you the flexibility to manage your portfolio on the go.
                Whether you&apos;re at home or on the move, your assets are
                always within reach.
              </p>
            </div>
          </div>
        </div>

        <Gradient />
      </div>
    </Section>
  );
};

export default Services;
