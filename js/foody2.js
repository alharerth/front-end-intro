var titles=['apple','banana','kiwi','pineaple','mango','peach','tomato','papaya','dragonfruit']
var images=[
    'https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg',
    'https://thumbs.dreamstime.com/b/banana-close-up-isolated-white-31151806.jpg',
    'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8AS3Q4CAzi8xMe5NaAZ_WfjLlioGWzRURdfAWRu-Lprqex2xf',
    'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg',
    'https://cdn.britannica.com/68/124168-050-33A2B851/Fruit-peach-tree.jpg',
    'https://t4.ftcdn.net/jpg/03/27/96/23/360_F_327962332_6mb5jQLnTOjhYeXML7v45Hc5eED2GYOD.jpg',
    'https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hJ5DpNTt0oKjZMIHYV6gUHTntB2zIs_78dPKiuDUXgE=',
    'https://media.istockphoto.com/id/1129173897/photo/isolated-red-fleshed-dragon-fruit.jpg?s=612x612&w=0&k=20&c=ryTsKkN1em42s2cO0hdQK9TeHmAZ-rPZgvA_akrKaF8=']
    var item = document.getElementsByClassName('ca')

    var j=0

    function nextItems(){
        if (j>titles.length-4){
            alert('no more items')
            return
        }
        for(var i=0;i<titles.length;i++){
            item[i].children[1].src=images[j+3]
            item[i].children[1].innerHTML=titles[j+3]
            j++
        }
    }
    
    function prevItems(){
        if (j<1){
            alert('no more items')
            return
        }
        for(var i=0;i<titles.length;i++){

            item[i].children[1].src=images[Math.abs(j-1)]
            item[i].children[1].innerHTML=titles[Math.abs(j-1)]
            j--
        }
    }