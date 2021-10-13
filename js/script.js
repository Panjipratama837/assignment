$.getJSON("json/data.json", function (data) {
  let card = data.cardMovie;
  $.each(card, function (i, card) {
    $("#list-card").append(`
    <div class="col-md-4">
    <div class="card" style="width: 26rem">
      <img src="img/${card.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${card.judul}</h5>
        <p class="card-text">
          ${card.sinopsis}
        </p>
        <div class="row">
          <div class="col-10">
           <h5 class="card-title">Daftar Pemeran ${card.judul}</h5>
          </div>
          <div class="col-2">
            <i class="uil uil-angle-down skills__arrow arrow"></i>
          </div>
        </div>
       <br/>
        
        <ul class="list-group">
        ${$.map(card.pemeran, (aktor) => {
          return `<li class="list-group-item list-group-item-${aktor.color}">
          <a href="${aktor.profile}" target="_blank">${aktor.nama}</a> sebagai ${aktor.as}
        </li>`;
        })}
          
        </ul>
        <br />
        <a
          href="${card.netflix}"
          class="btn btn-primary"
          >Go Netflix</a
        >
      </div>
    </div>
  </div>
    `);
  });
});
