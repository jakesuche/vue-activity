<template>
  <article class="post">
    <h4 class="title">{{ activity.title  | uppercase}}</h4>
    
    <p>{{capitalize(categories[activity.category].text )}}</p>
    <p>{{ activity.notes }}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <!-- <img src="../assets/user.png"> -->
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">{{fullname}}</a> updated {{ activity.upadateAt | formatted}}  &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>progress: <span :class="activityProgess">{{activity.progress}}%</span></span>
      </div>
    </div>
  </article>
</template>

<script>
import textUtility from '../mixins/textUtility'
export default {

    // props:['activity'],
    props:{
        activity:{
            type:Object,
            required:true
        },
        categories:{
          type:Object,
          required:true
        }
    },
    mixins: [textUtility],
    data(){
      return {
        name:'uche',
        username:'jake'
      }
    },
    computed:{
      fullname(){
        return `${this.name} ${this.username}`
      },
      activityProgess(){
        const progress = this.activity.progress
        if(progress <=0){
          return 'color-red'
        }
        else if(progress <= 50 ){
          return 'color-orange'
        }else{
          return 'color-green'
        }
      }
    },
    // createed a new folder calledd mixins where i share all my function
   
    
}
</script>

<style scoped> 
.color-red{
  color:red

}
.color-orange{
  color:orange
  
}
.color-green{
  color:green
}
.post .title {
  margin-bottom: 5px
}
.post{
  animation:fadeIn 3s
}

@keyframes fadeIn {
  from {
    opacity:0.2;
    transform: rotateX(-10deg)
  }

  to {
    opacity:5;
    transform: rotateY(0deg);
  }
}

</style>

