
import shop from "../../assets/images/common/shop.avif";

const Third = () => {
    return (
      <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
        <div>
          <img src={shop} alt="" className="h-3/4 w-full" />
        </div>
        <div className="mt-8 pl-3 justify-center items-center">
          <h1 className="text-2xl font-semibold">
            We are here to make great design accessible and delightfull for
            everyone
          </h1>
          <p className="text-sm mt-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire,
          </p>
        </div>
      </div>
    );
};

export default Third;