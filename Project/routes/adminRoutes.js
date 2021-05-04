const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'admin';

    next();
});

/* DEFAULT ADMIN INDEX ROUTE*/

router.route('/')
    .get(adminController.index);

router.route('/posts')
    .get(adminController.getPosts);



router.route('/posts/create')
    .get(adminController.createPostsGet)
    .post(adminController.submitPosts);


router.route('/posts/edit/:id')
    .get(adminController.editPostGetRoute)
    .put(adminController.editPostUpdateRoute);


router.route('/posts/delete/:id')
    .delete(adminController.deletePost);

