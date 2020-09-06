let arr = [
    { id: 1, name: "chaim", score: 100 },
    { id: 2, name: "david", score: 100 },
    { id: 3, name: "shira", score: 100 },
    { id: 4, name: "noa", score: 100 },
    { id: 5, name: "yossi", score: 100 }

]

function up(id) {
    console.log(id, "id");
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].id) {
            arr[i].score = arr[i].score + 100
            console.log(arr[i].score);
        }
    }
    console.log(arr);
    arr.sort((a, b) => b.score - a.score)

    document.querySelector('.accounts-list').innerHTML = miniRen(template.list2, arr)
}



function down(id) {
    console.log(id, "id");

    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].id)
            arr[i].score -= 10
    }
    // console.log(arr[id]);
    arr.sort((a, b) => b.score - a.score)
    document.querySelector('.accounts-list').innerHTML = miniRen(template.list2, arr)
}

let template = {

    list2: `<div class="list">

<span >[name] : </span>
<span >[score]</span>
<div id=[id] >
<span onclick= up(this.parentElement.id) > 👍 </span>
<span onclick = down(this.parentElement.id) > 🩸 </span>
<?div>
</div>`
}
function miniRen(temp, arrdict) {
    let h = ''
    arrdict.forEach(dict => {
        let itemHtml = temp
        for (let i in dict) {
            itemHtml = itemHtml.replace(`[${i}]`, dict[i])
        }
        h += itemHtml
    });
    return h
}

document.querySelector('.accounts-list').innerHTML = miniRen(template.list2, arr)



