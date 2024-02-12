export default function ContainerFluid() {
    return (
        <div className="flex gap-[10rem] justify-center">
            <img src="./fluid/fluid-1.png" alt="" />
            <div className="mt-40">
                <h5 className="text-priceGray text-base">SUMMER 2020</h5>
                <h1 className="text-4xl font-bold mt-4">Part of the Neural <br /> Universe</h1>
                <h4 className="mt-4 text-lighterDark text-xl">We know how large objects will act, <br /> but things on a small scale.</h4>
                <div className="mt-4 flex gap-2">
                    <button className="w-[150px] h-[52px] bg-btnGreen font-bold rounded text-white text-sm">BUY NOW</button>
                    <button className="w-[170px] h-[52px] border-2 border-x-btnGreen font-bold rounded text-btnGreen text-sm">READ MORE</button>
                </div>
            </div>
        </div>
    )
}