# Tech Blog

## Project Description

This application provides the user a platform to communicate technology stories. The user can post a new blog post and also manage existing blog posts. This project was developed using a MVC framework with the help of Express, MySQL, Sequelize, NodeJS, HTML5, Bulma, Handlebars.

---

## Table of Content

1. [Project Description](https://github.com/Brondchux/hw12-tech-blog#project-description)
2. [Author Info](https://github.com/Brondchux/hw12-tech-blog#author-info)
3. [User Story](https://github.com/Brondchux/hw12-tech-blog#user-story)
4. [Acceptance Criteria](https://github.com/Brondchux/hw12-tech-blog#acceptance-criteria)
5. [Mock-Up Preview](https://github.com/Brondchux/hw12-tech-blog#mock-up-preview)
6. [Useful Links](https://github.com/Brondchux/hw12-tech-blog#useful-links)
7. [Tech Stack](https://github.com/Brondchux/hw12-tech-blog#tech-stack)
8. [License](https://github.com/Brondchux/hw12-tech-blog#license)

---

## Author Info

- Name: Nafis Rahman

- Email: nmr278@nyu.edu

- Github: [Naf15](http://www.github.com/Naf15)

---

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

---

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

---

## Mock-Up Preview

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./public/assets/images/tech-blog-demo.gif)

---

## Useful Links

1. 🗂 [Click me to view github repository for this project](https://github.com//tech-blonaf15g/)
2. 🌍 [Click me to view deployed application via heroku](https://tech-blog-22.herokuapp.com/)

---

## Tech Stack

![nodejs logo](./public/assets/images/techs/nodejs.png)
![mysql logo](./public/assets/images/techs/mysql.png)
![npm logo](./public/assets/images/techs/npm.png)

---


## License

[![LICENSE](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
