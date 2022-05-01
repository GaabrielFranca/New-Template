class CreateSlide {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`)
        this.active = 0
        // console.log(this.slide)
        this.iniciar()

    }

    autoSlide() {
        clearTimeout(this.timout)
        this.timout = setTimeout(this.right, 5000)
    }

    selectSlide(index) {
        this.active = index

        this.items.forEach((item) => item.classList.remove("active"))
        this.items[index].classList.add("active")

        this.thumbItems.forEach((item) => item.classList.remove("active"))
        this.thumbItems[index].classList.add("active")
        this.autoSlide()





    }







    right() {
        if (this.active < this.items.length - 1) {
            this.selectSlide(this.active + 1)
        }
        else {
            this.selectSlide(0)
        }
    }

    left() {


        if (this.active > 0) {
            this.selectSlide(this.active - 1)
        } else {
            this.selectSlide(this.items.length - 1)
        }



    }

    addBtns() {
        const leftbtn = this.slide.querySelector(".esquerda")
        const RightBtn = this.slide.querySelector(".direita")


        leftbtn.addEventListener("click", this.left)
        RightBtn.addEventListener("click", this.right)


    }

    addThumbItems() {

        let ativar =
            this.items.forEach(() => (this.thumb.innerHTML += "<span></span>"))
        this.thumbItems = Array.from(this.thumb.children)
        console.log(this.thumbItems)





    }



    iniciar() {

        this.left = this.left.bind(this)
        this.right = this.right.bind(this)
        this.items = this.slide.querySelectorAll(".slide-items >*")
        this.thumb = this.slide.querySelector(".tamanhoBannner")
        this.addThumbItems()
        this.selectSlide(0)

        this.addBtns()

    }

}


new CreateSlide("slide")

