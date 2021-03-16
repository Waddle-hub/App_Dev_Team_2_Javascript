# Functional Specification 
We, as a team setting up our environment to startup our group project with the following developing members: 
1. Friedrichs Wade David 
2. Yamen Saad Alden
3. Wan Shiyi 
4. Ma Mingke
5. Yuldashov Rasul 

__1. Overview__

   The project is essentially a website in which people can post content, with special emphasis on the admin ability testing our skills in manipulating data across the platform, the admin functionality is what we will focus on, editing mass amounts of posts turning certain comments on and off, in addicaiton the website will implement a liking system, where users can like posts etc. furthermore the admin has the acess to the user pannel and edit many posts. our project is a web application so its made of JsvsScript, node js. We have agreed to develop a blog application,the application will let the user to become a blogger by allowing them to post thier content. Currently we are working on documentation which is an integral part of our application.This will give us ideas so that we will have a better understanding when it comes to implementation of our project. 
 
## UI Plan 
 
The interface will be a complicated one, a login screen with some illustrtions photos and audio, dashboard full  of graphical effects, that will have buttons such as; add item, remove item, produce slip, etc. database may be used since this is big group project, everything will be hardcoded into the project. With this best design we aim to provide an easy interface that doesnt require much training leaving less stress on the owners to train new employees.  
 
The interface will be complecated,very good styled register and login and home page that will have some buttons, photos, videos, audios, gif files and labels for like posting or deleting a post/picture or whatever the user can do.database as well to store the user information,with this project we will provide a perfet design no matter how much training does it need,as long as it easy for the user to use. 


   * The interface will be a not so complicated one, we will have a home page with four links(button):'Home'where we can see some posts and comments,'about' with some content inside ,'login' which leads to login page ,'register' leads to the register page.

   * The interface will be very simple,nice styled register that will have some buttons and labels for like first&last name ,email,password,confirm password filed and forget password.

   * login page that user need to enter email address and password with some nice styled buttons.

   * Admin button will appear on the header which can lead to the admin page, there user can see the dashboard, posts, categories,comments buttons which can help user to manage posts and comments.Logout button will also appear to the header after login.

   * A visitor can become a blog user by registering.After loging in using a user id as well as password then the system gives blog user the appropriate permissions to operate on the blog site.

   * User exit: blog users who have logged in can exit and release their own information resources.

   * Blog users can publish their own articles, including topics, text, expressions, pictures and other information, the author through various    elements to show their ideas. The system receives the information and stores it in the database on the server side.

   * Blog users can delete their own published articles and information, and the system will automatically delete these records in the server-side database.

   * In addition to querying, browsing and commenting articles, the system administrator of blog can also modify and delete all articles and comments in the system. These maintenance and management have the highest authority, and the system automatically updates the data in the server-side database -Blog administrators can add and delete new blog users. He can also add, delete and set the appearance of the blog home page, plug-ins and tools used by the blog.

   * A User profile where a user may see all of his posts and the comments attached to that post.
 
## Use Cases 
 
The users have to register and login first before they will lead to the home page.after loging in using a user id as well as password then they will be able to see the home dashboard with perfect style.the admin can remove or edit user's profiles,while the bloggers can add or remove thier own posts. 
 
* Only Admin can add/remove users. 
* simple database will contain users id, email, encrypted password in md5 method.
* register screen will show the username,email,password,confirm password. 
* The login screen will only show the ID label as well as password label. 
* The dashboard will have text areas, photos, videos, audio, gif files as well as buttons like post/submit_post... 
* Users may logout using the button "Logout" at the top corner. 
* Users may add and remove posts. 
* Users can create and delete their profiles anytime and anywhere.
 
 
## How the system should be and what it should not be  ?__ 
 
The system should be easily managed and perfectly designed as much as we can make it so that the user can easily use it,otherwise,it shouldn't be broken at any point,always working properly(maintenance) which means we should maintain our application to work properly and if any error shows up we have to catch it(for example : try,catch exception). 
 
Data requirements must be accurate, reliable and true. When you make an action request, such as finding, deleting, modifying, and adding, you should ensure that the input data matches the database data. When meeting the user's request, the system should ensure that the data in response to the inspection rate and accuracy rate. 
 
Time characteristics.  
In order to meet the user's efficient requirements, the response time of the data, the update processing time, the data conversion and transmission time, the running time should be within 1-5 seconds. When you need to interact with an external device, such as a printer, the response time may be long, but it should be within acceptable limits.

At first-time user of of this website should see the log-in page when he/she open the **Manage Me** website if the user has not registered before , he/she should be able to singup and create new account. Every user should have a profile page where they can add profile photo and create there comments with the many choices of (edit, delete ,and like or dislike).also logout button. The system should be as simple as we can make it so that the user can easily use it,otherwise,it shouldn't be broken at any point,always working properly(maintenance) which means we should maintain our application to work properly and if any error shows up we have to catch it(for example : try,catch exception). Data requirements must be accurate, reliable and true. When you make an action request, such as finding, deleting, modifying, and adding, you should ensure that the input data matches the database data. When meeting the user's request, the system should ensure that the data in response to the inspection rate and accuracy rate. Time characteristics in order to meet the user's efficient requirements, the response time of the data, the update processing time, the data conversion and transmission time, the running time should be within 1-5 seconds. When you need to interact with an external device, such as a printer, the response time may be long, but it should be within acceptable limits. It is important that our website is a space in which bloggers and influencers may build their communitites in a way that agrees with what they believe in. Hence the owner of the blog may edit the posts of others if they have the admin capability. It is important that we make it known that the admin has full control of the content on their blog. if they dislike a comment or a post which goes againist their views. it is within their power to remove it and maintain the integrity of their community. however the system works both ways if a user is irresponsible and allows for content that is illegal or offensive it is up to the moderator of their content to remove it within a reasonable amount of time. these are the responsibilties a user takes on by agreeing to our terms and conditions.
 
## User cases 
 
- A visitor can become a blog user by register 
- After loging in using a user id as well as password then the system gives blog user the appropriate permissions to operate on the blog site 
- User exit: blog users who have logged in can exit and release their own information resources 
- Blog users can publish their own articles, including topics, text, expressions, pictures and other information, the author through various elements to show their ideas. The system receives the information and stores it in the database on the server side 
- Blog users can delete their own published articles and information, and the system will automatically delete these records in the server-side database 
- In addition to querying, browsing and commenting articles, the system administrator of blog can also modify and delete all articles and comments in the system. These maintenance and management have the highest authority, and the system automatically updates the data in the server-side database 
- Blog administrators can add and delete new  blog users. He can also add, delete and set the appearance of the blog home page, plug-ins and tools used by the blog 
 
__6. Constraints__ 

\
  __6.1) Data accuracy__ 
 * Enter in a strict data format, otherwise the system does not respond to processing.
 *  When querying to ensure full rate, all the corresponding fields containing query keyword records should be able to find. Because there are usually many records of files, the system uses two methods of query: direct query and fuzzy query. 

 \
 __6.2) Flexibility__ 
 The design module of the system belongs to normal mode, when to add new functions, the interface is compatible and can be updated at any time
 Design Constraints imposes limitations on the following things:

* The running environment : Jet Brains Webstorm.
* The operating system : Microsoft Windows 10.
* the programming language(Javascript, Nodejs), databases(Mongo DB).
* coding standards. (Proper Indentation, etc)
* business logic, etc. 

The application should have methods and function that can do all the operations needed like deleting or adding posts, updating...etc also,it should have generic classes and methods.
As per said in the requirement specification, the software must oblige the new requlations in the EU, namely GDPR. This means whatever data we collect from the user, must be treated with the upmost care. Also the user MUST explicitly accept the collection and use of his/her data.

As stated in the requirement specification, copyright content can be used for educational purposes. Although it varies country-by-country, if the original author/source must be stated or not. This would mean a great constraint on the system in case of commercialising the software. In case of free educational software, the differences between the countries does no concern us, we will only have to oblige to the laws in the country, where our organization is stated, and where the original source of the server side of the software is. Even if CDN is used, the original source is the one we have to oblige.

As per said in the requirement specification, whenever communications happen between the client and server side, the data should be sent in a json format. It is one of the most popular standards nowadays. If the communication happens on http/https protocol, it is also a good idea to use normalized url-s with it, similarly to a RESTful API.
