function ajax(method,url,data){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest()
        if(method.toLowerCase() === 'get'){
            url += data
        }
        xhr.open(method, url)
        xhr.onload = function(){
            if(this.status>=200&&this.status<300){
                resolve(this.responseText)
            }else{
                reject(this.statusText)
            }
        }
        if(method.toLowerCase() === 'get'){
            xhr.send()
        }
        xhr.send(data)
    })
}