let videos=document.getElementById("videos");
async function getvideos(){
    try {
        let url= "https://api.freeapi.app/api/v1/public/youtube/videos"
        let fetched=await fetch(url);
        let response=await fetched.json();
        
        
        
        response.data.data.forEach(element => {
            let title=element.items.snippet.title;
            let thumbnail=element.items.snippet.thumbnails.default.url;
            let ctitle=element.items.snippet.channelTitle;

            let div=document.createElement("div");
            div.id=element.items.id;
            div.classList.add("video");
            let div2=document.createElement("div");
            div2.classList.add("video-title");
            

            let h2=document.createElement("h2");
            let img=document.createElement("img")
            img.classList.add("thumb");

            let small=document.createElement("small");
            small.innerText=ctitle;
            
            img.src=thumbnail;
        
            h2.textContent=title;
            
            div.appendChild(img);
            div2.appendChild(h2);
            div2.appendChild(small);
            div.appendChild(div2);
            videos.append(div);

            
            document.querySelectorAll(".video").forEach((elem)=>{
                elem.addEventListener("click",function(){
                    let videoId=elem.id;
                    let url="https://www.youtube.com/watch?v="+videoId;
                    window.open(url,"_blank");
                    
                    
                })
            });
            document.getElementById("searchin").addEventListener("keyup",function(){
                let searchin = this.value.toLowerCase();
                let videos = document.querySelectorAll(".video");
                videos.forEach(function(video) {
                    let title = video.querySelector("h2").textContent.toLowerCase();
                    let thumbnail = video.querySelector("img").src.toLowerCase();
                    let channel = video.querySelector("small").textContent.toLowerCase();
                    if (title.includes(searchin) || thumbnail.includes(searchin) || channel.includes(searchin)){
                        video.style.display = "block";
                    }
                    else{
                        video.style.display = "none";
                    }
                })
    
            })
            

            
        });
        
    } catch (error) {
        console.error(error);
        
    }
    

}
getvideos();

    

