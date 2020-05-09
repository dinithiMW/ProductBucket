<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Product Bucket</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <router-link to="/" style="color:blanchedalmond">Home </router-link> 
      </li>
      <li class="nav-item">
        <router-link to="add" style="color:blanchedalmond">Add product </router-link>
      </li>
      <li class="nav-item" >
        <router-link to="product" style="color:blanchedalmond">Product list </router-link>
      </li>
    </ul>
    <ul class="navbar-nav navbar-right">
      <li class="nav-item" >
        <router-link to="about" style="color:blanchedalmond">About </router-link>
      </li>
      <li class="nav-item" >
        <router-link to="contact" style="color:blanchedalmond">Contact </router-link>
      </li>
      

    </ul>
    
  </div>
</nav>
</template>

<script></script>