import React from "react";
import CommonHead from "./common/CommonHead";
import NewsCommon from "./common/NewsCommon";

const News = () => {
  return (
    <>
      <section id="News" className="pb-[141px] pt-[102px] bg-[#F3F6FF]">
        <div className="container">
          <div className="text-center">
            <CommonHead comH2={"News & Insights"} />
          </div>
          <div id="News-row" className="flex justify-center gap-[16px]">
            <NewsCommon
              newsDis={
                "Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. "
              }
              newsHead={"Mobile app generates data for the energy management"}
              newsP={"Strategy"}
              newsT={"12 hours ago"}
            />
            <NewsCommon
              newsDis={
                "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat."
              }
              newsHead={"How the millennial lifestyle changes as service prices rise"}
              newsP={"Tech"}
              newsT={"1 day ago"}
            />
            <NewsCommon
              newsDis={
                " Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas. "
              }
              newsHead={"What the software stock slump means for the market"}
              newsP={"Software"}
              newsT={"May 24, 2021"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
