const Header = () => (
  <header className="text-center py-10">
    <div className="flex w-full justify-between items-end">
      <h1 className="text-5xl font-bold text flex flex-col justify-start items-start gap-4">
        <div className="flex gap-4 text-gray-800">
          Hi, I’m <h2 className="text-indigo-500">Mohammadreza</h2> <br />
        </div>
        <h2 className="text-indigo-500">web developer</h2>
      </h1>
      <img src="/assets/images/avatar.jpg" className="w-36" />
    </div>
    <div className="flex flex-col w-full text-left mt-12 justify-start items-start gap-8">
      <p>
        I’m a full-stack web developer, making great stuff happen since 2012.
        Currently building awesome tools for developers at{" "}
        <span className="text-indigo-500">Prezly.</span>
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
