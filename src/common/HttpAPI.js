

let header = {
    'Accept':'application/json',
    'Content-Type':'application/json'
}


export default class HttpAPI {
   static get(url,params,callback){
    if (params) {
       let paramsArray = [];
         //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
         if (url.search(/\?/) === -1) {
          url += '?' + paramsArray.join('&')
            } else {
             url += '&' + paramsArray.join('&')
            }
        }
       
        fetch(url,{
            method:'GET',
            headers:header,
        })
        .then(response => response.json())
        .then(response => {callback(response)})
        .catch(error=>console.log(error))
   }

   static post(url,params,callback){
       fetch(url,{
           method:'POST',
           headers:header,
           body:JSON.stringify(params)
       })
       .then(response => response.json())
       .then(response => {callback(response)})
       .catch(error=> console.log('error' + error));
   }
}