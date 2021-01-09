<template>
   <div id="signup">
       <div class="container">
       <form>
           <div>
           <label for="username">username</label>
           <input name="username"> </div>
           <div>
           <label for="password">password</label>
           <input name="password" type="password" minlength=8>
           </div><button>submit</button>
    </form>
       </div>
    
   </div> 
</template>

<script>
export default {
    name: "SignUp"
}
</script>
<style scoped>
.container {
    min-height: 80vh;
    display: flex;
    align-content: center;
}

form {
    display: block;
}
</style>



