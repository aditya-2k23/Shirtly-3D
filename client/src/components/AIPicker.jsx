// import CustomButton from "./CustomButton";

const AIPicker = () =>
  //   {
  //   prompt,
  //   setPrompt,
  //   generatingImg,
  //   handleSubmit
  // }
  {
    return (
      <div className="aipicker-container cursor-not-allowed justify-center">
        <h5 className="text-bold text-center">Pardon the inconvenience</h5>
        <p className="text-center text-neutral-600">
          This feature is under development. <br /> Please check back later...
        </p>
        {/* <textarea
        placeholder="Ask AI for texture or a logo..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      /> */}
        {/* <div className="flex flex-wrap gap-3">
          {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
        </div> */}
      </div>
    );
  };

export default AIPicker;
