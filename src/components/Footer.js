const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer flex flex-wrap justify-center align-center  w-auto text-center bg-yellow-50 p-[20px] border-r-5 shadow-[6px]">
      Created By
      <i className="fa-solid fa-heart font-semibold  px-1">🚀</i>
      <a
        href="https://www.linkedin.com/in/siddhant-v-41b763222/"
        target="_blank"
        rel="noreferrer"
        title="Siddhant'sLinkedin Profile"
        className="text-blue-800 px-2"
      >
        Siddhant
      </a>

      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong className="pl-5 pr-5">
          Food <span className="text-red-800">Company</span>
        </strong>
    </div>
  );
};

export default Footer;