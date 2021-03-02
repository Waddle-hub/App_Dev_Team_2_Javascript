# Functional Specification 
#### Contributers
* Yamen Saad
* Shiyi Wan 



__1. Overview__

   The project is essentially a website in which people can post content, with special emphasis on the admin ability testing our skills in manipulating data across the platform, the admin functionality is what we will focus on, editing mass amounts of posts turning certain comments on and off, in addicaiton the website will implement a liking system, where users can like posts etc. furthermore the admin has the acess to the user pannel and edit many posts.
   our project is a web application so its made of JsvsScript, node js , HTML and CSS.

__2. Current situation__

   This website is useful for people to share their knowledge and discuss subjects from all aspects. A blog is a website that uses specific software to post personal articles on the Web, or that is usually managed by individuals and posts new articles from time to time.Blog is after MSN, BBS, ICQ, the emergence of the fourth way of network communication, has been welcomed by everyone, is the network era of personal "reader's digest", is a hyperlink as the entrance to the network diary, it represents a new way of life, work and learning. Many blogs focus on providing comments or news on specific topics, while others are used as personal diaries. A typical blog combines text, images, links to other blogs or websites, and other topic-related media to allow readers to leave an interactive message, which is an important element of many blogs. With this in mind we should be developing a blog that adheres to trends and is innovative in its admin capabilities to make sure that the content of the blog is aligned with the admins view of themselves and the community they wish to create, this is a crucial factor in this application. We need to be catering to the needs of the admin and make sure they can edit they're content with ease so that they can moderate all of the potential content on their personalised blog. We find a massive need for this type of software. We need to find new skills and show our understanding, this a perfect time to build a portfolio of well developed applications that show our ability to not only work in a team but develope effectively and adapt the changing requirements the business world will often throw upon us.

__3. List of requirements__

   With **Manage Me**, the users will be able to login in and have special profile which has the ability to add profile photo with adding comment and the functionality of (delete ,edit , reply) comments

__4. Current business flow model__

   At first-time user of of this website should see the log-in page when he/she open the **Manage Me** website if the user has not registered before , he/she should be able to singup and create new account. Every user should have a profile page where they can add profile photo and create there comments with the many choices of (edit, delete ,and like or dislike).also logout button .

__5. UI Plan__

   The interface will be a not so complicated one, we will have a home page with four links(button):'Home'where we can see some posts and comments,'about' with some content inside ,'login' which leads to login page ,'register' leads to the register page.

   The interface will be very simple,nice styled register that will have some buttons and labels for like first&last name ,email,password,confirm password filed and forget password .login page that user need to enter email address and password with some nice styled buttons.
   Admin button will appear on the header which can lead to the admin page, there user can see the dashboard, posts, categories,comments buttons which can help user to manage posts and comments.Logout button will also appear to the header after login.

__6. Constraints__

 * The operating system : Microsoft Windows 10.
 * The database :mongo db
 * The development environment:webstorm
 (1). Data accuracy 
 1. Enter in a strict data format, otherwise the system does not respond to processing.
 2. When querying to ensure full rate, all the corresponding fields containing query keyword records should be able to find. Because there are usually many records of files, the system uses two methods of query: direct query and fuzzy query. 
 (2). Flexibility 
 The design module of the system belongs to normal mode, when to add new functions, the interface is compatible and can be updated at any time