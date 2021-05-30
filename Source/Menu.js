var HeaderMenu = {
  "headerMenus" : [
              ["StudyList.html", "스터디&nbsp리스트", "study"],
              ["ProjectList.html", "프로젝트&nbsp리스트", "project"],
              ["TalkList.html", "토크&nbsp리스트", "talk"],
              ["MemoList.html", "메모&nbsp리스트", "memo"]
            ],

  getHeaderMenus:function(){
    return this.headerMenus;
  },

  printHeaderMenu:function(relativePath){
    for(var i = 0; i < this.headerMenus.length; i++){
      document.write("<li><a href="+relativePath+this.headerMenus[i][0]+" title="+this.headerMenus[i][1]+">"+this.headerMenus[i][2]+"</a></li>");
    }

  }
}
