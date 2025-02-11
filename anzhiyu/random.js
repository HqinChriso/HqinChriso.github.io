var posts=["2025/02/10/hello-world/","2025/02/11/Test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };