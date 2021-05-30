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

  printHeaderMenu:function(){
    document.write("<ul>");
    for(var i = 0; i < this.menus.length; i++){
      document.write("<li><a href="+this.menus[i][0]+" title="+this.menus[i][1]+">"+this.menus[i][2]+"</a></li>");
    }
    document.write("</ul>");
  }
}
