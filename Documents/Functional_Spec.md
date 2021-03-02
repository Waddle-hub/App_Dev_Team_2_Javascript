# Functional Specification 
#### Contributers
* Yamen Saad
* Shiyi Wan 
* Wade David Friedrichs


__1. Overview__

   The project is essentially a website in which people can post content, with special emphasis on the admin ability testing our skills in manipulating data across the platform, the admin functionality is what we will focus on, editing mass amounts of posts turning certain comments on and off, in addicaiton the website will implement a liking system, where users can like posts etc. furthermore the admin has the acess to the user pannel and edit many posts.
   our project is a web application so its made of JsvsScript, node js , HTML and CSS.


__3. List of requirements__

   With **Manage Me**, the users will be able to login in and have special profile which has the ability to add profile photo with adding comment and the functionality of (delete ,edit , reply) comments

__4. Current business flow model__

   At first-time user of of this website should see the log-in page when he/she open the **Manage Me** website if the user has not registered before , he/she should be able to singup and create new account. Every user should have a profile page where they can add profile photo and create there comments with the many choices of (edit, delete ,and like or dislike).also logout button .

__5. UI Plan__

   The interface will be a not so complicated one, we will have a home page with four links(button):'Home'where we can see some posts and comments,'about' with some content inside ,'login' which leads to login page ,'register' leads to the register page.

   The interface will be very simple,nice styled register that will have some buttons and labels for like first&last name ,email,password,confirm password filed and forget password .login page that user need to enter email address and password with some nice styled buttons.
   Admin button will appear on the header which can lead to the admin page, there user can see the dashboard, posts, categories,comments buttons which can help user to manage posts and comments.Logout button will also appear to the header after login.

__6. Constraints__

 * The development environment:webstorm
  __1. Data accuracy__ 
 * Enter in a strict data format, otherwise the system does not respond to processing.
 *  When querying to ensure full rate, all the corresponding fields containing query keyword records should be able to find. Because there are usually many records of files, the system uses two methods of query: direct query and fuzzy query. 
 __2. Flexibility__ 
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