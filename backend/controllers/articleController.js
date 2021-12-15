import asyncHandler from "express-async-handler";
import Article from "../models/articleModel.js";

// @desc    Add a new Article
// @route   POST /api/articles
// @access  Private
const createArticle = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const article = await Article.create({
    title,
    content,
    createdBy: req.user._id,
  });

  if (article) {
    res.status(201).json({
      article,
      message: "Article created",
    });
  } else {
    res.status(401);
    throw new Error("Invalid article data");
  }
});

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();

  if (articles) {
    res.json({
      articles,
    });
  } else {
    res.status(404);
    throw new Error("Articles not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/articles/:id
// @access  Public
const getSingleArticle = asyncHandler(async (req, res) => {
  const article = await Article.findOne({ _id: req.params.id });

  if (article) {
    res.status(200).json({
      article,
      message: "Article fetched",
    });
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

// @desc    Update Articles
// @route   PUT /api/articles/:id
// @access  Private
const updateArticle = asyncHandler(async (req, res) => {
  const updatedArticle = await Article.findOneAndUpdate(
    { _id: req.params.id },
    { title: req.body.title, content: req.body.content },
    {
      new: true,
    }
  );

  if (updatedArticle) {
    res.status(200).json({
      article: updatedArticle,
      message: "Article updated",
    });
  } else {
    res.status(400);
    throw new Error("Invalid article data");
  }
});

// @desc    Delete Article
// @route   DELETE /api/articles/:id
// @access  Private
const deleteArticle = asyncHandler(async (req, res) => {
  const articleDeleted = await Article.findOneAndDelete({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (articleDeleted) {
    res.status(200).json({
      message: "Article deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Article not found");
  }
});

export {
  createArticle,
  getSingleArticle,
  getArticles,
  deleteArticle,
  updateArticle,
};
