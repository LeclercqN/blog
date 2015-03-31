var post = {
    subject: 'This the test subject'
  , body: 'Body should contain the markdown content'
  , tags: [ 'first', 'mongodb', 'express']
  , created: new Date()
  , modified: new Date()
  , state: 'published'
  , author: {
      username: 'estveeb'
  }
  , comments: [
    {
        name: 'Test user'
      , body: 'I like your blog'
      , created: new Date()
    }
  ]
};

var post2 = {
    subject: 'This the second post'
  , body: 'Long body text comes here'
  , tags: [ 'first', 'mongodb', 'nodejs']
  , created: new Date()
  , modified: new Date()
  , state: 'published'
  , author: {
      username: 'estveeb'
  }
  , comments: [
    {
        name: 'Test user'
      , body: 'I like your blog'
      , created: new Date()
    }
  ]
};

db.post.insert(post);
db.post.insert(post2);

db.user.insert({ user: 'admin', pass: 'b5c3cf2a3d16d391c8051abbf008c5c39c0957da2ff39fbb2655ac17bebe06cf'});