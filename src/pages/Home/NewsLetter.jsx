const NewsLetter = () => {
  return (
    <div>
      <div className="hero h-[60vh] bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/nkvp1Dj/pool.jpg)'}}>
      <div className="hero-overlay bg-opacity-80"></div>
        <div className="">
          <div className="text-center">
          <p className=" pb-3 text-slate-300 text-2xl">
          NEWSLETTER
            </p>
            <h1 className="text-5xl pb-8 text-slate-400 font-bold">Stay up to date <br /> with Our Newsletter</h1>
            
            <div className="join">
  <input className="input input-bordered  join-item" placeholder="Email"/>
  <button className="btn bg-[#9BA8F5]  join-item ">Subscribe</button>
</div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
