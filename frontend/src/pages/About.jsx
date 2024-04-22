import { Accordion } from "flowbite-react";

const About = () => {
  return (
    <Accordion className="sm:max-w-5xl sm:mx-auto mt-12 shadow-md mx-2 bg-white">
      <h1 className="text-4xl font-bold tex-gray-800 text-center p-3">About the portal</h1>
      <Accordion.Panel>
        <Accordion.Title className="font-bold">Mission and Vision</Accordion.Title>
        <Accordion.Content>
          <p className="font-semibold text-sm text-slate-700">
            Our mission is to revolutionize hospital management through
            innovative technology, streamlining operations to enhance patient
            care. Our vision is to create a seamless healthcare experience for
            both providers and patients, ultimately improving health outcomes
            and satisfaction.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='font-bold'>Patient Care Focus</Accordion.Title>
        <Accordion.Content>
          <p className="font-semibold text-sm text-slate-700">
          Our portal prioritizes patient care by facilitating seamless communication among healthcare providers, enabling timely access to patient information, and empowering patients to participate in their own care journey through secure access to their medical records and appointment scheduling.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='font-bold'>Benefits for Healthcare Institutions</Accordion.Title>
        <Accordion.Content>
          <p className="font-semibold text-sm text-slate-700">
          Healthcare institutions stand to benefit from our hospital management portal by streamlining administrative processes, improving resource allocation, enhancing patient care coordination, and ultimately, achieving better clinical outcomes and patient satisfaction levels.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='font-bold'>Frontend Tech Stack</Accordion.Title>
        <Accordion.Content>
          <p className="font-semibold text-sm text-slate-700">
            React.js, TailwindCSS, Redux, Flowbite-react
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='font-bold'>Backend Tech Stack</Accordion.Title>
        <Accordion.Content>
          <p className="font-semibold text-sm text-slate-700">
            Node.js , Express, MongoDB, socket.io
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='font-bold'>Additional Tools Tech stack</Accordion.Title>
        <Accordion.Content>
          <p className="font-semibold text-sm text-slate-700">
            Vscode, Git and version control
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default About;
