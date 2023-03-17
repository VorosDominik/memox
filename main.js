
const LIST=[`kepeki/Monster 04_01.jpg`,`kepeki/Monster 04_02.jpg`,`kepeki/Monster 04_03.jpg`,`kepeki/Monster 04_01.jpg`,`kepeki/Monster 04_02.jpg`,`kepeki/Monster 04_03.jpg`,];
const KIVALASZTOTTKEPEK=[];
let db= 0;
$( function(){

    const FELSOELEM=$(".felso")
    let tartalom=osszeAlit();
    FELSOELEM.append(tartalom)
    FELSOELEM.on("click",képrekat)
})
function osszeAlit(){
let txt="";
for (let index = 0; index < LIST.length; index++) {
    txt+=`<div><img src="kepeki/Monster 04_06.jpg" alt="" id="${index}"></div>`;
    
};
console.log(txt);
return txt;

}
function képrekat(){
    const aktkep=event.target;
 console.log (aktkep.id);
 aktkep.src=LIST[aktkep.id]
 KIVALASZTOTTKEPEK.push($(aktkep).attr("id"))
 db++;
 if (db==2){
    db=0
    visszafordit()
    
 }
}
function visszafordit(){
    const FElsoelem=$("#felsoimg")
     let aktkep = FElsoelem.eq(KIVALASZTOTTKEPEK[0]);
    $(aktkep).attr("src",`kepek/Monster 04_06.jpg`);
     aktkep = FElsoelem.eq(KIVALASZTOTTKEPEK[1]);
    $(aktkep).attr("src","kepek/Monster 04_06.jpg");
    KIVALASZTOTTKEPEK.pop
    KIVALASZTOTTKEPEK.pop
}