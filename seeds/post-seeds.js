const { Post } = require('../models');

const postData = [{
        title: 'What MVC means to me',
        content: 'Its a ton of fun and really easy to utilize.',
        user_id: 1
    },
    {
        title: 'Authentication vs Authorization',
        content: 'Thats the question.',
        user_id: 1
    },
    {
        title: 'O.R.M.',
        content: 'SQL queries were not very interesting until I started using ORM.',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;