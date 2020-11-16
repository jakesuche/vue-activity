

// const activities = {
// '1546968934': {
//     id: '1546968934',
//     title: 'Learn Vue.js',
//     notes: 'I started today and it was not good.',
//     progress: 50,
//     category: '1546969049',
//     createdAt: 1546969144391,
//     updatedAt: 1546969144391
//     },
//     '1546969212': {
//     id: '1546969212',
//     title: 'Read Witcher Books',
//     notes: 'These books are super nice',
//     progress: 100,
//     category: '1546969049',
//     createdAt: 1546969144391,
//     updatedAt: 1546969144391
//     }
// }

    // const canContinue = () => {
    //     const rndNumber = Math.floor(Math.random() * 10)
    //     if(rndNumber > 5 ){
    //         console.log('greate')
    //         return true
            
    //     }else{
    //         return false

    //     }
    // }

    // export function fetchActivities(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(function(){
    //             if(canContinue()){
                    
    //                 resolve(activities)
    //             }else{
    //                 reject('Cannot fetch activities')
    //             }
    //         },2000)
        

    //     })

    // }
    // const generateUid = () => Math.floor(new Date() * Math.random())
    import fakeApi from '@/Lib/fakeApi'

    export function fetchActivities(){ 
         return fakeApi.get('activities',{force :1})
         
    }
    export function fetcategories(){
        return fakeApi.get('categories',{force:1})
    }

    const generateUid = function(){
        return  Math.floor(new Date() * Math.random())
    }

    export function createActivityApi(activity){
        
        activity.id = generateUid()
        activity.progress = 0;
        activity.upadateAt = new Date()
        activity.createdAt = new Date()

        return new Promise((resolve,reject) => {
            resolve(activity)
        })
        // return activity
    }

    export function fetchusers() {
        return {
          name: 'Filip Jerga',
          id: '-Aj34jknvncx98812',
        }
    }

    // export function fetcategories(){
    //     return {
    //         '1546969049': {text: 'books',id:'1546969049'},
    //         '1546969225': {text: 'movies',id:'1546969225'}
    //     }
    // }

    
 
