exports.validToken = validToken = [22, 23, 24, 25, 26, 26, 27, 28, 29, 30 ];
exports.registered = registered =[];
var newPost={};
var reqFriendEffect=[];
var reqFriendReceive=[];
var counter = 1;
var idPost = 1;
exports.social = social = [
  {
    id:counter,
    name:"Daviano",
    surname:"Amarù",
    friends:[],
    reqPendE:[],
    reqPendR:[],
    post:[{
      idPost:idPost,
      message:"My First Post"
    }],

  }
]

 exports.sendToSocial = function(name, surname){ //registrazione
      counter++;
      social.push({
      id:counter,
      name:name,
      surname:surname,
      friend:[],
      reqPendE:[],
      reqPendR:[],
      post:[]
    });

    for(var i=registered.length;i<social.length-1; i++){
      registered.push({
        id:counter,
        name:name,
        surname:surname,
        token:validToken[i],
        friend:[],
        reqPendE:[],
        reqPendR:[],
        post:[]
      });

      validToken.splice(i,1);
    }
  return "insertion successfully completed";
}

exports.viewAllUsers = function(){ // lista tutti gli utenti
  return social;
}

exports.insertPost = function(id,newPost){

  for(var i=0;i<social.length; i++){
    if(id===social[i].id){
      newPost.idPost = parseInt(social[i].post[social[i].post.length-1].idPost+1);
      social[i].post.push(newPost)
      return "Post Added"
    }
  }
}


exports.reqSendFriendship = function(id,idFriend){ //mando una richiesta

  for(var i=0;i<i<social.length; i++){
    if(social[i].id.reqPendE===idFriend||social[i].id.friends===idFriend){
      return "Sorry friend already present"
    }
    else{
      social[i].reqPendE.push(idFriend);
      reqFriendEffect.push({id:id,
        request:"send"});
        for(var i=0;i<social.length; i++){
          if(social[i].id===idFriend){
            social[i].reqPendR.push(id);
            return "Request send";
          }

        }
      }
    }
  }
/*
exports.reqFriendship = function(idFriend,id){ //ricevo una richiesta

  for(var i=0;i<i<social.length; i++){
    if(social[i].id.reqPendR===id||social[i].id.friends===id){
      return "Sorry friend already present"
    }
    else{
      social[i].reqPendR.push(idFriend);
      reqFriendReceive.push({id:idFriend,
        request:"receive"});
        for(var i=0;i<social.length; i++){
          if(social[i].id===idFriend){
            social[i].reqPendE.push(id);
            return "Request received";
          }
        }
      }
    }
  }*/

exports.removePost = function(id){
  for(var i=0; i<social.length;i++){
    if(social[i].id===id){
      social[i].post.splice(i,1);
      return "Post is deleted"
    }
  }
}

exports.removeReqE = function(id){
  for(var i=0; i<social.length;i++){
    if(social[i].id===id){
      social[i].reqPendE.splice(i,1);
      return "Request is deleted"
    }
  }
}

exports.acceptFriend = function(id,idFriend){
  for(var i=0; i<social.length;i++){
    if(social[i].id===id) {
      if(parseInt(social[i].reqPendR)===idFriend){
        social[i].friends=[idFriend]
        social[i].reqPendR.splice(i,1);
      }

      return "you accepted a friend";
    }
  }
}
exports.usersRegistered = function(){
    return registered;
}
exports.usersToken = function(){
    return validToken;
}

exports.viewPostFriend = function(id,idFriend){
  var post="";
  for(var i=0; i<social.length;i++){
    if(social[i].id===id){
      if(parseInt(social[i].friends)===idFriend){
        for(var i=0; i<social.length;i++){
          if(social[i].id===idFriend){
            post=social[i].id;
            return post;
          }
        }
      }
    }
  }
}
