const Header = () => (
  <header className="text-center py-10" id="header">
    <div className="flex w-full sm:flex-row flex-col justify-between items-start sm:items-center relative gap-4">
      <h1 className="sm:text-4xl lg:text-6xl text-3xl w-full text-start font-bold text flex flex-col justify-start items-start gap-2">
        <div className="text-gray-800">Hi, I’m Mohammadreza</div>
        <h2 className="text-indigo-500">Frontend developer</h2>
      </h1>
      <img
        src="/assets/images/avatar.jpg"
        className="sm:w-48 lg:w-60 w-full avatar relative border-t-[8px] border-r-[8px] shadow-lg border-indigo-500"
      />
    </div>
    <div className="flex flex-col w-full text-left mt-12 justify-start items-start gap-8">
      <p className="text-xl">
        Hello, my name is Mohammadreza. I am a Frontend developer with a passion
        for creating <span className="text-indigo-500">dynamic </span>
        and <span className="text-indigo-500">responsive </span>
        websites.
      </p>
      <a
        href="#contact"
        className="mt-5 inline-block bg-indigo-500 text-white py-3 px-8 rounded"
      >
        Contact me
      </a>
    </div>
  </header>
);

export default Header;
