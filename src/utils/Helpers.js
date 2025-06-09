import { router } from "expo-router"

export const resetAndNavigate =  (newpath) => {
      if(router.canGoBack()){
        router.dismissAll
      }
      router.replace(newpath);
 }


 
