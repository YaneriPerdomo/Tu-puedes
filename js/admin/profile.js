let $write_delete = document.querySelector(".write-delete")
$write_delete.addEventListener("input" , (e) => {
      if($write_delete.value == "ELIMINAR"){
        let $btn__confirmar = document.querySelector(".btn__confirmar")
        $btn__confirmar.classList.remove("filter-sepia")
        $btn__confirmar.style.cursor ="pointer";
        $btn__confirmar.removeAttribute("disabled")
      }else{
        $btn__confirmar.classList.add("filter-sepia")
      }
})
