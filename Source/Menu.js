var HeaderMenu = {
  "menus" : [
              ["/Category/StudyList.html", "스터디&nbsp리스트", "study"],
              ["/Category/ProjectList.html", "프로젝트&nbsp리스트", "project"],
              ["/Category/TalkList.html", "토크&nbsp리스트", "talk"],
              ["/Category/MemoList.html", "메모&nbsp리스트", "memo"]
            ],

  printHeaderMenu:function(){
    document.write("<ul>");
    for(var i = 0; i < this.menus.length; i++){
      document.write("<li><a href="+this.menus[i][0]+" title="+this.menus[i][1]+">"+this.menus[i][2]+"</a></li>");
    }
    document.write("</ul>");
  }
}
