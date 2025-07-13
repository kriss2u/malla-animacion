const data = {
  nodes: [
    { id: "Matemáticas I" },
    { id: "Matemáticas II" },
    { id: "Física I" },
    { id: "Física II" },
    { id: "Programación" }
  ],
  links: [
    { source: "Matemáticas I", target: "Matemáticas II" },
    { source: "Física I", target: "Física II" },
    { source: "Matemáticas I", target: "Física I" },
    { source: "Matemáticas II", target: "Física II" },
    { source: "Matemáticas I", target: "Programación" }
  ]
};

const svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

const simulation = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
  .force("charge", d3.forceManyBody().strength(-400))
  .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g")
  .selectAll("line")
  .data(data.links)
  .enter().append("line")
  .attr("class", "link");

const node = svg.append("g")
  .selectAll("g")
  .data(data.nodes)
  .enter().append("g")
  .attr("class", "node");

node.append("circle")
  .attr("r", 20);

node.append("text")
  .attr("dy", -30)
  .attr("text-anchor", "middle")
  .text(d => d.id);

simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("transform", d => `translate(${d.x},${d.y})`);
});
