const Post = require("../models/postModel");

// @desc Get all posts
// @route GET /api/posts
// @access Public
const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

// @desc Create new post
// @route POST /api/posts
// @access Public
const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const post = await Post.create({ title, content, author });
  res.status(201).json(post);
};

// @desc Get single post
// @route GET /api/posts/:id
const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.status(200).json(post);
};

// @desc Update post
// @route PUT /api/posts/:id
const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
};

// @desc Delete post
// @route DELETE /api/posts/:id
const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });

  await post.deleteOne();
  res.status(200).json({ message: "Post deleted successfully" });
};

module.exports = {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};
