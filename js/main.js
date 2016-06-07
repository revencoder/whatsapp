
$(function(){
	$(".icon-insert_emoticon").attr("onclick","redacta()")
	busqueda()		
});

function redacta(){
	var chatmsj=$("#msj").val()
	var msjcontactodos=document.createElement("div")
	msjcontactodos.setAttribute("class","usuario-msg-anexo")
	var msjcontact=document.createElement("div")
	msjcontact.setAttribute("class", "nombre")
	var usuario = document.createElement("div")
	usuario.setAttribute("class", "usuario-msg")
	$(usuario).html(chatmsj)
	$(msjcontact).append(usuario)
	$(msjcontactodos).append(msjcontact)
	$(".mensaje-chateo").append(msjcontactodos)
}

function busqueda(){
	cambio=info.length
	for(var i=0;i<cambio;i++){
	var div=document.createElement("div")
		div.setAttribute("class","col-lista-msg")
		div.setAttribute("onclick","aparece(this)")
		div.innerHTML="<div class='perfil-img'><img src='image/"
		+info[i].img+
		"'/></div><div class='mensaje mdetalles'><div class='detalle'><div class='nombre mdetalles'>"
		+info[i].nombre+"</div><div class='diahora'>"
		+info[i].mensajes[0].fecha+"</div></div><div class='msg-chat mdetalles'><p class='mdetalles'>"
		+info[i].mensajes[0].contenido+"</p></div></div>"
		$(".col-contacto-chat").append(div)
	}
}

function aparece(a){
	var src=$(a).find("img").attr("src")
	var name=$(a).children("div.message mdetalles").children("div.detalle").children("div.nombre mdetalles").text()
	var img="<img src='"+src+"'alt='imagen perfil'>"
	$(".col-chat-inicial").html(img)
	$(".col-chat-detalle").children("div.text").children("div.contacto").html(name)

}




