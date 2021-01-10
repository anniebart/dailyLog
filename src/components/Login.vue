<template>
   <div id="signup">
       <div class="container">
       <form>
           <h1> Log in </h1>
         
           <div>
           <label for="username">username</label>
           <input name="username" autocomplete="username"> </div>
           <div>
           <label for="password">password</label>
           <input name="password" type="password" minlength=8 autocomplete="current-password">
           </div><button>submit</button>
    </form>
       </div>
    
   </div> 
</template>

<style scoped>
h1 {
    text-transform: uppercase;
    font-weight: 800;
}

.container {
    padding-top: 16px;
    min-height: 90vh;
    display: flex;
    align-content: center;
    justify-content: center;
}

input {
    display: block;
    width: 200px;
    font-size: 20px;
}
label {
    text-align: left;
    display :block;
    padding: 4px 0;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 16px;
    margin: 4px 0;
}
form {
    display: block;
    justify-items: left;
   background-color: #98B1CD;
   padding: 40px 120px;
   max-height: 360px;
   border-radius: 40px;
}
input {
    background-color: white;
    border-radius: 30px;
    border: none;
}
button {
    background-color: #324B67;
    color: white;
}
</style>