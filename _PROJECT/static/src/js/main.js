// Simple Donut //
var rankingBars = {
  // Monta a fila de carregamento do gráfico //
  load: function(data, node){
    rankingBars.process(data).then(() => {
      rankingBars.render(node);
    })
  },
  // Processa os dados //
  process: function(d){
    if (!this.data) {
        const self = this;
        // Verifica se o parâmetro é uma variável com JSON
        if (typeof d === 'object' && d !== null) {
          return new Promise((resolve, reject) => {
            this.data = d;
            resolve();
          });
        } else if (typeof d === 'string') {
            const extensao = d.split('.').pop().toLowerCase();

            // Verifica se é um arquivo CSV
            if (extensao === 'csv') {
              
              // Processa o arquivo CSV/
              return new Promise((resolve, reject) => {
                const csvPath = d;

                // Converte o CSV em Json //
                fetch(csvPath)
                  .then(response => response.text())
                  .then(csvData => {
                    const linhas = csvData.split('\n');
                    const headers = linhas[0].split(',');
                    const result = [];
                    for (let i = 1; i < linhas.length; i++) {
                        const obj = {};
                        const currentLine = linhas[i].split(',');
                        for (let j = 0; j < headers.length; j++) {
                            obj[headers[j].trim()] = currentLine[j].trim();
                        }
                        result.push(obj);
                    }

                    // Salva os dados na variável Data
                    self.data = result;
                    resolve();
                  })
                  .catch(error => {
                    reject(error);
                  });
              });

            } 
            
            // Verifica se é um arquivo JSON
            else if (extensao === 'json') {

              // Processa o arquivo JSON
              return new Promise((resolve, reject) => {
                fetch(d)
                  .then(response => response.json())
                  .then(jsonData => {

                    // Salva os dados na variável Data
                    self.data = jsonData;
                    resolve();
                  })
                  .catch(error => {
                    reject(error);
                  });
              });
            } else {
                console.log('Tipo de arquivo não suportado.');
            }
        } else {
            console.log('Tipo de parâmetro não suportado.');
        }
    } else {
        return Promise.resolve();
    }
  },

  // Renderiza o gráfico com base nos dados //
  render: function(node){
    const data = this.data
    const el = document.querySelector(node)
    const width = el.offsetWidth

    const colors = ["#ff6f00", "#ff8f00", "#ffa000", "#ffb300", "#ffca28", "#f8dea7", "#908884", "#aca6a3", "#c7c3c1", "#b3b3b3"]
    
    const rankingWrap = document.createElement('div')
    rankingWrap.setAttribute('class', 'rankingBarsWrap')

    let maxValor = -Infinity;
    data.forEach(obj => {
      const valor = parseFloat(obj.valor)
      if (valor > maxValor) {
        maxValor = valor;
      }
    });

    i=0
    data.forEach(obj => {
      const rankingItem = document.createElement('div')
      rankingItem.setAttribute('class', 'rankingItem')

      const rankingTitle = document.createElement('p')
      rankingTitle.setAttribute('class', 'rankingTitle')
      rankingTitle.textContent = obj.nome
      rankingItem.appendChild(rankingTitle)


      const rankingBar = document.createElement('div')
      rankingBar.setAttribute('class', 'rankingBar')
      rankingBar.setAttribute('data-name', obj.nome)
      
      const bar = document.createElement('div')
      bar.setAttribute('class', 'bar')
      bar.style.width = (obj.valor/maxValor)*100 +  "%"
      bar.style.backgroundColor = colors[i]
      rankingBar.appendChild(bar)

      const text = document.createElement('span')
      text.textContent = obj.valor
      bar.appendChild(text)

      rankingItem.appendChild(rankingBar)
      rankingWrap.appendChild(rankingItem)
      i++
    });
    el.appendChild(rankingWrap)
  },

  // Parte interativa do gráfico //
  highlight: function(e, d){

  }
}

// Chama o Gráfico //
rankingBars.load("./data/simples.csv", "#rankingBar")





// Simple Donut //
var simpleDonut = {
  // Monta a fila de carregamento do gráfico //
  load: function(data, node){
    simpleDonut.process(data).then(() => {
      simpleDonut.render(node);
    })
  },
  // Processa os dados //
  process: function(d){
    if (!this.data) {
        const self = this;
        // Verifica se o parâmetro é uma variável com JSON
        if (typeof d === 'object' && d !== null) {
          return new Promise((resolve, reject) => {
            this.data = d;
            resolve();
          });
        } else if (typeof d === 'string') {
            const extensao = d.split('.').pop().toLowerCase();

            // Verifica se é um arquivo CSV
            if (extensao === 'csv') {
              
              // Processa o arquivo CSV/
              return new Promise((resolve, reject) => {
                const csvPath = d;

                // Converte o CSV em Json //
                fetch(csvPath)
                  .then(response => response.text())
                  .then(csvData => {
                    const linhas = csvData.split('\n');
                    const headers = linhas[0].split(',');
                    const result = [];
                    for (let i = 1; i < linhas.length; i++) {
                        const obj = {};
                        const currentLine = linhas[i].split(',');
                        for (let j = 0; j < headers.length; j++) {
                            obj[headers[j].trim()] = currentLine[j].trim();
                        }
                        result.push(obj);
                    }

                    // Salva os dados na variável Data
                    self.data = result;
                    resolve();
                  })
                  .catch(error => {
                    reject(error);
                  });
              });

            } 
            
            // Verifica se é um arquivo JSON
            else if (extensao === 'json') {

              // Processa o arquivo JSON
              return new Promise((resolve, reject) => {
                fetch(d)
                  .then(response => response.json())
                  .then(jsonData => {

                    // Salva os dados na variável Data
                    self.data = jsonData;
                    resolve();
                  })
                  .catch(error => {
                    reject(error);
                  });
              });
            } else {
                console.log('Tipo de arquivo não suportado.');
            }
        } else {
            console.log('Tipo de parâmetro não suportado.');
        }
    } else {
        return Promise.resolve();
    }
  },

  // Renderiza o gráfico com base nos dados //
  render: function(node){
    const data = this.data
    const el = document.querySelector(node)
    const width = el.offsetWidth
    const height = width *0.55
    const radius = height / 2;
    const pie = d3.pie().sort(null).value(function(d) { return d.valor; });
    const arc = d3.arc().outerRadius(radius * 0.90).innerRadius(radius * 0.4);
    const outerArc = d3.arc().innerRadius(radius * 0.95).outerRadius(radius * 0.95);
    const color = d3.scaleQuantize().domain([0, 10]).range([ "#ff6f00", "#ff8f00", "#ffa000", "#ffb300", "#ffca28", "#f8dea7", "#908884", "#aca6a3", "#c7c3c1", "#b3b3b3"]);
    
    const wrap = d3.select(node)
        .append("div")
        .attr("class", "donutWrap")

    const highlight = wrap.append("div")
        .attr("class", "donutHighlight")
        .append("p")

    const svg = wrap.append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("xml:space", "preserve");

    const group = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let slice = group.selectAll("path.slice")
        .data(pie(data))
        .enter()
        .append("path")
        .style("fill", function(d, i) { return color(i); })
        .attr("class", "slice")
        .attr("data-name", function(d) { return d.data.nome; })
        .on("mouseenter", function(e, d) {
          simpleDonut.highlight(e,d)
        })
        .on("mouseleave", function(e, d) {
          simpleDonut.highlight()
        });

    slice.transition().duration(1000)
        .attrTween("d", function(d) {
            this._current = this._current || d;
            const interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                return arc(interpolate(t));
            };
        });

    let text = group.selectAll("text")
        .data(pie(data))
        .enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function(d) {
          if (d.endAngle - d.startAngle > 0.1) {
              return d.data.nome; 
          } else {
              return "";
          }
        })
        .attr("data-name", function(d) { return d.data.nome; })
        .on("mouseenter", function(e, d) {
          simpleDonut.highlight(e,d)
        })
        .on("mouseleave", function(e, d) {
          simpleDonut.highlight()
        });

    text.transition().duration(1000)
        .attrTween("transform", function(d) {
            this._current = this._current || d;
            const interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                const d2 = interpolate(t);
                const pos = outerArc.centroid(d2);
                return "translate(" + pos + ")";
            };
        }).styleTween("text-anchor", function(d) {
            this._current = this._current || d;
            const interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                const d2 = interpolate(t);
                return (d2.startAngle + (d2.endAngle - d2.startAngle) / 2) < Math.PI ? "start" : "end";
            };
        });

  },

  // Parte interativa do gráfico //
  highlight: function(e, d){
    const highlightP = document.querySelector(".donutWrap .donutHighlight p")
    d3.selectAll(".donutWrap .active").classed("active",false)
    if(d){
      d3.select(".donutWrap").classed("active",true)
      d3.selectAll(".donutWrap [data-name='"+d.data.nome+"']").classed("active", true)
  
      var b = this.data.filter(function(a){return a.nome == d.data.nome;})
      if(b[0]){
        b = b[0];
        highlightP.innerHTML = b.nome+"<span>"+b.valor+"%<span>"
        highlightP.parentNode.classList.add('active')
      }
    }else{
      d3.select(".donutWrap").classed("active",false)
      highlightP.parentNode.classList.remove('active')
    }
  }
}

// Chama o Gráfico //
simpleDonut.load("./data/simples.csv", "#simpleDonut")