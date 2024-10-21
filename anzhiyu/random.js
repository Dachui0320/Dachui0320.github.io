var posts=["2024/10/20/Qexo测试/","2024/10/21/hello-world/","2024/10/21/个人博客搭建记：从零到一的旅程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };