import { Pagination } from "antd";
import React from "react";
import ContentLoader from "react-content-loader";
import { Cards } from "../../components/Cards";
import { Info } from "../../components/Info";


export const AllPosts = ({ currentUser, cards, handlePostLike, setLead, lead, setPage, page}) => {
  return (
    <>
      <div className="content__cards">

        <Info 
        setLead={setLead}
        lead={lead}
        setPage={setPage}
        page={page}
        />
        <Cards goods={cards} onPostLike={handlePostLike} currentUser={currentUser}/>
      </div>
    </>
  );
};
