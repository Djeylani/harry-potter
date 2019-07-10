
fetch("https://hp-api.herokuapp.com/api/characters")
    .then(res => res.json())
    .then((data) => {
        $.map(data, function (value, key) {
            let {name, image, dateOfBirth, gender, house, ancestry, patronus, actor, species } = value;
            let {core, length, wood} = value.wand;

           let list = `
           <div class="row">
              <div class="col-sm-4 col-md-4 mb-4 text-center">
                <img src=${image} alt=${name}>
              </div>
              <div class="col-sm-8 col-md-8">
                <div class="well">
                  <h5><span class="badge badge-light">Name:</span> ${name} - (<small>${actor}</small>)</h5>
                  <p><span class="badge badge-primary">D.O.B</span> ${dateOfBirth ? dateOfBirth : 'Unknown'}</p>
                  <p><span class="badge badge-danger">Gender</span> ${gender}</p>
                  <p><span class="badge badge-success">House</span> ${house ? house : 'Unknown'}</p>
                  <p><span class="badge badge-secondary">Species</span> ${species}</p>
                  <p>
                  <span class="badge badge-info">Wand</span> <small><strong>Core: ${core ? core : 'Unknown'}, Length: ${length ? length : 'Unknown'}, Wood: ${wood ? wood : 'Unknown'}</strong></small>
                  </p>           
                  <p><span class="badge badge-dark">Patronus</span> ${patronus ? patronus : 'Unknown'}</p>
                </div>
              </div>
           </div>
           `;

           $("#charlist").append(list);
        });
    });