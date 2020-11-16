<template>
  <div  v-if="categories && activities" id="activityApp">
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <h1>{{ fullAppName }}</h1>
        </div>
      </div>
    </nav>
   <!-- nav bar start  component -->
    <theNavbar/>
   
    <section class="container">
      <div class="columns">
        <!-- activity for starts -->
        <div class="column is-3">
          <Activitycreate @activityCreated="AddActivity"
            v-bind:categories = categories
          
          />
        </div>
      
        <!-- activity form ends -->
        <div class="column is-9">
          <div class="box content" :class="{fetching: isFetching, 'has-error':error}">
            <div v-if="error">
              {{error}}
            </div>
            <div v-else>
              <div v-if="isFetching">
                Loading .....
              </div>
              

              <Activityitem
              v-for="activity in activities"
              :key="activity.id"
              :activity="activity"
              :categories="categories"
            />
            </div>

              <div v-if="!isFetching">
                <div class="activity-length"> currently {{ activityLength }} activities</div>
                <div class="activity-Motivation"> {{activityMotivation}}</div> 
              </div>
             </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import theNavbar from './components/theNavbar'
 import Activityitem from './components/ActivityItem'
 import Activitycreate from './components/Activitycreate'
 import { fetchActivities, fetcategories, fetchusers  } from './api/index'
 
 
export default {

  name: 'App',
  components: {
    theNavbar,
    Activityitem,

    Activitycreate
   
   },
   data () {
    return {
      isFormDisplayed: false,
      creator:'Jake Uche',
      appName:'Activity planner',
      message: 'Hello Vue!', 
      titleMessage: 'Title Message Vue!!!!!',
      isTextDisplayed: true,
      newActivity: {
        title: '',
        notes: '',
        category:''
      },
     isFetching:false,
     error:null,
      user: {},
      activities : null,
      categories:null, 

    }
   },
   computed:{
      isFormValid(){
        return this.newActivity.title && this.newActivity.notes
      },
      fullAppName(){
        return `${this.appName} by ${this.creator}`
      },
      activityLength(){
       
        return Object.keys(this.activities).length 
        
      },
      activityMotivation(){
        if(this.activityLength && this.activityLength < 5 ){
          return 'Nice to see some goals (:'
        }else if (this.activityLength >= 5){
          return 'So many activities! Good job'
        }else {
          return 'No activity'
        }
      }
    },
   beforeCreate(){
     console.log("before called")
   },
   created() {
          this.isFetching = true
        //  this.activities = fetchActivities()
          fetchActivities()
          .then((activities)=>{
            this.activities = activities
            this.isFetching = false
          })
          .catch(error =>{
            console.log(error)
            this.error = error
            this.isFetching = false
          })
         this.user = fetchusers()
        fetcategories().then(categories =>{
          this.categories = categories
        })
         console.log(this.categories)
    },
     beforeMount(){
      console.log('before mount called')
    },
    

     
   methods:{
      toggleTextDisplay () {
      this.isTextDisplayed = !this.isTextDisplayed
    },
    toggleFormDisplay () {
      this.isFormDisplayed = !this.isFormDisplayed
    },
    AddActivity(newActivity){
     // this.activities[newActivity.id]= newActivity
     // vue.set is used to add an object
      Vue.set(this.activities, newActivity.id, newActivity)
      console.log('activity from this activity check', this.activities)
      console.log('activity passed to app.vue',newActivity)
    }  
   
    // isFormValid(){
    //   return this.newActivity.title && this.newActivity.notes
    // }
   }
}
</script>

<style>
/* #activityApp{  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


#activityApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

.has-error{
  border: red 2px solid;
}
.fetching{
  border:orange 2px solid
}

html,body {
  font-family: 'Open Sans', serif;
  background: #F2F6FA;
}
footer {
  background-color: #F2F6FA !important;
}
.activity-Motivation{
  float:right;
}
.activity-length{
  display:inline-block
}
.example-wrapper {
  margin-left: 30px;
}
.topNav {
  border-top: 5px solid #3498DB;
}
.topNav .container {
  border-bottom: 1px solid #E6EAEE;
}
.container .columns {
  margin: 3rem 0;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8F99A3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li{
  padding: 5px;
}
.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}

</style>
 