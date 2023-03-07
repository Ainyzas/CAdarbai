import Post from '../models/postModel.js';
import dotenv from 'dotenv';

dotenv.config();

const { JSON_URL } = process.env;

export async function getAllPosts(req, res) {
  try {
    const mongoPosts = await Post.find({}, { __v: false });
    const jsonFetch = await fetch(JSON_URL);
    const jsonPosts = await jsonFetch.json();

    const serializedMongoPosts = mongoPosts.map((post) => ({
      userId: post.userId,
      id: post._id,
      title: post.title,
      body: post.body,
    }));

    const mergedPosts = [...serializedMongoPosts, ...jsonPosts];

    res.status(200).json(mergedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllPostTitles(req, res) {
  try {
    const mongoRequest = Post.find({}, { title: true, userId: true });
    const jsonRequest = fetch(JSON_URL);

    const [mongoResponse, jsonResponse] = await Promise.all([mongoRequest, jsonRequest]);
    const jsonPosts = await jsonResponse.json();

    const combinedPosts = [...mongoResponse, ...jsonPosts];
    const serializedPosts = combinedPosts.map((post) => ({
      title: post.title,
      userId: post.userId,
    }));

    res.status(200).json(serializedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllPostBody(req, res) {
  try {
    const mongoRequest = Post.find({}, { body: true, userId: true });
    const jsonRequest = fetch(JSON_URL);

    const [mongoResponse, jsonResponse] = await Promise.all([mongoRequest, jsonRequest]);
    const jsonPosts = await jsonResponse.json();

    const combinedPosts = [...mongoResponse, ...jsonPosts];
    const serializedPosts = combinedPosts.map((post) => ({
      body: post.body,
      userId: post.userId,
      id: post.id,
    }));

    res.status(200).json(serializedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPostById(req, res) {
  try {
    const { id } = req.params;

    if (id.length === 24) {
      const mongoPost = await Post.findById(id, { __v: false });
      if (mongoPost === null) {
        res.status(404).json({ message: `Post not found with id: ${id}` });
      } else {
        res.status(200).json(mongoPost);
      }
    } else {
      const jsonFetch = await fetch(JSON_URL + `/${id}`);
      const jsonPost = await jsonFetch.json();
      if (Object.keys(jsonPost).length === 0) {
        res.status(404).json({ message: `Post not found with id: ${id}` });
      } else {
        res.status(200).json(jsonPost);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createNewPost(req, res) {
  try {
    const { userId, title, body } = req.body;

    const post = await Post.create({
      userId,
      title,
      body,
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
