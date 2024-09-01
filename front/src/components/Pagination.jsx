import React, { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function PageA({ currentPage, setCurrentPage, totalPages }) {
  return (
    <>
      <style type="text/css">
        {`
         .pageItem .pageLink {background-color: gray !important}
         .pageItem:hover .pageLink { background-color: #fdb98f !important}
         .activePage .pageLink {background-color: #ff914d !important}
        `}
      </style>
      <ResponsivePagination
        pageItemClassName="pageItem"
        pageLinkClassName="page-link text-white border-0 pageLink"
        activeItemClassName="active activePage"
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default PageA;
