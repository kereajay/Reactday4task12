let Card = (props) => {
    let { metaData } = props;
    console.log(metaData);
    return (
        <>
            <div className="flex flex-row flex-wrap">
                <div className="h-[300px] w-[200px] bg-slate-200  ">
                    <div
                        className="h-[200px] w-[200px]  p-10"
                        style={{ backgroundColor: metaData.colorcode }}
                    ></div>
                    <br />
                    <h1 className="font-bold pl-2">{metaData.colorcode}</h1>
                    <p className="pl-2">{metaData.colorname.toUpperCase()}</p>
                </div>
                <br />
            </div>
            <br />
        </>
    );
};
export default Card;
