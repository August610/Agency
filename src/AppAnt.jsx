import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import jsonData from "./data.json";
import api from "./utils/Api";
import { CurrentUserContext } from "./context/currentUserContext";
import { DeleteContext } from "./context/deletePostContext";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { AllPosts } from "./pages/AllPostsPage/AllPostsPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { AppContext } from "./context/appContext";
import { CreatePost } from "./pages/CreatePost/CreatePost";
import { UpdatePostContext } from "./context/updatePostContext";
import { AddCommentContext } from "./context/commentContext";
import { Pagination } from 'antd';
import { openNotification } from './components/Notification/index';
import { Button } from "./components/Button/Button";
import { Menu } from "./components/Menu/Menu";


export const AppAnt = () => {
  const [dataPhone, setDataPhone] = useState(jsonData);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(location.search.split("=")[1] || 1);
  const [pageLimit, setPageLimit] = useState(10);
  const [pageQty, setPageQty] = useState(0);


  useEffect(() => {
      setCards(dataPhone);
  }, [cards, dataPhone]);


  const notifyResult = (result, text) => {
    console.log(result.err);
    return !result.err
      ? openNotification("success", text || result.message)
      : openNotification("error", text || result.message)
  }

  function handleUpdateUser(userUpdate) {
    api.setUserInfo(userUpdate).then((newUserData) => { setCurrentUser(newUserData) }
    )
  }

  function handleDeletePost({ _id }) {
    api.deletePost(_id)
      .then((responce) => {
        notifyResult(responce, 'Вы успешно удалили пост!');
        const newCards = cards.filter((card) => card._id !== _id);
        setCards(newCards);
      });
  }


  function handlePostLike(_id, isLiked) {
    api.changeLikeStatus(_id, isLiked).then((newCard) => {
      const newCardsState = cards.map((c) => {
        return c._id === newCard._id ? newCard : c;
      });
      setCards(newCardsState);
    });
  }

  function handleCreateNewPost(data) {
    api.createNewPost(data)
      .then((newCard) => {
        notifyResult(newCard, 'Вы успешно создали пост!');
        cards.push(newCard);
        setCards(cards);
      });
  };

  function handleUpdatePost(data, id) {
    api.updatePost(data, id)
      .then((newCard) => {
        notifyResult(newCard, 'Вы успешно обновили пост!');
        const newCards = cards.map((c) => {
          return c._id === newCard._id ? newCard : c
        });
        setCards(newCards);
      });
  }

  function handleAddComment(data, id) {
    api.addComments(data, id)
      .then((newCard) => {
        notifyResult(newCard, 'Комментарий добавлен!');
        const newCards = cards.map((c) => {
          return c._id === newCard._id ? newCard : c
        });
        setCards(newCards);
      });
  }

  function handleDeleteComment(postId, commentId) {
    api.deleteComments(postId, commentId)
      .then((newCard) => {
        notifyResult(newCard, 'Комментарий удален!');
        const newCards = cards.map((c) => {
          return c._id === newCard._id ? newCard : c
        });
        setCards(newCards);
      });
  }

  function setPagination(number) {
    setPage(number);
  }

  function onShowSizeChange(current, pageSize) {
    // console.log(current, pageSize);
    setPageLimit(pageSize)
  }



  return (
    <AddCommentContext.Provider value={handleAddComment}>
      <UpdatePostContext.Provider value={handleUpdatePost}>
        <AppContext.Provider value={{ handlePostLike, isLoading, pageLimit }}>
          <DeleteContext.Provider value={{ handleDeletePost, handleDeleteComment }}>
            <CurrentUserContext.Provider value={currentUser}>
              <Header user={currentUser} onUpdateUser={handleUpdateUser}>    
                {/* <Menu/>                      */}
              </Header>
              <main className="content container">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <AllPosts
                          currentUser={currentUser}
                          cards={cards}
                          loading={isLoading}
                        />
                        {/* <Pagination current={page} onChange={setPagination} total={pageQty} onShowSizeChange={onShowSizeChange} showSizeChanger /> */}
                      </>
                    }
                  />
                  <Route
                    path="/posts/:postID"
                    element={
                      <PagePost
                        currentUser={currentUser}
                        onPostLike={handlePostLike}
                        cards={cards}
                      />
                    }
                  />
                  <Route
                    path="/createPost"
                    element={
                      <CreatePost handleCreateNewPost={handleCreateNewPost} />
                    }
                  />
                  <Route path="*" element={<h1>Страница не найдена</h1>} />
                </Routes>
              </main>
            </CurrentUserContext.Provider>
          </DeleteContext.Provider>
        </AppContext.Provider>
      </UpdatePostContext.Provider>
    </AddCommentContext.Provider>
  );
};
