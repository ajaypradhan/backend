require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const githubData = {
  login: "ajaypradhan",
  id: 15013526,
  node_id: "MDQ6VXNlcjE1MDEzNTI2",
  avatar_url: "https://avatars.githubusercontent.com/u/15013526?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ajaypradhan",
  html_url: "https://github.com/ajaypradhan",
  followers_url: "https://api.github.com/users/ajaypradhan/followers",
  following_url:
    "https://api.github.com/users/ajaypradhan/following{/other_user}",
  gists_url: "https://api.github.com/users/ajaypradhan/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/ajaypradhan/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ajaypradhan/subscriptions",
  organizations_url: "https://api.github.com/users/ajaypradhan/orgs",
  repos_url: "https://api.github.com/users/ajaypradhan/repos",
  events_url: "https://api.github.com/users/ajaypradhan/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/ajaypradhan/received_events",
  type: "User",
  site_admin: false,
  name: "Ajay Pradhan",
  company: null,
  blog: "",
  location: "Noida, Uttar Pradesh",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 117,
  public_gists: 1,
  followers: 5,
  following: 34,
  created_at: "2015-10-07T11:19:29Z",
  updated_at: "2023-12-23T18:03:04Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ajay", (req, res) => {
  res.send("Ajay Pradhan");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
