export default function Home() {
  return (
    <>
      <div className="flex flex-row-2 h-[344px] pt-4 gap-8">
        <div className="px-16 py-10 border-r-2">
          <ul>
            <li>Whomen's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>medicines</li>
            <li>Sport & Outdoor</li>
            <li>Baby's Toy</li>
            <li>Gloceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <img src="/homePageAssets/Frame560.png" />
      </div>

      <div className="flex gap-10 py-5">
        <h1 className="text-4xl px-16">Flash Sales</h1>
        <div>
          <span>Days</span>
          <div className="font-bold text-3xl">03</div>
        </div>
        <div>
          <span>Hour</span>
          <div className="font-bold text-3xl">23</div>
        </div>
        <div>
          <span>Minutes</span>
          <div className="font-bold text-3xl">19</div>
        </div>
        <div>
          <span>Second</span>
          <div className="font-bold text-3xl">56</div>
        </div>
      </div>

      <div className=" flex gap-5 px-14">
        <div className="border shadow grid ">
          <div className=" flex items-center justify-center w-55 h-55 bg-gray-300">
            <img src="\homePageAssets\Frame 611.png" />
          </div>

          <div className="grid px-4 py-2">
            <span>$380</span>
            <span>IPS LCD Gaming Monitor</span>
            <span className="text-xl text-amber-300">
              &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
            </span>
          </div>
        </div>
        <div className="border shadow grid ">
          <div className=" flex items-center justify-center w-60 h-60 bg-gray-300">
            <img src="\homePageAssets\ak-900-01-500x500 1.png" />
          </div>

          <div className="grid px-4 py-2">
            <span>$380</span>
            <span>IPS LCD Gaming Monitor</span>
            <span className="text-xl text-amber-300">
              &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
            </span>
          </div>
        </div>{" "}
        <div className="border shadow grid ">
          <div className=" flex items-center justify-center w-55 h-55 bg-gray-300">
            <img src="/homePageAssets\g27cq4-500x500 1.png" />
          </div>

          <div className="grid px-4 py-2">
            <span>$380</span>
            <span>IPS LCD Gaming Monitor</span>
            <span className="text-xl text-amber-300">
              &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
            </span>
          </div>
        </div>{" "}
        <div className="border shadow grid ">
          <div className=" flex items-center justify-center w-55 h-55 bg-gray-300">
            <img src="\homePageAssets\Frame 614.png" />
          </div>

          <div className="grid px-4 py-2">
            <span>$380</span>
            <span>IPS LCD Gaming Monitor</span>
            <span className="text-xl text-amber-300">
              &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
            </span>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center bg-red-500 ">
        <button>View All Products</button>
      </div> */}
    </>
  );
}
