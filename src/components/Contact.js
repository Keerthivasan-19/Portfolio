import resumeImg from "../assests/resume.jpg";

export default function Contact() {
  const config = {
    email: "keerthivasandec1914@gmail.com",
    phone: "+91 8825744574",
  };

  return (
    <section id="contact" className="flex flex-col px-5 py-32">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="py-2 ">Want to discuss more in detail?</p>
        <div className="border-violet-700 border-2 p-10 mt-10">
          <p className="py-2">
            <span className="font-bold">Email : </span> {config.email}
          </p>
          <p className="py-2">
            <span className="font-bold">Phone : </span> {config.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
