<template>

  <div class="container">
      
    <h3>Add product</h3>
    <form action="#" class="form-horizontal"><br><br>
      
      <label >Product</label>
      <input type="text" 
            id="product"
             name="product" 
             placeholder="product name"
             >
            
              
     <!-- <div v-show="errors.has('product')" class="help-block alert alert-danger">
        {{ errors.first('name') }}
      </div>-->


      <label >Quantity</label>
      <input type="text" id="lname" name="quantity" placeholder="quntity of product">
      <label>Price</label>
      <input type="text" id="lname" name="price" placeholder="price per unit">
  
      
    
      <input type="submit" value="Add Product">
    </form>
</div>
  
</template>

<script>

</script>

<style scoped>
    input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
  
</style>