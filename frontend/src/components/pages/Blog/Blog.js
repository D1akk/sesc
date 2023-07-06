import React, { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { AddPostForm } from "./addPostForm/AddPostForm";
import {
  useAddPost,
  useDeletePost,
  useEditPost,
  useGetPosts,
  useLikePost,
} from "../../../shared/queries";
import CircularProgress from "@mui/material/CircularProgress";
import { PostCard } from "./PostCard/PostCard";
import { EditPostForm } from "./EditPostForm/EditPostForm";

export const Blog = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

  const { data: posts, isLoading, isError, error, isFetching } = useGetPosts();

  const likeMutation = useLikePost();
  const deleteMutation = useDeletePost();
  const editMutation = useEditPost();
  const addMutation = useAddPost();

  if (isLoading) return <h1>Загружаю данные...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  const likePost = (blogPost) => {
    const updatedPost = { ...blogPost };
    updatedPost.liked = !updatedPost.liked;
    likeMutation.mutate(updatedPost);
  };

  const deletePost = (blogPost) => {
    if (window.confirm(`Удалить ${blogPost.title}?`)) {
      deleteMutation.mutate(blogPost);
    }
  };

  const editBlogPost = (updatedBlogPost) => {
    editMutation.mutate(updatedBlogPost);
  };

  const addNewBlogPost = (newBlogPost) => {
    addMutation.mutate(newBlogPost);
  };

  const handleAddFormShow = () => {
    setShowAddForm(true);
  };

  const handleAddFormHide = () => {
    setShowAddForm(false);
  };

  const handleEditFormShow = () => {
    setShowEditForm(true);
  };

  const handleEditFormHide = () => {
    setShowEditForm(false);
  };

  const handleSelectPost = (blogPost) => {
    setSelectedPost(blogPost);
  };

  const blogPosts = posts.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <PostCard
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => likePost(item)}
          deletePost={() => deletePost(item)}
          handleEditFormShow={handleEditFormShow}
          handleSelectPost={() => handleSelectPost(item)}
        />
        <Link to={`/blog/${item.id}`}>Подробнее</Link>
      </React.Fragment>
    );
  });

  const postsOpactiy = isFetching ? 0.5 : 1;

  return (
    <div className="home">
      <div className="blogPage">
        {showAddForm && (
          <AddPostForm
            addNewBlogPost={addNewBlogPost}
            handleAddFormHide={handleAddFormHide}
          />
        )}

        {showEditForm && (
          <EditPostForm
            handleEditFormHide={handleEditFormHide}
            selectedPost={selectedPost}
            editBlogPost={editBlogPost}
          />
        )}

        <>
          <h1>Блог</h1>

          {
            <div className="addNewPost">
              <button className="blackBtn" onClick={handleAddFormShow}>
                Создать новый пост
              </button>
            </div>
          }

          <div className="posts" style={{ opacity: postsOpactiy }}>
            {blogPosts}
          </div>
          {isFetching && <CircularProgress className="preloader" />}
        </>
      </div>
    </div>
  );
};
