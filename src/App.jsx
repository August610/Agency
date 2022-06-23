import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import jsonData from "./data.json";
import { Route, Routes } from "react-router-dom";
import { AllPosts } from "./pages/AllPostsPage/AllPostsPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { CreatePost } from "./pages/CreatePost/CreatePost";

export const App = () => {
  const [dataPhone, setDataPhone] = useState(jsonData);
  const [cards, setCards] = useState([]);
  const [lead, setLead] = useState(true);

  const [page, setPage] = useState(1);
  const contentPerPage = 9;
  const firstIndex = lastIndex - contentPerPage;
  const [lastIndex, setLastIndex] = useState(page * contentPerPage);

  function records(from, to) {
    return dataPhone
      .slice(from, to)
  }

  useEffect(() => {
    if (lead) {
      setCards(dataPhone);
      setCards(records(firstIndex, lastIndex));
      setLastIndex((prevState) => prevState + 9);
      setLead(false)
    }
  }, [dataPhone, lead]);



  return (
    <>
      <Header>
      </Header>
      <main className="content container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AllPosts
                  cards={cards}
                  setLead={setLead}
                  lead={lead}
                  setPage={setPage}
                  page={page}
                />
                {/* <Pagination current={page} onChange={setPagination} total={pageQty} onShowSizeChange={onShowSizeChange} showSizeChanger /> */}
              </>
            }
          />
          <Route
            path="/posts/:postID"
            element={
              <PagePost
                cards={cards}
              />
            }
          />
          <Route
            path="/createPost"
            element={
              <CreatePost />
            }
          />
          <Route path="*" element={<h1>Страница не найдена</h1>} />
        </Routes>
      </main>
    </>
  );
};
