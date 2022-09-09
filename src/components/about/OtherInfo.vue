<template>
  <div class="container">
    <h2>Other Info</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem 
    </p>
  </div>
</template>

<style scoped>
.container{
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 40px;
    justify-content: center;
    height: 400px;
    max-width: 100%;
}

p{
    margin-top:20px;
}

@media (min-width:640px) {
    p{
        width:80%;
    }
    
}
@media (min-width:1024px){
    .container{
        padding: 0 100px;
    }
}
</style>